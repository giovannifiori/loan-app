import PaymentStatus from '../../domain/types/PaymentStatus'

function getPaymentStatusMessage(paymentStatus: PaymentStatus) {
  switch (paymentStatus) {
    case PaymentStatus.PAID:
      return 'Pago'
    case PaymentStatus.OVERDUE:
      return 'Em atraso'
    case PaymentStatus.ON_TIME:
      return 'Em dia'
    default:
      return ''
  }
}

function getPaymentStatusIconClass(paymentStatus: PaymentStatus) {
  switch (paymentStatus) {
    case PaymentStatus.PAID:
      return 'status-icon--paid'
    case PaymentStatus.OVERDUE:
      return 'status-icon--overdue'
    case PaymentStatus.ON_TIME:
      return 'status-icon--on-time'
    default:
      return ''
  }
}

export { getPaymentStatusMessage, getPaymentStatusIconClass }
