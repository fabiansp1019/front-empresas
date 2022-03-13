import { useState, useEffect } from 'react'

// import { baseUrl } from './config'

const TOKEN_KEY = 'authorization'

/**
 * ⚠️ Atención
 *
 * Esta es una capa de autenticación basada totalmente en el cliente.
 *
 * El token JWT es guardado como es en SessionStorage.
 *
 * Una vez se cierre la ventana del navegador la sesión desaparecerá.
 *
 * Esta implementación solo fue hecha por propósitos académicos.
 *
 * En un ambiente real, el token debería guardarse en el servidor y configurar
 * una cookie segura que haga las veces de sesión. Esto se puede lograr con Next.js y su capa
 * de APIs sin necesidad de tocar la API GraphQL/Express.
 *
 * Alternativamente, se podría guardar el token en un Service Worker.
 *
 * Si quieres conocer más sobre los riesgos, e implicaciones te invito a ver:
 * - https://platzi.com/cursos/nextjs-owasp/
 * - https://platzi.com/cursos/nextjs-auth/
 */

// export function useLogin({ onDone }) {
//   const [isLoading, setIsLoading] = useState(false)
//   const [message, setMessage] = useState('')


//   const login = async (event) => {
//     event.preventDefault()
//     const username = event.currentTarget.username.value
//     const password = event.currentTarget.pass.value

//     try {
//       setIsLoading(true)
//       setMessage('')
//       const response = await fetch(`${baseUrl}/api/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error(
//           `Failed authenticating with HTTP status ${response.status}`
//         )
//       }

//       const data = await response.json()
//       if (data && typeof data.token === 'string') {
//         await saveToken(data.token)
//         onDone()
//         return
//       }

//       throw new Error(`No token found in the response`)
//     } catch (e) {
//       console.log(e)
//       setIsLoading(false)
//       setMessage('Usuario o contraseña inválidos')
//     }
//   }

//   return {
//     isLoading,
//     message,
//     login,
//   }
// }

// function saveToken(token) {
//   return new Promise<string>((resolve) => {
//     try {
//       window.sessionStorage.setItem(TOKEN_KEY, token)
//       resolve(token)
//     } catch (e) {
//       throw new Error(
//         'El token no se guardó. ¿Estás en modo incógnito? – Asegúrate que SessionStorage esté habilitado para esta página'
//       )
//     }
//   })
// }

export function retrieveToken() {
  const token = window.sessionStorage.getItem(TOKEN_KEY);
  return token;
}

export function removeToken() {
  return ((resolve) => {
    window.sessionStorage.removeItem(TOKEN_KEY)
    resolve()
  })
}

// export var User = { username, id }

export function useFetchCurrentUser() {
  const [status, setStatus] = useState('idle')
  const [user, setUser] = useState(null)
// console.log("inicio del fech")
  useEffect(() => {
    const validateAsync = async () => {
      try {
        setStatus('loading')

        // Check token first
        const token = await retrieveToken()
        if (!token) {
          throw new Error('Please log in first')
        }
        const response = await fetch(process.env.NEXT_PUBLIC_DIRECCION_BACKEND, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        })

        if (!response) {
          throw new Error(`Unauthorized request`)
        }

        const data = await response.json()
        // console.log(data)
        if (data ) {
          setStatus('success')
          setUser({ data })
          return
        }

        throw new Error('Unexpected data format')
      } catch (e) {
        setStatus('success')
        setUser(null)
      }
    }

    validateAsync()
  }, [])

  return { status, user }
}