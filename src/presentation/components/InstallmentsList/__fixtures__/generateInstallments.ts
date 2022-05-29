import Installment from '../../../../domain/model/Installment'

export function generateInstallments(quantity: number) {
  const installments = []
  for (let i = 0; i < quantity; i++) {
    const installment = new Installment(
      Math.random() * 100,
      i + 1,
      new Date(),
      null
    )
    installments.push(installment)
  }
  return installments
}
