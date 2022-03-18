import cloneDeep from 'lodash/cloneDeep'

export function create2DArray<T>(
  width: number,
  height: number,
  initialValue: T | ((x: number, y: number) => T)
): T[][] {
  const result: T[][] = new Array(height)
  for (let y = 0; y < height; ++y) {
    const row: T[] = new Array(width)
    for (let x = 0; x < width; ++x) {
      if (typeof initialValue === 'function') {
        row[x] = (initialValue as Function)(x, y)
      } else {
        row[x] = cloneDeep(initialValue)
      }
    }
    result[y] = row
  }
  return result
}

export function getRandomly<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]
}
