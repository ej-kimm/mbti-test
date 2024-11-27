import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import {
  createTestResult,
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from '../api/testResult'
import { useAuthContext } from '../context/AuthContext'

export default function useTestResult() {
  const { user: token } = useAuthContext()
  const queryClient = useQueryClient()

  const testResultQuery = useQuery({
    queryKey: ['mbti'],
    queryFn: getTestResults,
    enabled: !!token,
  })

  // 테스트 생성
  const addItem = useMutation({
    mutationFn: (resultData) => createTestResult(resultData),
    onSuccess: () => {
      queryClient.invalidateQueries(['mbti'])
    },
  })

  // 비공개, 공개 처리
  const changeItem = useMutation({
    mutationFn: ({ id, visibility }) => {
      const updatedVisibility = !visibility
      return updateTestResultVisibility(id, updatedVisibility)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['mbti'])
    },
  })

  // 결과 삭제
  const deleteItem = useMutation({
    mutationFn: (id) => deleteTestResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['mbti'])
    },
  })

  return { testResultQuery, addItem, changeItem, deleteItem }
}
