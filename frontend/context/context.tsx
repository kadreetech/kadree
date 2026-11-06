import { createContext, ReactElement, ReactNode, useContext } from 'react'
import { useRouter } from 'next/router'
import { isEnglishPath, localizedPath } from '../lib/site'

export enum Lang { EN = 'en_EN', ES = 'es_ES' }
export interface IMainContext { lang?: Lang; setLang?: () => void }
const MainContext = createContext<IMainContext>({ lang: Lang.ES })

export const MainContextWrapper = ({ children }: { children: ReactNode }): ReactElement => {
  const router = useRouter()
  const english = isEnglishPath(router.pathname)
  const handleLanguage = () => {
    const suffix = router.asPath.match(/[?#].*$/)?.[0] || ''
    void router.push(`${localizedPath(router.pathname, !english)}${suffix}`)
  }
  return <MainContext.Provider value={{ lang: english ? Lang.EN : Lang.ES, setLang: handleLanguage }}>{children}</MainContext.Provider>
}
export const useMainContext = () => useContext(MainContext)
