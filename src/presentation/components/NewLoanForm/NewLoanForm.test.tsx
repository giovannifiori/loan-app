import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewLoanForm from '.'

test('should not save with empty fields', async () => {
  const handleSubmit = jest.fn()
  await act(() => {
    render(<NewLoanForm onSubmit={handleSubmit} />)
  })

  await act(() => {
    userEvent.click(screen.getByRole('button', { name: 'Salvar' }))
  })

  await waitFor(() => expect(handleSubmit).not.toBeCalled())
})

test('should create loan with correct values input', async () => {
  const handleSubmit = jest.fn()
  await act(() => {
    render(<NewLoanForm onSubmit={handleSubmit} />)
  })

  userEvent.type(screen.getByLabelText('Descrição'), 'descricao')
  userEvent.type(screen.getByLabelText('Valor'), '600')
  userEvent.type(screen.getByLabelText('Data primeiro pagamento'), '2022-06-30')
  userEvent.clear(screen.getByLabelText('Número de parcelas'))
  userEvent.type(screen.getByLabelText('Número de parcelas'), '12')
  userEvent.click(screen.getByRole('button', { name: 'Salvar' }))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      {
        description: 'descricao',
        value: 600,
        firstPaymentDate: new Date(2022, 5, 30),
        installmentsNumber: 12,
      },
      expect.anything()
    )
  )
})
