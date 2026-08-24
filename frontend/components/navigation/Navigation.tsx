import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'
import { Lang, useMainContext } from '../../context/context'
import logo from './kadree-tech-white.svg'
import { Footer } from './Footer'
import styles from './Navigation.module.css'

interface INavigation { menu: any[]; children: ReactNode }

export const Navigation = ({ menu, children }: INavigation): ReactElement => {
  const { lang = Lang.ES, setLang } = useMainContext()
  const menuDocument = menu.find((item) => item['__i18n_lang'] === lang) || menu[0]
  const footer = menuDocument?.footer_setting

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Link href="/">
            <a className={styles.logo}><Image src={logo} alt="Kadree Tech" priority /></a>
          </Link>
          <input id="site-menu" className={styles.menuToggle} type="checkbox" />
          <label htmlFor="site-menu" className={styles.menuButton} aria-label={lang === Lang.ES ? 'Abrir menú' : 'Open menu'}><span /><span /><span /></label>
          <nav className={styles.nav} aria-label="Principal">
            <div className={styles.servicesMenu}>
              <button type="button">{lang === Lang.ES ? 'Servicios' : 'Services'} <span aria-hidden="true">⌄</span></button>
              <div className={styles.dropdown}>
                <Link href="/staff-augmentation"><a>{lang === Lang.ES ? 'Tercerización de talento TI' : 'Staff augmentation'}</a></Link>
                <Link href="/custom-software"><a>{lang === Lang.ES ? 'Desarrollo a la medida' : 'Custom software development'}</a></Link>
                <Link href="/cyber-security"><a>{lang === Lang.ES ? 'Ciberseguridad' : 'Cybersecurity'}</a></Link>
              </div>
            </div>
            <Link href="/about-us"><a>{lang === Lang.ES ? 'Nosotros' : 'About us'}</a></Link>
            <a className={styles.contact} href="mailto:info@kadreetech.com">{lang === Lang.ES ? 'Contáctanos' : 'Contact us'}</a>
            <button className={styles.language} onClick={setLang} aria-label={lang === Lang.ES ? 'Cambiar a inglés' : 'Switch to Spanish'}>
              <Image src="/img/redesign/language.svg" alt="" width={16} height={16} />
              <span>{lang === Lang.ES ? 'EN' : 'ES'}</span>
            </button>
          </nav>
        </div>
      </header>
      <div className={styles.content}>{children}</div>
      {footer && <Footer footer={footer} />}
    </div>
  )
}
