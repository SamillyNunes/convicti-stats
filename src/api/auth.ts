import axiosInstance from '@/services/http'

export const login = async (username: string, password: string) => {
  const payload = {
    grant_type: 'password',
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
    username: username,
    password: password,
  }

  try {
    const resp = await axiosInstance.post('/oauth/token', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return resp.data
  } catch (error) {
    console.error('Erro ao tentar fazer login: ', error)
    throw error
  }
}

export const logout = () => {
  localStorage.removeItem('access_token')
}
