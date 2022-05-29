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

export { getPaymentStatusMessage }
