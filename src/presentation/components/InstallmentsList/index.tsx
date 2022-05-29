import React from 'react'
import { IInstallment } from '../../../domain/interface/IInstallment'
import PaymentStatus from '../../../domain/types/PaymentStatus'
import Button from '../Button'
import PaymentStatusIcon from '../PaymentStatusIcon'

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
          {installment.value.toFixed(2)}
          <PaymentStatusIcon paymentStatus={installment.paymentStatus()} />
        </p>
      </div>
      {installment.paymentStatus() === PaymentStatus.PAID && (
        <p className="helper-text">
          Pago em {installment.paymentDate?.toLocaleDateString()}
        </p>
      )}
      {installment.paymentStatus() !== PaymentStatus.PAID && (
        <>
          <p className="helper-text">
            Vencimento em {installment.dueDate.toLocaleDateString()}
          </p>
          <Button onClick={() => onPay(installment)}>Pagar</Button>
        </>
      )}
    </li>
  )
}

export default InstallmentList
