import React from 'react'
import ILoan from '../../../../domain/interface/ILoan'

type LoanItemProps = {
  loan: ILoan
}

function LoanListItem({ loan }: LoanItemProps) {
  return (
    <div>
      <p>{`${loan.description} - R$${loan.value}`}</p>
      <span>
        próximo vencimento: {loan.nextDueDate()?.toLocaleDateString()}
      </span>
    </div>
  )
}

export default LoanListItem
