import React from 'react'

const SettingsContext = React.createContext()

const SettingsProvider = ({children}) => {
  const [settings, setSettings] = React.useState({setting: 1})
  console.log('Settings Provider Initiated')
  return (
    <SettingsContext.Provider value={{settings, setSettings}}>
      {children}
    </SettingsContext.Provider>
  )
}

export {SettingsProvider, SettingsContext}
