import { todayWithoutTime } from '../../utils/date'
import { IInstallment } from '../interface/IInstallment'
import PaymentStatus from '../types/PaymentStatus'

export default class Installment implements IInstallment {
  value: number
  dueDate: Date
  paymentDate: Date | null

  constructor(value: number, dueDate: Date, paymentDate: Date | null) {
    this.value = value
    this.dueDate = dueDate
    this.paymentDate = paymentDate
  }

  paymentStatus(): PaymentStatus {
    const today = todayWithoutTime()

    if (this.paymentDate) {
      return PaymentStatus.PAID
    }

    if (today > this.dueDate) {
      return PaymentStatus.OVERDUE
    }

    return PaymentStatus.ON_TIME
  }
}
