import React, {useContext} from 'react'
import { SettingsContext } from 'provider-example/supersonic'

export function withSettings(Component) {
  const Wrapped = props => {
    const {settings, setSettings} = useContext(SettingsContext)

    return (
      <Component {...props} settings={settings} setSettings={setSettings} />
    )
  }

  return Wrapped
}
