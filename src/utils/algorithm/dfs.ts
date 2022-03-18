type KeyType = number | string | symbol

export interface DFSProcess<T> {
  state: T
  description?: string
}

export interface DFSNode<T> {
  id: KeyType
  state: T
  depth: number
  from: {
    node: DFSNode<T>
    description?: string
  } | null
}

export interface DFSConfig<T> {
  initialState: T
  getID(state: T): KeyType
  getChildren(state: T): DFSProcess<T>[]
  determine(state: T): 'keep' | 'reject' | 'resolve'
  isPendingPruned?: boolean
  nodesLimit?: number
  depthLimit?: number
}

function backtrack<T>(node: DFSNode<T>) {
  const path: DFSProcess<T>[] = []
  let description: string | undefined

  while (node) {
    path.push({
      state: node.state,
      description,
    })
    description = node.from?.description
    node = node.from?.node
  }

  return path.reverse()
}

export function dfs<T>({
  initialState,
  getID,
  getChildren,
  determine,
  isPendingPruned = true,
  nodesLimit,
  depthLimit,
}: DFSConfig<T>): { state: T; description?: string }[] | undefined {
  const stack: DFSNode<T>[] = []
  const dup: Record<KeyType, undefined | 'pending' | 'checked'> = {} as any
  let goal: DFSNode<T> | null = null
  let nodesCount = 0

  const initialNode: DFSNode<T> = {
    id: getID(initialState),
    state: initialState,
    depth: 0,
    from: null,
  }
  dup[initialNode.id] = 'pending'
  stack.push(initialNode)

  while (stack.length > 0) {
    const currentNode = stack.pop()
    const determination = determine(currentNode.state)

    if (determination === 'reject') {
      dup[currentNode.id] = 'checked'
      continue
    }

    if (determination === 'resolve') {
      goal = currentNode
      break
    }

    if (nodesLimit !== undefined && ++nodesCount >= nodesLimit) break

    if (depthLimit !== undefined && currentNode.depth >= depthLimit) continue

    const children = getChildren(currentNode.state).reverse()

    for (const { state, description } of children) {
      const id = getID(state)

      if (dup[id] === 'checked' || (isPendingPruned && dup[id] === 'pending'))
        continue

      dup[id] = 'pending'
      stack.push({
        id,
        state,
        depth: currentNode.depth + 1,
        from: {
          node: currentNode,
          description,
        },
      })
    }

    dup[currentNode.id] = 'checked'
  }

  return goal ? backtrack(goal) : undefined
}
