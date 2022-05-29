import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

test('should render children as text', () => {
  render(<Button>Salvar</Button>)

  expect(
    screen.getByRole('button', {
      name: 'Salvar',
    })
  ).toBeInTheDocument()
})

test('should call onClick callback when clicked', () => {
  const onCLickMock = jest.fn()
  render(<Button onClick={onCLickMock}>Salvar</Button>)
  userEvent.click(
    screen.getByRole('button', {
      name: 'Salvar',
    })
  )
  expect(onCLickMock).toBeCalled()
})
