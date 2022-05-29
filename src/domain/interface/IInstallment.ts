import PaymentStatus from '../types/PaymentStatus'

export interface IInstallment {
  value: number
  index: number
  dueDate: Date
  paymentDate: Date | null
  paymentStatus(): PaymentStatus
}
