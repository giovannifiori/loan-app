import type PaymentStatus from '../types/PaymentStatus'
import { IInstallment } from './IInstallment'

export interface ILoan {
  id: string
  description: string
  value: number
  firstPaymentDate: Date
  installments: IInstallment[]
  totalInstallments(): number
  paidInstallments(): number
  nextDueDate(): Date | null
  paymentStatus(): PaymentStatus
}

export default ILoan
