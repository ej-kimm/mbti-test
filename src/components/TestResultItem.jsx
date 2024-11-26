import React from 'react'
import Button from './ui/Button'
import useTestResult from '../hooks/useTestResult'

export default function TestResultItem({ result, userProfile }) {
  const { changeItem, deleteItem } = useTestResult()

  const handleVisibility = () => {
    changeItem.mutate({ id: result.id, visibility: result.visibility })
  }

  const handleDelete = () => {
    deleteItem.mutate(result.id)
  }

  return (
    <div className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">{result.nickname}</p>
          <p className="text-lg font-bold text-gray-600">{result.mbti}</p>
        </div>
        {result.user_id === userProfile.id && (
          <div className="flex gap-2">
            <Button type="button" onClick={handleVisibility}>
              {result.visibility ? '비공개로 전환' : '공개로 전환'}
            </Button>
            <Button type="button" onClick={handleDelete}>
              삭제
            </Button>
          </div>
        )}
      </div>

      <p className="mt-2 text-sm text-gray-800">{result.description}</p>
      <p className="text-sm text-gray-500 mt-2">{result.created_at}</p>
    </div>
  )
}
