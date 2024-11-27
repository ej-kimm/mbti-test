import { getUserProfile, updateProfile } from '../api/auth'
import { useAuthContext } from '../context/AuthContext'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

export default function useUserProfile() {
  const { user: token } = useAuthContext()
  const queryClient = useQueryClient()

  const userProfileQuery = useQuery({
    queryKey: ['userProfile', token],
    queryFn: getUserProfile,
    enabled: !!token,
  })

  // 프로필 수정
  const updateUser = useMutation({
    mutationFn: ({ nickname }) => updateProfile({ nickname }),
    onSuccess: () => {
      queryClient.invalidateQueries(['userProfile', token])
    },
  })

  return { userProfileQuery, updateUser }
}
