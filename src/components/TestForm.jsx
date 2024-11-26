import React from 'react'
import { questions } from '../data/questions'
import useAnswerForm from '../hooks/useAnswerForm'
import Button from './ui/Button'

export default function TestForm({ onSubmit }) {
  const { answers, handleChange } = useAnswerForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Answers:', answers)
    onSubmit(answers)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg">
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold text-lg mb-3">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, i) => (
              <label
                key={i}
                className={`block p-3 border rounded-lg cursor-pointer transition-colors duration-300 ${
                  answers[index]?.answer === q.type.split('/')[i]
                    ? 'bg-gray-100'
                    : ''
                } hover:bg-gray-100`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={q.type.split('/')[i]}
                  checked={answers[index]?.answer === q.type.split('/')[i]}
                  onChange={() => handleChange(index, q.type.split('/')[i])}
                  className="mr-2 text-primary-color"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button type="submit">제출하기</Button>
    </form>
  )
}
