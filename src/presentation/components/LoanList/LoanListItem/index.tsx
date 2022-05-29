import React from 'react'
import ILoan from '../../../../domain/interface/ILoan'

type LoanItemProps = {
  loan: ILoan
  onClick(id: number): void
}

function LoanListItem({ loan, onClick }: LoanItemProps) {
  return (
    <div onClick={() => onClick(loan.id)}>
      <p>{`${loan.description} - R$${loan.value}`}</p>
      <span>
        próximo vencimento: {loan.nextDueDate()?.toLocaleDateString()}
      </span>
    </div>
  )
}

export default LoanListItem
