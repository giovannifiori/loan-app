import { createLoan } from '../../../../domain/useCase/createLoan'

export function generateLoans(quantity: number) {
  const loans = []
  for (let i = 0; i < quantity; i++) {
    const value = Math.random() * 1000
    const installmentsNumber = Math.round(Math.random() * 20)

    loans.push(
      createLoan({
        description: 'emprestimo',
        firstPaymentDate: new Date(),
        installmentsNumber,
        value,
      })
    )
  }
  return loans
}
