import React from 'react'
import ILoan from '../../../../domain/interface/ILoan'
import LoanListItem from '../LoanListItem'

type LoanListProps = {
  loans: Array<ILoan>
}

function LoanList({ loans }: LoanListProps) {
  return (
    <>
      {loans.map((loan) => (
        <LoanListItem key={loan.id} loan={loan} />
      ))}
    </>
  )
}

export default LoanList
