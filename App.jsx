import { useState, createContext, useContext } from 'react'
import Dashboard from './components/Dashboard'

export const ThemeContext = createContext({ dark: false, toggle: () => {} })

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <div className={dark ? 'dark' : ''} style={{ height: '100%' }}>
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  )
}
