import Item from './Item'
import MessageData from './MessageData'
import TaxItem from './TaxItem'

export default class Order {
  items: Array<Item>

  constructor(readonly messageData: MessageData) {
    this.items = []
    this.messageData = messageData
  }

  addItem(item: Item): void {
    this.items.push(item)
  }

  getTotal(): number {
    const total = this.items.reduce((acc, item) => acc + item.price, 0)
    return total
  }

  getTaxes(): number {
    let taxes = 0

    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTax()
      }
    }

    return taxes
  }

  async printMessage(language: string): Promise<string> {
    const message = await this.messageData.read(language)
    return message.replace('${total}', String(this.getTotal())).replace('${taxes}', String(this.getTaxes()))
  }

}
