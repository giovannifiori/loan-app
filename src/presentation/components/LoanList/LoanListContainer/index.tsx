import React from 'react'
import ILoan from '../../../../domain/interface/ILoan'
import LoanListItem from '../LoanListItem'

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

export default LoanList
