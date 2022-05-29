import PaymentStatus from '../types/PaymentStatus'
import { createLoan } from './createLoan'

test('should create Loan instance when valid form data values', () => {
  jest.useFakeTimers('modern').setSystemTime(new Date(2022, 4, 29))
  const formDataMock = {
    description: 'Nome válido',
    value: 500,
    firstPaymentDate: new Date(2022, 4, 31),
    installmentsNumber: 12,
  }

  const loan = createLoan(formDataMock)

  expect(loan.description).toEqual(formDataMock.description)
  expect(loan.value).toEqual(formDataMock.value)
  expect(loan.nextDueDate()).toEqual(formDataMock.firstPaymentDate)
  expect(loan.installments[0].dueDate).toEqual(formDataMock.firstPaymentDate)
  expect(loan.installments[0].value).toEqual(
    formDataMock.value / formDataMock.installmentsNumber
  )
  expect(loan.paidInstallments()).toEqual(0)
  expect(loan.totalInstallments()).toEqual(formDataMock.installmentsNumber)
  expect(loan.paymentStatus()).toEqual(PaymentStatus.ON_TIME)
})
