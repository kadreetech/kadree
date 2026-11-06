import Image from 'next/image'
import { useRouter } from 'next/router'
import { basePath, localizedPath, WHATSAPP_URL } from '../../lib/site'
import Link from 'next/link'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { Lang, useMainContext } from '../../context/context'
import { Footer } from './Footer'
import styles from './Navigation.module.css'

interface IHomeNavigation { menu: any[]; children: ReactNode }

export const HomeNavigation = ({ menu, children }: IHomeNavigation): ReactElement => {
  const { lang = Lang.ES } = useMainContext()
  const router = useRouter()
  const local = (path: string) => localizedPath(path, lang === Lang.EN)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuDocument = menu.find((item) => item['__i18n_lang'] === lang) || menu[0]
  const footer = menuDocument?.footer_setting

  const toggleServices = () => {
    if (window.matchMedia('(max-width: 720px)').matches) {
      setServicesOpen((open) => !open)
    }
  }

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  return (
    <div className={styles.shell}>
      <header className={`${styles.header} ${scrolled || basePath(router.pathname) === '/terms-and-conditions' ? styles.scrolled : ''}`}>
        <div className={styles.navbar}>
          <Link href={local('/')}>
            <a className={styles.logo}><Image src="/img/redesign/logo-kadree.svg" alt="Kadree Tech" width={141} height={50} priority /></a>
          </Link>
          <input id="site-menu" className={styles.menuToggle} type="checkbox" />
          <label htmlFor="site-menu" className={styles.menuButton} aria-label={lang === Lang.ES ? 'Abrir menú' : 'Open menu'}><span /><span /><span /></label>
          <nav className={styles.nav} aria-label={lang === Lang.ES ? 'Principal' : 'Main navigation'}>
            <div className={`${styles.servicesMenu} ${servicesOpen ? styles.servicesMenuOpen : ''}`}>
              <button type="button" aria-expanded={servicesOpen} onClick={toggleServices}>
                <span>{lang === Lang.ES ? 'Servicios' : 'Services'}</span>
                <Image src="/img/redesign/menu-arrow.svg" alt="" width={12} height={7} />
              </button>
              <div className={styles.dropdown}>
                <Link href={local('/it-staff-augmentation')}><a>{lang === Lang.ES ? 'Tercerización de talento TI' : 'Staff augmentation'}</a></Link>
                <Link href={local('/custom-software')}><a>{lang === Lang.ES ? 'Desarrollo a la medida' : 'Custom software development'}</a></Link>
                <Link href={local('/it-consultancy-and-training')}><a>{lang === Lang.ES ? 'Consultoría' : 'Consulting'}</a></Link>
              </div>
            </div>
            <Link href={local('/about-us')}><a>{lang === Lang.ES ? 'Nosotros' : 'About us'}</a></Link>
            <a className={styles.contact} href={WHATSAPP_URL}>{lang === Lang.ES ? 'Contáctanos' : 'Contact us'}</a>
            <a className={styles.language} href={localizedPath(router.pathname, lang !== Lang.EN)} aria-label={lang === Lang.ES ? 'Cambiar a inglés' : 'Switch to Spanish'}>
              <Image src="/img/redesign/language.svg" alt="" width={16} height={16} />
              <span>{lang === Lang.ES ? 'EN' : 'ES'}</span>
            </a>
          </nav>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
      {footer && <Footer footer={footer} />}
    </div>
  )
}
