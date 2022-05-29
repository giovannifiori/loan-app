import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLoanStore from '../../../data/store/loanStore'
import ILoan from '../../../domain/interface/ILoan'
import InstallmentList from '../../components/InstallmentsList'
import Layout from '../../Layout'

function Loan() {
  const { id } = useParams()
  const navigate = useNavigate()
  const getLoan = useLoanStore((state) => state.getLoan)
  const [loan, setLoan] = useState<ILoan | null>(null)

  useEffect(() => {
    const loan = getLoan(Number(id))
    if (!loan) {
      navigate(-1)
    }
    setLoan(loan)
  }, [getLoan])

  return (
    <Layout title={loan?.description || 'Meu empréstimo'}>
      <p>Valor: R${loan?.value}</p>
      <p>
        Data primeiro pagamento: {loan?.firstPaymentDate.toLocaleDateString()}
      </p>
      <p>Total de parcelas: {loan?.totalInstallments()}</p>
      <p>Próximo vencimento: {loan?.nextDueDate()?.toLocaleDateString()}</p>
      <p>Status: {loan?.paymentStatus()}</p>
      <br />
      <InstallmentList installments={loan?.installments} />
    </Layout>
  )
}

export default Loan
