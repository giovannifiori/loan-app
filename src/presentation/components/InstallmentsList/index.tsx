import React from 'react'
import { IInstallment } from '../../../domain/interface/IInstallment'

type InstallmentListProps = {
  installments: Array<IInstallment> | undefined
}

function InstallmentList({ installments }: InstallmentListProps) {
  if (!installments) return null
  return (
    <>
      {installments.map((installment) => (
        <InstallmentListItem
          key={installment.index}
          installment={installment}
          total={installments.length}
        />
      ))}
    </>
  )
}

type InstallmentItemProps = {
  installment: IInstallment
  total: number
}

function InstallmentListItem({ installment, total }: InstallmentItemProps) {
  return (
    <li>
      <div>
        <p>
          Parcela {installment.index} de {total} - R${installment.value} -{' '}
          {installment.paymentStatus()}
        </p>
        <p>Vencimento em {installment.dueDate.toLocaleDateString()}</p>
      </div>
    </li>
  )
}

export default InstallmentList
