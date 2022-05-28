import React from 'react'
import Installment from '../../../domain/model/Installment'
import Loan from '../../../domain/model/Loan'
import Button from '../../components/Button'
import LoanList from '../../components/LoanList/LoanListContainer'
import Layout from '../../Layout'

const loans = [
  new Loan(1, 'Empréstimo X', 500, new Date(), [
    new Installment(50, new Date(), null),
  ]),
  new Loan(2, 'Empréstimo y', 1500, new Date(), [
    new Installment(50, new Date(), null),
  ]),
  new Loan(3, 'Empréstimo Z', 4500, new Date(), [
    new Installment(50, new Date(), null),
  ]),
]

function LoanListing() {
  return (
    <Layout title="Loan app">
      <Button>Novo empréstimo</Button>
      <LoanList loans={loans} />
    </Layout>
  )
}

export default LoanListing
