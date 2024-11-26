import React from 'react'
import Button from './ui/Button'
import useUserProfile from '../hooks/useUserProfile'

export default function TestResultItem({ result }) {
  const userProfile = useUserProfile()

  if (!userProfile) return <p>사용자 정보를 불러오는 중입니다...</p>

  return (
    <div className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-full flex justify-between items-center">
        <div>
          <p className="text-2xl font-semibold">{result.nickname}</p>
          <p className="text-lg font-bold text-gray-600">{result.mbti}</p>
        </div>
        {result.user_id === userProfile.id && (
          <div className="flex gap-2">
            <Button
              type="button"
              // onClick={() => handleVisibilityChange(result.id, result.visibility)}
            >
              {result.visibility ? '비공개로 전환' : '공개로 전환'}
            </Button>
            {/* <Button type="button" onClick={() => handleDelete(result.id)}> */}
            <Button type="button">삭제</Button>
          </div>
        )}
      </div>

      <p className="mt-2 text-sm text-gray-800">{result.description}</p>
      <p className="text-sm text-gray-500 mt-2">{result.created_at}</p>
    </div>
  )
}
