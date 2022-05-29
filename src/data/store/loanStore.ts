import create from 'zustand'
import { IInstallment } from '../../domain/interface/IInstallment'
import ILoan from '../../domain/interface/ILoan'
import Installment from '../../domain/model/Installment'
import Loan from '../../domain/model/Loan'
import { todayWithoutTime } from '../../utils/date'

type LoanState = {
  loans: Array<ILoan>
  addLoan(loan: ILoan): void
  payLoanInstallment(loan: ILoan, installment: IInstallment): void
}

const useLoanStore = create<LoanState>((set) => ({
  loans: getFromLocalStorage('loans') || [],
  addLoan: (loan) =>
    set((state) => {
      const newLoans = [...state.loans, loan]
      setToLocalStorage('loans', newLoans)
      return {
        loans: newLoans,
      }
    }),
  payLoanInstallment: (loan, installment) => {
    set((state) => {
      const loans = [...state.loans]
      const loanIndex = loans.findIndex((l) => l.id === loan.id)
      const installmentIndex = loan.installments.findIndex(
        (i) => i.index === installment.index
      )
      loans[loanIndex].installments[installmentIndex].paymentDate =
        todayWithoutTime()
      setToLocalStorage('loans', loans)
      return { loans }
    })
  },
}))

function getFromLocalStorage(key: string) {
  if (!window.localStorage.getItem(key)) return null
  const parsed: Array<ILoan> = JSON.parse(
    window.localStorage.getItem(key) as string
  )
  return parsed.map(
    (loanJson) =>
      new Loan(
        loanJson.id,
        loanJson.description,
        loanJson.value,
        new Date(loanJson.firstPaymentDate),
        loanJson.installments.map(
          (i) =>
            new Installment(
              i.value,
              i.index,
              new Date(i.dueDate),
              i.paymentDate ? new Date(i.paymentDate) : i.paymentDate
            )
        )
      )
  )
}

const setToLocalStorage = (key: string, value: object) =>
  window.localStorage.setItem(key, JSON.stringify(value))

export default useLoanStore
