import { testResultPublicInstance } from '../axios/api'

export const getTestResults = async () => {
  const response = await testResultPublicInstance.get('/')
  return response.data
}

export const createTestResult = async (resultData) => {
  await testResultPublicInstance.post('/', resultData)
}

export const deleteTestResult = async (id) => {
  await testResultPublicInstance.delete(`/${id}`)
}

export const updateTestResultVisibility = async (id, visibility) => {
  await testResultPublicInstance.patch(`/${id}`, { visibility })
}
