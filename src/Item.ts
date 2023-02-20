export default abstract class Item {

  constructor(
    readonly category: string,
    readonly description: string,
    readonly price: number
  ) {
    this.category = category
    this.description = description
    this.price = price
  }

}
