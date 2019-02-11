export default class Tortoise {
  constructor(Length, weight, age, name, isCool) {
    this.Length = length
    this.weight = weight
    this.age = age
    this.name = name
    this.isCool = isCool
  }

  log() {
    console.log(this)
  }
}