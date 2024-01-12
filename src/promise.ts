export const resolveAfter = async <T = unknown>(timeInMs: number, resolveValue?: T) => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(resolveValue);
      }, timeInMs);
  })
}

export const rejectAfter = async <T = unknown>(timeInMs: number, rejectValue?: T) => {
  return new Promise((_, reject) => {
      setTimeout(() => {
          reject(rejectValue);
      }, timeInMs);
  })
}

export const waitFor = async (timeInMs: number) => {
  await resolveAfter(timeInMs)
}
