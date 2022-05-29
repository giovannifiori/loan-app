import React from 'react'
import ILoan from '../../../domain/interface/ILoan'

type LoanListProps = {
  loans: Array<ILoan>
  onLoanClicked(id: number): void
}

function LoanList({ loans, onLoanClicked }: LoanListProps) {
  return (
    <>
      {loans.map((loan) => (
        <LoanListItem key={loan.id} loan={loan} onClick={onLoanClicked} />
      ))}
    </>
  )
}

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

export default LoanList
