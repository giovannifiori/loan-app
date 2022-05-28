import PaymentStatus from '../types/PaymentStatus'

export interface IInstallment {
  value: number
  dueDate: Date
  paymentDate: Date | null
  paymentStatus(): PaymentStatus
}
