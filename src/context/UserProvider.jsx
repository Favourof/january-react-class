import React, { useEffect, useState } from 'react'
import { userContext } from './context'
import { useNavigate } from 'react-router';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true)
  // const [theme, setTheme] = useState('dark');
  const navigate = useNavigate()

  const isAuthenticated = Boolean(token)


  const login = ({ user, token }) => {
    setToken(token || null)
    setUser(user || null)

    if (token) {
      localStorage.setItem('token', token)
    }
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }

    setLoading(false)
  }

  const logout = () => {
    localStorage.clear('token')
    localStorage.clear('user')
    setUser(null)
    setToken(null)
    navigate("/login")

  }

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    const savedToken = localStorage.getItem("token")

    try {
       if (savedUser) {
        const parseSaveUSer = JSON.parse(savedUser)
        setUser(parseSaveUSer)

      
    }
   
    } catch {
      setUser(null)
    }
    if (savedToken) {
      setToken(savedToken)
    
      
    }
   setLoading(false)
  }, [])
  



  const value = {
    user,
    logout,
    login,
    loading,
    isAuthenticated
  }
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}
