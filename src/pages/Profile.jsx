import React, { useState } from 'react'
import InputField from '../components/InputField'
import Button from '../components/ui/Button'
import { updateProfile } from '../api/auth'
import { useAuthContext } from '../context/AuthContext'
import { errorAlert, successAlert } from '../components/ui/Alert'

export default function Profile() {
  const { user } = useAuthContext()
  const [nickname, setNickname] = useState()

  const handleNicknameChange = (e) => {
    setNickname(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await updateProfile({ nickname }, user)
      successAlert('회원 정보가 성공적으로 수정되었습니다!')
    } catch (error) {
      errorAlert('회원 정보 수정 실패. 다시 시도해주세요.')
    }
  }

  return (
    <div className="w-full max-w-md p-10 bg-gray-100 border rounded-md">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Edit Profile</h2>
        <p className="text-lg text-gray-600">
          Update your personal information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="nickname" className="text-lg font-semibold">
            Nickname
          </label>
          <InputField
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Update Profile</Button>
        </div>
      </form>
    </div>
  )
}
