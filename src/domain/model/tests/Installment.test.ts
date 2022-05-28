import PaymentStatus from '../../types/PaymentStatus'
import Installment from '../Installment'

test('Installment should have payment status = PAID when has payment date', () => {
  const installment = new Installment(
    500,
    new Date(2022, 4, 27),
    new Date(2022, 4, 26)
  )

  expect(installment.paymentStatus()).toEqual(PaymentStatus.PAID)
})

test('Installment should have payment status = PAID even when was paid after due date', () => {
  const installment = new Installment(
    500,
    new Date(2022, 4, 27),
    new Date(2022, 4, 29)
  )

  expect(installment.paymentStatus()).toEqual(PaymentStatus.PAID)
})

test('Installment should have payment status = OVERDUE when past due date and have no payment date', () => {
  const installment = new Installment(500, new Date(2022, 4, 27), null)
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 4, 28))

  expect(installment.paymentStatus()).toEqual(PaymentStatus.OVERDUE)
})

test('Installment should have payment status = ON_TIME when not past due date and have no payment date', () => {
  const installment = new Installment(500, new Date(2022, 4, 30), null)
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 4, 28))

  expect(installment.paymentStatus()).toEqual(PaymentStatus.ON_TIME)
})
