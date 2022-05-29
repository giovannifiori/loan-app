import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoanPage from './pages/Loan'
import LoanListing from './pages/LoanListing'
import NewLoanPage from './pages/NewLoanPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanListing />} />
        <Route path="/new-loan" element={<NewLoanPage />} />
        <Route path="/loan/:id" element={<LoanPage />} />
      </Routes>
    </Router>
  )
}

export default App
