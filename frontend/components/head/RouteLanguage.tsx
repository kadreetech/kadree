import { useEffect } from 'react'
import { Lang, useMainContext } from '../../context/context'

export const RouteLanguage = () => {
  const { lang } = useMainContext()
  useEffect(() => { document.documentElement.lang = lang === Lang.EN ? 'en' : 'es' }, [lang])
  return null
}
