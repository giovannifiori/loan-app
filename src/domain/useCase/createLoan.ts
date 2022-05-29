import { addMonths } from 'date-fns'
import { NewLoanFormData } from '../../presentation/components/NewLoanForm'
import Installment from '../model/Installment'
import Loan from '../model/Loan'

export function createLoan(formData: NewLoanFormData) {
  const { description, value, firstPaymentDate, installmentsNumber } = formData

  const installmentValue = value / installmentsNumber
  const firstDueDate = new Date(
    firstPaymentDate.getUTCFullYear(),
    firstPaymentDate.getUTCMonth(),
    firstPaymentDate.getUTCDate()
  )
  const installments: Array<Installment> = []
  for (let index = 0; index < installmentsNumber; index++) {
    const dueDate = addMonths(firstDueDate, index)
    const installment = new Installment(
      installmentValue,
      index + 1,
      dueDate,
      null
    )
    installments.push(installment)
  }

  return new Loan(Date.now(), description, value, firstDueDate, installments)
}
