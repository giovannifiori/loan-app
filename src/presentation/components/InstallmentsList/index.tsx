import React from 'react'
import { IInstallment } from '../../../domain/interface/IInstallment'
import PaymentStatus from '../../../domain/types/PaymentStatus'
import { getPaymentStatusMessage } from '../../utils/payment'
import Button from '../Button'

type InstallmentListProps = {
  installments: Array<IInstallment> | undefined
  onPayInstallment(installment: IInstallment): void
}

function InstallmentList({
  installments,
  onPayInstallment,
}: InstallmentListProps) {
  if (!installments) return null
  return (
    <>
      <h2 className="list-title">Parcelas</h2>
      <ul>
        {installments.map((installment) => (
          <InstallmentListItem
            key={installment.index}
            installment={installment}
            total={installments.length}
            onPay={onPayInstallment}
          />
        ))}
      </ul>
    </>
  )
}

type InstallmentItemProps = {
  installment: IInstallment
  total: number
  onPay(installment: IInstallment): void
}

function InstallmentListItem({
  installment,
  total,
  onPay,
}: InstallmentItemProps) {
  return (
    <li className="list-item">
      <div>
        <p>
          Parcela {installment.index} de {total} - R$
          {installment.value.toFixed(2)} -{' '}
          {getPaymentStatusMessage(installment.paymentStatus())}
        </p>
        <p>Vencimento em {installment.dueDate.toLocaleDateString()}</p>
      </div>
      {installment.paymentStatus() != PaymentStatus.PAID && (
        <Button onClick={() => onPay(installment)}>Pagar</Button>
      )}
    </li>
  )
}

export default InstallmentList
