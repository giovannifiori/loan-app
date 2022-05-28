import PaymentStatus from '../../types/PaymentStatus'
import Installment from '../Installment'
import Loan from '../Loan'

test('totalInstallments should be the length of installments instances', () => {
  const loan = new Loan(1, 'Empréstimo X', 500, new Date(2022, 5, 28), [
    new Installment(50, new Date(2022, 5, 28), null),
    new Installment(50, new Date(2022, 6, 28), null),
    new Installment(50, new Date(2022, 7, 28), null),
  ])

  expect(loan.totalInstallments()).toEqual(3)
})

test('nextDueDate should return the due date of the first unpaid installment', () => {
  const loan = new Loan(1, 'Empréstimo X', 500, new Date(2022, 5, 28), [
    new Installment(50, new Date(2022, 5, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 6, 28), null),
    new Installment(50, new Date(2022, 7, 28), null),
  ])

  expect(loan.nextDueDate()).toEqual(new Date(2022, 6, 28))
})

test('nextDueDate should return null when all installments are paid', () => {
  const loan = new Loan(1, 'Empréstimo X', 500, new Date(2022, 5, 28), [
    new Installment(50, new Date(2022, 5, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 6, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 7, 28), new Date(2022, 5, 28)),
  ])

  expect(loan.nextDueDate()).toBeNull()
})

test('should have payment status = PAID when all installments are paid', () => {
  const loan = new Loan(1, 'Empréstimo X', 500, new Date(2022, 5, 28), [
    new Installment(50, new Date(2022, 5, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 6, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 7, 28), new Date(2022, 5, 28)),
  ])

  expect(loan.paymentStatus()).toEqual(PaymentStatus.PAID)
})

test('should have payment status = ON_TIME when there are no OVERDUE installments', () => {
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 6, 25))
  const loan = new Loan(1, 'Empréstimo X', 500, new Date(2022, 5, 28), [
    new Installment(50, new Date(2022, 5, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 6, 28), null),
    new Installment(50, new Date(2022, 7, 28), null),
  ])

  expect(loan.paymentStatus()).toEqual(PaymentStatus.ON_TIME)
})

test('should have payment status = OVERDUE when past installment due date', () => {
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 6, 29))
  const loan = new Loan(1, 'Empréstimo X', 500, new Date(2022, 5, 28), [
    new Installment(50, new Date(2022, 5, 28), new Date(2022, 5, 28)),
    new Installment(50, new Date(2022, 6, 28), null),
    new Installment(50, new Date(2022, 7, 28), null),
  ])

  expect(loan.paymentStatus()).toEqual(PaymentStatus.OVERDUE)
})
