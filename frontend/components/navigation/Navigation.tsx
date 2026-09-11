import Image from 'next/image'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'
import { Lang, useMainContext } from '../../context/context'
import logo from './kadree-tech-color.svg'
import { Footer } from './Footer'

interface INavigation {
  menu: any[]
  children: ReactNode
}

export const Navigation = ({ menu, children }: INavigation): ReactElement => {
  const { lang, setLang } = useMainContext()
  const menuDocument = menu.find(x => x['__i18n_lang'] === lang)
  const menuOptions: any[] = menuDocument?.menu_setting?.menu_collection
  const menuFooter = menuDocument?.footer_setting

  return (
    <div className="drawer scrollbar-hide relative">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content overflow-auto flex flex-col w-screen overflow-x-hidden relative bg-white scroll-smooth">
        <div className="w-full flex bg-white shadow-lg shadow-indigo-800/10 py-2 flex-row sticky top-0 z-50">
          <div className="flex flex-row mx-auto max-w-[1280px] w-full md:mx-auto justify-between">
            <div className="flex-none">
              <Link href="/">
                <a className="btn btn-ghost hover:bg-transparent"><Image src={logo} alt="Kadree Tech Logo" priority /></a>
              </Link>
            </div>
            <div className="flex-none">
              <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost hover:bg-transparent md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
            </div>
            <div className="hidden md:flex p-0 pr-4 justify-center flex-row items-center text-sm">
              <ul className="flex flex-row justify-end h-fit mr-2">
                {menuOptions?.map((item: any, index: number) => (
                  <li key={`menu-item-${item.link_link}`} className={`active:bg-primary transition-all ease-in-out cursor-pointer active:text-white hover:text-white md:hover:bg-accent mr-2 rounded-md ${index >= menuOptions.length - 1 ? 'bg-primary text-white shadow-lg shadow-primary/50' : 'text-black'}`}>
                    {index === 0 ? (
                      <div className="dropdown dropdown-bottom dropdown-hover">
                        <label htmlFor="submenu" tabIndex={0} className="py-3 px-4 flex justify-center items-center">{item.link_label}</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary rounded-md w-52">
                          <li><Link href="it-staff-augmentation" className="text-white">{lang === Lang.EN ? 'Staff Augmentation' : 'Tercerización'}</Link></li>
                          <li><Link href="custom-software" className="text-white">{lang === Lang.EN ? 'Custom Software Development' : 'Desarrollo a la Medida'}</Link></li>
                          <li><Link href="it-consultancy-and-training" className="text-white">{lang === Lang.EN ? 'Consulting' : 'Consultoría'}</Link></li>
                        </ul>
                      </div>
                    ) : (
                      <div className="py-3 px-4"><Link href={item.link_link.includes('#') ? item.link_link : `/${item.link_link}`} className="cursor-pointer">{item.link_label}</Link></div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex flex-row justify-center items-center">
                <button onClick={setLang}>{lang === Lang.EN ? 'ES' : 'EN'}</button>
              </div>
            </div>
          </div>
        </div>
        {children}
        <Footer footer={menuFooter} />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <div className="menu w-3/4 bg-white relative text-black">
          <div className="w-full h-16 flex py-2 justify-center items-center relative bg-gradient-to-tr from-secondary to-primary shadow-lg shadow-secondary/40">
            <div className="relative w-[120px] h-[38px]"><Image src="/img/brand/kadree_tech_white.png" alt="Kadree Tech Logo" priority layout="fill" objectFit="cover" /></div>
          </div>
          <ul className="flex flex-col justify-start h-fit mr-2 px-4 pt-8">
            {menuOptions?.map((item: any, index: number) => index === 0 ? (
              <li key={`menu-item-${item.link_link}`} className="mb-6">
                <div className="text-black font-bold">{item.link_label}</div>
                <ul tabIndex={0} className="w-full pl-4 font-light">
                  <li><Link href="it-staff-augmentation" className="cursor-pointer">{lang === Lang.EN ? 'Staff Augmentation' : 'Tercerización'}</Link></li>
                  <li><Link href="custom-software" className="cursor-pointer">{lang === Lang.EN ? 'Custom Software Development' : 'Desarrollo a la Medida'}</Link></li>
                  <li><Link href="it-consultancy-and-training" className="cursor-pointer">{lang === Lang.EN ? 'Consulting' : 'Consultoría'}</Link></li>
                </ul>
              </li>
            ) : (
              <li key={`menu-item-${item.link_link}`} className={`active:bg-primary transition-all ease-in-out cursor-pointer active:text-white hover:text-white md:hover:bg-accent rounded-md ${index >= menuOptions.length - 1 ? 'bg-primary text-white shadow-lg shadow-primary/50 mt-8' : 'text-black'}`}>
                <Link href={item.link_link.includes('#') ? item.link_link : `/${item.link_link}`} className={`flex flex-col justify-start ${index === menuOptions.length - 1 ? 'text-white font-light text-center items-center' : 'text-black items-start'} font-bold cursor-pointer`}>{item.link_label}</Link>
              </li>
            ))}
            <div className="mt-8 w-full flex flex-row justify-center items-center text-sm"><button onClick={setLang}>{lang === Lang.EN ? 'ESPAÑOL' : 'ENGLISH'}</button></div>
          </ul>
        </div>
      </div>
    </div>
  )
}
