import create from 'zustand'
import ILoan from '../../domain/interface/ILoan'

type LoanState = {
  loans: Array<ILoan>
  addLoan(loan: ILoan): void
}

const useLoanStore = create<LoanState>((set) => ({
  loans: [],
  addLoan: (loan) =>
    set((state) => ({
      loans: [...state.loans, loan],
    })),
}))

export default useLoanStore
