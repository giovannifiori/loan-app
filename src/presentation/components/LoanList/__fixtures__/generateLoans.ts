import Installment from '../../../../domain/model/Installment'
import Loan from '../../../../domain/model/Loan'

export function generateLoans(quantity: number) {
  const loans = []
  for (let i = 0; i < quantity; i++) {
    const loanValue = Math.random() * 1000
    const installmentsNumber = Math.round(Math.random() * 20)
    const installments = []
    for (let j = 0; j < installmentsNumber; j++) {
      installments.push(
        new Installment(loanValue / installmentsNumber, j + 1, new Date(), null)
      )
    }
    const loan = new Loan(i, 'emprestimo', loanValue, new Date(), installments)
    loans.push(loan)
  }
  return loans
}
