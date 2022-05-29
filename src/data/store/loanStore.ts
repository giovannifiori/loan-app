import create from 'zustand'
import ILoan from '../../domain/interface/ILoan'

type LoanState = {
  loans: Array<ILoan>
  addLoan(loan: ILoan): void
  getLoan(id: number): ILoan | null
}

const useLoanStore = create<LoanState>((set, get) => ({
  loans: [],
  addLoan: (loan) =>
    set((state) => ({
      loans: [...state.loans, loan],
    })),
  getLoan: (id) => get().loans.find((l) => l.id === id) || null,
}))

export default useLoanStore
