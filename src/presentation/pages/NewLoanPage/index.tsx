import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { addMonths } from 'date-fns'
import Loan from '../../../domain/model/Loan'
import Installment from '../../../domain/model/Installment'
import NewLoanForm, { NewLoanFormData } from '../../components/NewLoanForm'
import useLoanStore from '../../../data/store/loanStore'
import Layout from '../../Layout'

function NewLoanPage() {
  const navigate = useNavigate()
  const addLoan = useLoanStore((state) => state.addLoan)

  const createLoanFromFormData = useCallback(
    (formData: NewLoanFormData) => {
      const { description, value, firstPaymentDate, installmentsNumber } =
        formData

      const installmentValue = value / installmentsNumber
      const firstDueDate = new Date(
        firstPaymentDate.getUTCFullYear(),
        firstPaymentDate.getUTCMonth(),
        firstPaymentDate.getUTCDate()
      )
      const installments: Array<Installment> = []
      for (let index = 0; index < installmentsNumber; index++) {
        const dueDate = addMonths(firstDueDate, index)
        const installment = new Installment(installmentValue, dueDate, null)
        installments.push(installment)
      }

      return new Loan(
        Date.now(),
        description,
        value,
        firstDueDate,
        installments
      )
    },
    [addLoan]
  )

  const handleFormSubmit = (formData: NewLoanFormData) => {
    const loan = createLoanFromFormData(formData)
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
