export function getRandomIntBetweenTwoValues(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}
