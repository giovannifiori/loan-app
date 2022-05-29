import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import './NewLoanForm.css'

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
  } = useForm<NewLoanFormData>({
    defaultValues: {
      installmentsNumber: 1,
    },
  })

  return (
    <form className="form-new-loan" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          type="text"
          {...register('description', {
            required: 'Insira uma descrição',
          })}
        />
        <span className="field-error">{errors.description?.message}</span>
      </div>
      <div className="form-field">
        <label htmlFor="value">Valor</label>
        <input
          id="value"
          type="number"
          step="0.01"
          {...register('value', {
            required: 'Insira um valor monetário',
            min: {
              value: 50,
              message: 'Disponível a partir de R$50',
            },
            valueAsNumber: true,
          })}
        />
        <span className="field-error">{errors.value?.message}</span>
      </div>
      <div className="form-field">
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
        <span className="field-error">{errors.firstPaymentDate?.message}</span>
      </div>
      <div className="form-field">
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
        <span className="field-error">
          {errors.installmentsNumber?.message}
        </span>
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}

export default NewLoanForm
