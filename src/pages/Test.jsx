import { useState } from 'react'
import TestForm from '../components/TestForm.jsx'
import calculateMBTI from './../utils/calculateMBTI'
import { mbtiDescriptions } from './../utils/mbtiDescriptions'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useUserProfile from '../hooks/useUserProfile.jsx'
import useTestResult from '../hooks/useTestResult.jsx'

export default function Test() {
  const {
    userProfileQuery: { data: userProfile, isPending },
  } = useUserProfile()
  const [result, setResult] = useState(null)
  const { addItem } = useTestResult()
  const navigate = useNavigate()

  if (isPending) return <p>로딩 중입니다..</p>

  const handleTestSubmit = async (answers) => {
    const mbtiResult = calculateMBTI(answers)
    setResult(mbtiResult)

    const newData = {
      id: uuidv4(),
      nickname: userProfile.nickname,
      mbti: mbtiResult,
      description: mbtiDescriptions[mbtiResult],
      created_at: new Date().toLocaleString(),
      user_id: userProfile.id,
      visibility: true,
    }
    addItem.mutate(newData)
  }

  const handleNavigateToResults = () => {
    navigate('/results')
  }

  const handleResetTest = () => setResult(null)

  return (
    <section className="flex flex-col items-center rounded-lg bg-gradient-to-b from-indigo-100 via-white to-indigo-50 p-8 my-8">
      <h1 className="text-4xl font-semibold text-indigo-600 mb-5 drop-shadow-md">
        MBTI Test
      </h1>

      {result ? (
        <div className="mt-5 bg-white p-10 rounded-xl shadow-2xl w-full max-w-3xl">
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
            Your MBTI Result
          </h2>
          <p className="text-center text-6xl font-bold text-indigo-500 mb-6">
            {result}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-center">
            {mbtiDescriptions[result] ||
              'Sorry, we do not have a description for this personality type.'}
          </p>
          <div className="flex gap-4 mt-8">
            <button
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              onClick={handleResetTest}
            >
              테스트 다시하기
            </button>
            <button
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              onClick={handleNavigateToResults}
            >
              결과 페이지로 이동하기
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <TestForm onSubmit={handleTestSubmit} />
        </div>
      )}
    </section>
  )
}
