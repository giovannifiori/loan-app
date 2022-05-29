import create from 'zustand'
import { IInstallment } from '../../domain/interface/IInstallment'
import ILoan from '../../domain/interface/ILoan'
import { todayWithoutTime } from '../../utils/date'

type LoanState = {
  loans: Array<ILoan>
  addLoan(loan: ILoan): void
  payLoanInstallment(loan: ILoan, installment: IInstallment): void
}

const useLoanStore = create<LoanState>((set) => ({
  loans: [],
  addLoan: (loan) =>
    set((state) => ({
      loans: [...state.loans, loan],
    })),
  payLoanInstallment: (loan, installment) => {
    set((state) => {
      const loans = [...state.loans]
      const loanIndex = loans.findIndex((l) => l.id === loan.id)
      const installmentIndex = loan.installments.findIndex(
        (i) => i.index === installment.index
      )
      loans[loanIndex].installments[installmentIndex].paymentDate =
        todayWithoutTime()
      return { loans }
    })
  },
}))

export default useLoanStore
