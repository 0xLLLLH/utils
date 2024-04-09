export async function resolveAfter<T = unknown>(timeInMs: number, resolveValue?: T) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolveValue)
    }, timeInMs)
  })
}

export async function rejectAfter<T = unknown>(timeInMs: number, rejectValue?: T) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(rejectValue)
    }, timeInMs)
  })
}

export async function waitFor(timeInMs: number) {
  await resolveAfter(timeInMs)
}
