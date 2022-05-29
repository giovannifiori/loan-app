import React from 'react'
import PaymentStatus from '../../../domain/types/PaymentStatus'
import {
  getPaymentStatusIconClass,
  getPaymentStatusMessage,
} from '../../utils/payment'
import './PaymentStatusIcon.css'

type PaymentStatusIconProps = {
  paymentStatus: PaymentStatus
}

function PaymentStatusIcon({ paymentStatus }: PaymentStatusIconProps) {
  return (
    <span
      className={`status-icon ${getPaymentStatusIconClass(paymentStatus)}`}
      title={getPaymentStatusMessage(paymentStatus)}
    />
  )
}

export default PaymentStatusIcon
