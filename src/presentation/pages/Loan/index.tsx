import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLoanStore from '../../../data/store/loanStore'
import { IInstallment } from '../../../domain/interface/IInstallment'
import ILoan from '../../../domain/interface/ILoan'
import PaymentStatus from '../../../domain/types/PaymentStatus'
import InstallmentList from '../../components/InstallmentsList'
import Layout from '../../Layout'
import { getPaymentStatusMessage } from '../../utils/payment'

function Loan() {
  const { id } = useParams()
  const navigate = useNavigate()
  const loans = useLoanStore((state) => state.loans)
  const payInstallment = useLoanStore((state) => state.payLoanInstallment)

  const loan = loans.find((l) => l.id === Number(id))
  if (!loan) {
    navigate(-1)
  }

  const handlePayInstallment = (installment: IInstallment) => {
    payInstallment(loan as ILoan, installment)
  }

  const loanPaymentStatus = loan?.paymentStatus()

  return (
    <Layout title={loan?.description || 'Meu empréstimo'}>
      <p>Valor contratado: R${loan?.value}</p>
      <p>
        Data estipulada para primeiro pagamento:{' '}
        {loan?.firstPaymentDate.toLocaleDateString()}
      </p>
      <p>
        Parcelas pagas: {loan?.paidInstallments()} de{' '}
        {loan?.totalInstallments()}
      </p>
      {loanPaymentStatus !== PaymentStatus.PAID && (
        <p>Próximo vencimento: {loan?.nextDueDate()?.toLocaleDateString()}</p>
      )}
      {loanPaymentStatus && (
        <p>Status: {getPaymentStatusMessage(loanPaymentStatus)}</p>
      )}
      <br />
      <InstallmentList
        installments={loan?.installments}
        onPayInstallment={handlePayInstallment}
      />
    </Layout>
  )
}

export default Loan
