import { useState } from 'react'
import { questions } from '../data/questions'

export default function useAnswerForm() {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: '', answer: '' })
  )

  const handleChange = (index, value) => {
    const newAnswers = [...answers]
    newAnswers[index] = { type: questions[index].type, answer: value }
    setAnswers(newAnswers)
  }

  return { answers, handleChange }
}
