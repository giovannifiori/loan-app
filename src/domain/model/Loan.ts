import ILoan from '../interface/ILoan'
import PaymentStatus from '../types/PaymentStatus'
import Installment from './Installment'

export default class Loan implements ILoan {
  id: string
  description: string
  value: number
  firstPaymentDate: Date
  installments: Installment[]

  constructor(
    id: string,
    description: string,
    value: number,
    firstPaymentDate: Date,
    installments: Installment[]
  ) {
    this.id = id
    this.description = description
    this.value = value
    this.firstPaymentDate = firstPaymentDate
    this.installments = installments
  }

  totalInstallments() {
    return this.installments.length
  }

  paidInstallments() {
    let count = 0
    this.installments.forEach((i) => {
      if (i.paymentDate) {
        count++
      }
    })
    return count
  }

  nextDueDate() {
    for (const installment of this.installments) {
      if (installment.paymentStatus() !== PaymentStatus.PAID) {
        return installment.dueDate
      }
    }

    return null
  }

  paymentStatus() {
    for (const installment of this.installments) {
      const installmentPaymentStatus = installment.paymentStatus()
      if (installmentPaymentStatus === PaymentStatus.OVERDUE) {
        return PaymentStatus.OVERDUE
      }
      if (installmentPaymentStatus == PaymentStatus.ON_TIME) {
        return PaymentStatus.ON_TIME
      }
    }
    return PaymentStatus.PAID
  }
}
