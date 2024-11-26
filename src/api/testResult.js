import axios from 'axios'

const API_URL = 'http://localhost:5000/testResults'

export const getTestResults = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

export const createTestResult = async (resultData) => {
  await axios.post(API_URL, resultData)
}

export const deleteTestResult = async (id) => {
  await axios.delete(`${API_URL}/${id}`)
}

export const updateTestResultVisibility = async (id, visibility) => {
  axios.patch(`${API_URL}/${id}`, { visibility })
}