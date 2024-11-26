import React from 'react'
import TestResultItem from '../components/TestResultItem'
import useTestResult from '../hooks/useTestResult'
import useUserProfile from '../hooks/useUserProfile'

export default function TestResult() {
  const {
    testResultQuery: { isPending, data },
  } = useTestResult()
  const userProfile = useUserProfile()

  if (!userProfile) return <p>사용자 정보를 불러오는 중입니다...</p>
  if (isPending) return <p>로딩중입니다...</p>

  const filteredData = data.filter(
    (result) => result.visibility || result.user_id === userProfile.id
  )

  return (
    <div className="p-6" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <h2 className="text-4xl font-semibold text-indigo-600 text-center mb-8">
        Test Results
      </h2>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((result) => (
          <TestResultItem result={result} userProfile={userProfile} />
        ))}
      </div>
    </div>
  )
}
