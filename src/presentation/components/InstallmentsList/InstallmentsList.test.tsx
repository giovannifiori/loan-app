import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InstallmentsList from '.'
import { generateInstallments } from './__fixtures__/generateInstallments'

test('should render all elements', () => {
  render(
    <InstallmentsList
      installments={generateInstallments(15)}
      onPayInstallment={jest.fn()}
    />
  )

  expect(screen.getByRole('list')).toBeInTheDocument()
  expect(screen.getAllByRole('listitem')).toHaveLength(15)
})

test('should call callback function when click to pay installment', () => {
  const onPayMock = jest.fn()
  const installments = generateInstallments(5)
  render(
    <InstallmentsList
      installments={installments}
      onPayInstallment={onPayMock}
    />
  )

  const firstInstallment = screen.getAllByRole('listitem')[0]
  userEvent.click(
    within(firstInstallment).getByRole('button', {
      name: 'Pagar',
    })
  )
  expect(onPayMock).not.toBeCalledWith(installments[1])
  expect(onPayMock).toBeCalledWith(installments[0])
})
