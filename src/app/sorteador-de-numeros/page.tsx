'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { Pointer } from 'lucide-react'

import { Center } from '@/components/Center'
import { Input } from '@/components/Input'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { BackButton } from '@/components/BackButton'

import { getRandomIntBetweenTwoValues } from '@/utils/get-random-int'
import styles from './page.module.scss'

export default function SorteadorDeNumeros() {
  const [values, setValues] = useState({
    quantity: '1',
    min: '1',
    max: '100',
  })

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  function getFormData() {
    return {
      quantity: Number(values.quantity),
      min: Number(values.min),
      max: Number(values.max),
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { quantity, min, max } = getFormData()
    const result: number[] = []

    while (result.length < quantity) {
      const number = getRandomIntBetweenTwoValues(min, max)

      if (!result.includes(number)) {
        result.push(number)
      }
    }

    console.log('Resultado', result)
  }

  return (
    <Center>
      <Container>
        <header className={styles.header}>
          <BackButton href="/">Voltar para página inicial</BackButton>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sortear</h2>

          <div className={styles.flex}>
            <Input
              type="number"
              min={1}
              required
              name="quantity"
              value={values.quantity}
              onChange={handleChangeInput}
            />

            <span>número entre</span>

            <Input
              type="number"
              min={1}
              required
              name="min"
              value={values.min}
              onChange={handleChangeInput}
            />

            <span>e</span>

            <Input
              type="number"
              min={1}
              required
              name="max"
              value={values.max}
              onChange={handleChangeInput}
            />
          </div>

          <Button type="submit">
            <Pointer size={20} />
            Sortear agora
          </Button>
        </form>
      </Container>
    </Center>
  )
}
