import React from 'react'
import ILoan from '../../../domain/interface/ILoan'
import PaymentStatus from '../../../domain/types/PaymentStatus'
import { getPaymentStatusMessage } from '../../utils/payment'

type LoanListProps = {
  loans: Array<ILoan>
  onLoanClicked(id: number): void
}

function LoanList({ loans, onLoanClicked }: LoanListProps) {
  return (
    <>
      <h2 className="list-title">Meus empréstimos</h2>
      <ul className="list">
        {loans.map((loan) => (
          <LoanListItem key={loan.id} loan={loan} onClick={onLoanClicked} />
        ))}
      </ul>
    </>
  )
}

type LoanItemProps = {
  loan: ILoan
  onClick(id: number): void
}

function LoanListItem({ loan, onClick }: LoanItemProps) {
  return (
    <li className="list-item loan-list-item" onClick={() => onClick(loan.id)}>
      <p>
        {`${loan.description} - R$${loan.value}`} -{' '}
        {getPaymentStatusMessage(loan.paymentStatus())}
      </p>
      {loan.paymentStatus() !== PaymentStatus.PAID && (
        <span>
          próximo vencimento: {loan.nextDueDate()?.toLocaleDateString()}
        </span>
      )}
    </li>
  )
}

export default LoanList
