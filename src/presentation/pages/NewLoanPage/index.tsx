import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewLoanForm, { NewLoanFormData } from '../../components/NewLoanForm'
import useLoanStore from '../../../data/store/loanStore'
import Layout from '../../Layout'
import { createLoan } from '../../../domain/useCase/createLoan'

function NewLoanPage() {
  const navigate = useNavigate()
  const addLoan = useLoanStore((state) => state.addLoan)

  const handleFormSubmit = (formData: NewLoanFormData) => {
    const loan = createLoan(formData)
    addLoan(loan)
    navigate('/', {
      replace: true,
    })
  }

  return (
    <Layout title="Novo empréstimo">
      <NewLoanForm onSubmit={handleFormSubmit} />
    </Layout>
  )
}

export default NewLoanPage
