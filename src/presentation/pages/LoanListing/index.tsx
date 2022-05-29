import React from 'react'
import { useNavigate } from 'react-router-dom'
import useLoanStore from '../../../data/store/loanStore'
import Button from '../../components/Button'
import LoanList from '../../components/LoanList/LoanListContainer'
import Layout from '../../Layout'

function LoanListing() {
  const navigate = useNavigate()
  const loans = useLoanStore((state) => state.loans)

  return (
    <Layout title="Loan app">
      <Button onClick={() => navigate('/new-loan')}>Novo empréstimo</Button>
      <LoanList loans={loans} />
    </Layout>
  )
}

export default LoanListing
