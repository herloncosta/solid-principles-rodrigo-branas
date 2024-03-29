import Order from './Order'
import Beer from './Beer'
import Whisky from './Whisky'
import Water from './Water'
import MessageDataFile from './MessageDataFile'

test('Deve criar um pedido e calcular o total', function () {
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Bhrama', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  const total = order.getTotal()
  expect(total).toBe(111)
})

test('Deve criar um pedido e calcular os impostos', function () {
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Bhrama', 10)) // 10%
  order.addItem(new Whisky('Jack Daniels', 100)) // 20%
  order.addItem(new Water('Crystal', 1)) // free
  const taxes = order.getTaxes()
  expect(taxes).toBe(21)
})

test('Deve criar um pedido e imprimir uma mensagem em português', async function () {
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Bhrama', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  const message = await order.printMessage('pt')
  expect(message).toBe('O total foi R$111, os impostos foram R$21. Obrigado pelo seu pedido!')
})

test('Deve criar um pedido e imprimir uma mensagem em inglês', async function () {
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Bhrama', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 1))
  const message = await order.printMessage('en')
  expect(message).toBe('The total was U$$111, the taxes was U$$21. Thanks for your order!')
})
