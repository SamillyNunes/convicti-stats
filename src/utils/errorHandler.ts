import type { AxiosError } from 'axios'

export const handleApiError = (error: AxiosError): string => {
  if (error.response) {
    const { status } = error.response

    switch (status) {
      case 400:
        return 'Requisição inválida. Verifique os dados e tente novamente.'
      case 401:
        return 'Usuário ou senha incorretos.'
      case 403:
        return 'Você não tem permissão para acessar este recurso'
      case 500:
        return 'Erro interno do servidor. Tente novamente mais tarde'
      default:
        return 'Ocorreu um erro desconhecido'
    }
  } else {
    return 'Erro inesperado. Tente novamente.'
  }
}
