import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoanList from '.'
import { generateLoans } from './__fixtures__/generateLoans'

test('should render all elements', () => {
  render(<LoanList loans={generateLoans(4)} onLoanClicked={jest.fn()} />)

  expect(screen.getByRole('list')).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(4)
})

test('should call callback function when click on loan', () => {
  const onPayMock = jest.fn()
  const loans = generateLoans(5)
  render(<LoanList loans={loans} onLoanClicked={onPayMock} />)

  userEvent.click(screen.getAllByRole('listitem')[0])
  expect(onPayMock).not.toBeCalledWith(loans[1].id)
  expect(onPayMock).toBeCalledWith(loans[0].id)
})
