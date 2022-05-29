import React from 'react'
import { IInstallment } from '../../../domain/interface/IInstallment'

type InstallmentListProps = {
  installments: Array<IInstallment> | undefined
}

function InstallmentList({ installments }: InstallmentListProps) {
  if (!installments) return null
  return (
    <>
      {installments.map((installment, index) => (
        <InstallmentListItem
          key={index}
          installment={installment}
          index={index + 1}
          total={installments.length}
        />
      ))}
    </>
  )
}

type InstallmentItemProps = {
  installment: IInstallment
  index: number
  total: number
}

function InstallmentListItem({
  installment,
  index,
  total,
}: InstallmentItemProps) {
  return (
    <li>
      <div>
        <p>
          Parcela {index} de {total} - R${installment.value} -{' '}
          {installment.paymentStatus()}
        </p>
        <p>Vencimento em {installment.dueDate.toLocaleDateString()}</p>
      </div>
    </li>
  )
}

export default InstallmentList
