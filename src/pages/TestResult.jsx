import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from '../api/testResult'
import TestResultItem from '../components/TestResultItem'

export default function TestResult() {
  // const userProfile = useUserProfile()
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['mbti'],
    queryFn: getTestResults,
  })

  const handleVisibilityChange = async (id, visibility) => {
    const updatedVisibility = !visibility
    await updateTestResultVisibility(id, updatedVisibility)

    queryClient.invalidateQueries(['mbti'])
  }

  const handleDelete = async (id) => {
    await deleteTestResult(id)
  }

  if (isLoading) return <p>로딩중입니다...</p>
  if (isError) return <p>데이터를 가져오는 중 오류가 발생했습니다.</p>
  // if (!userProfile) return <p>사용자 정보를 불러오는 중입니다...</p>

  return (
    <div className="p-6" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <h2 className="text-4xl font-semibold text-indigo-600 text-center mb-8">
        Test Results
      </h2>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((result) => (
          <TestResultItem result={result} />
        ))}
      </div>
    </div>
  )
}
