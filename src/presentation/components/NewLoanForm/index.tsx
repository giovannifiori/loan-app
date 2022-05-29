import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

export interface NewLoanFormData {
  description: string
  value: number
  firstPaymentDate: Date
  installmentsNumber: number
}

type FormProps = {
  onSubmit: SubmitHandler<NewLoanFormData>
}

function NewLoanForm({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewLoanFormData>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          type="text"
          {...register('description', {
            required: 'Insira uma descrição',
          })}
        />
        {errors.description?.message}
      </div>
      <div>
        <label htmlFor="value">Valor</label>
        <input
          id="value"
          type="number"
          {...register('value', {
            required: true,
            min: {
              value: 50,
              message: 'Disponível a partir de R$50',
            },
            valueAsNumber: true,
          })}
        />
        {errors.value?.message}
      </div>
      <div>
        <label htmlFor="firstPaymentDate">Data primeiro pagamento</label>
        <input
          id="firstPaymentDate"
          type="date"
          {...register('firstPaymentDate', {
            required: 'Insira a data do primeiro pagamento',
            valueAsDate: true,
            validate: (value) => {
              const errorMsg = 'Data inválida'
              if (!value) return errorMsg
              if (isNaN(value.getTime())) return errorMsg

              return true
            },
          })}
        />
        {errors.firstPaymentDate?.message}
      </div>
      <div>
        <label htmlFor="installmentsNumber">Número de parcelas</label>
        <input
          id="installmentsNumber"
          type="number"
          {...register('installmentsNumber', {
            required: 'Indique a quantidade de parcelas',
            min: 1,
            max: 60,
            valueAsNumber: true,
          })}
        />
        {errors.installmentsNumber?.message}
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}

export default NewLoanForm
