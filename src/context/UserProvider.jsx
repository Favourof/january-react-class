import React, { useState } from 'react'
import { userContext } from './context'

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState('dark');
  const value = {
    user,
    theme,
    setUser,
    setTheme
  }
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}
