import React from 'react'
import ILoan from '../../../domain/interface/ILoan'
import PaymentStatus from '../../../domain/types/PaymentStatus'
import { getPaymentStatusMessage } from '../../utils/payment'
import './LoanList.css'

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
      <div>
        <p>
          {`${loan.description} - R$${loan.value}`} -{' '}
          {getPaymentStatusMessage(loan.paymentStatus())}
        </p>
        {loan.paymentStatus() !== PaymentStatus.PAID && (
          <span className="helper-text">
            Próximo vencimento: {loan.nextDueDate()?.toLocaleDateString()}
          </span>
        )}
      </div>
      <div>
        <span>
          {loan.paidInstallments()}/{loan.totalInstallments()}
        </span>
      </div>
    </li>
  )
}

export default LoanList
