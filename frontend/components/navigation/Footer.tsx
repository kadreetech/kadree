import Link from 'next/link'
import React, { ReactNode } from 'react'
import whiteLogo from './kadree-tech-white.svg'
import marcaCo from './marca_co.png'
import Image from 'next/image'
import { Lang, useMainContext } from '../../context/context'
import { useMediaQueries } from '../../hooks'
import { PortableText } from '@portabletext/react'

export const Footer = ({ footer }: { footer: any }) => {
  const { isTablet, isLaptop } = useMediaQueries();
  const { lang } = useMainContext()

  const Social = () => {
    return (
      <FooterInfo label={lang === Lang.EN ? 'Follow Us' : 'Síguenos'}>
        <div className='w-fit flex flex-row justify-between items-center z-40 mb-4 mx:auto'>
          {footer.footer_social && footer.footer_social.map((x: string, k: number) => {
            return (
              <div key={`footer-icon-${x}-${k}`}>
                {x.toLowerCase() === 'linkedin' && <Linkeding />}
                {x.toLowerCase() === 'whatsapp' && <Whatasapp />}
              </div>
            )
          })}
        </div>
      </FooterInfo>
    )
  }

  const Logos = () => (
    <div className='w-full flex flex-row justify-start items-center z-40 mb-6 max-w-[400px]'>
      <Link href="/">
        <a className="btn btn-ghost hover:bg-transparent w-2/3 flex justify-center items-center h-auto">
          <Image src={whiteLogo} alt={'Kadree Tech Logo'} priority />
        </a>
      </Link>
      <Link href="/">
        <a className="btn btn-ghost hover:bg-transparent w-1/3 max-w-[80px] flex justify-center items-center h-auto">
          <Image src={marcaCo} alt={'Kadree Tech Logo'} priority />
        </a>
      </Link>
    </div>
  )

  const CopyRights = () => (
    <div className='w-full sm:w-fit flex flex-col justify-start items-start z-40 text-xs font-light text-white/80 sm:items-center md:items-start mx-auto lg:mx-8'>
      <div className='mb-2'>
        {lang === Lang.EN ?
          `© Kadree Tech S.A.S. ${new Date().getFullYear()}. All Rights Reserved.`
          :
          `© Kadree Tech S.A.S. ${new Date().getFullYear()}. Todos los derechos reservados.`
        }
      </div>
      <Link href={`/terms-and-conditions`} className='mt-4 text-accent'>Terms and Conditions</Link>
    </div>
  )

  const Location = () => {
    const AddressBody = {
      block: ({ children }: any) => <p className="text-sm font-light break-normal w-full">{children}</p>,
      marks: {
        strong: ({ children }: any) => <strong className='font-bolder'>{children}</strong>
      },
    };
    return (
      <div className='w-full flex flex-col justify-between items-start z-40 mb-4'>
        {footer.footer_address.map((x: any) => {
          return (
            <div className='w-100 mb-4' key={`offices-${x.address_header}`}>
              <div className='text-sm font-light break-normal w-full text-primary'>{x.address_header}</div>
              <PortableText value={x.address_body} components={AddressBody} />
            </div>
          )
        })}
      </div>
    )
  }

  if (isLaptop) {
    return (
      <footer className='bg-black py-6 px-4 text-white w-full relative'>
        <div className='mx-auto max-w-[1280px] relative z-10'>
          <div className='w-full flex flex-row lg:justify-center'>
            <div className='w-5/12 mr-8 lg:w-1/2 lg:items-start flex flex-col'>
              <Logos />
              <CopyRights />
            </div>

            <div className='w-7/12 lg:w-1/2 flex flex-col'>
              <div className='w-full flex flex-row justify-between items-start'>
                <div className='w-1/2 mr-6'>
                  <Location />

                </div>
                <div className='w-1/2 flex flex-col justify-between items-start z-40'>
                  <div className='mb-8'>
                    <FooterInfo label={lang === Lang.EN ? 'Contact' : 'Contacto'}>
                      <a className='text-sm' href={`mailto:${footer.email} `}>{footer.email}</a>
                    </FooterInfo>
                  </div>
                  <Social />
                </div>
              </div>

            </div>
          </div>
          <div className='ml-5'>

          </div>
        </div>
        <div style={{ backgroundImage: 'url(/img/brand/footer.jpg)', }} className='w-full h-full absolute top-0 left-0 bg-cover bg-bottom opacity-10 z-0' />
      </footer>
    )
  }

  if (isTablet) {
    return (
      <footer className='bg-black py-6 px-4 text-white w-full relative flex flex-col'>
        <div className='mx-auto mb-4'>
          <Logos />
        </div>
        <div className='w-full flex flex-row justify-between items-start z-40 mb-4'>
          <div className='w-1/2 flex flex-col'>
            <Location />
          </div>
          <div className='w-1/2 flex flex-col'>
            <div className='mb-8'>
              <FooterInfo label={lang === Lang.EN ? 'Contact' : 'Contacto'}>
                <a className='text-sm' href={`mailto:${footer.email} `}>{footer.email}</a>
              </FooterInfo>
            </div>
            <Social />
          </div>
        </div>
        <div className='mx-auto'>
          <CopyRights />
        </div>
        <div style={{ backgroundImage: 'url(/img/brand/footer.jpg)', }} className='w-full h-full absolute top-0 left-0 bg-cover bg-bottom opacity-10 z-0' />
      </footer>
    )
  }

  return (
    <footer className='bg-black py-6 px-4 text-white w-full relative'>
      <div className='w-100 h-auto z-20 relative'>
        <Logos />
        <div className='w-full flex flex-row justify-between items-start z-40 mb-4 mt-8'>
          <FooterInfo label={lang === Lang.EN ? 'Contact' : 'Contacto'}>
            <a className='text-sm' href={`mailto:${footer.email} `}>{footer.email}</a>
          </FooterInfo>
          <Social />
        </div>
        <Location />
        <CopyRights />
      </div>
      <div style={{ backgroundImage: 'url(/img/brand/footer.jpg)', }} className='w-full h-full absolute top-0 left-0 bg-cover bg-bottom opacity-10 z-0' />
    </footer>
  )
}

const FooterInfo = ({ label, children }: { label: string, children: ReactNode }) => {
  return (
    <div className='flex flex-col justify-start items-start'>
      <label className='text-sm text-primary w-100 block mb-1'>{label}</label>
      {children}
    </div>
  )
}

const Linkeding = () => <FooterIcons name='LinkedIn' link='https://www.linkedin.com/company/kadreetech/'><Image src="/img/consultancy/linkedin.svg" alt="LinkedIn" width={32} height={32} /></FooterIcons>
const Whatasapp = () => <FooterIcons name='Whatsapp' link='https://api.whatsapp.com/send?phone=573008013539'><Image src="/img/consultancy/whatsapp.svg" alt="WhatsApp" width={32} height={32} /></FooterIcons>


const FooterIcons = ({ link, name, children }: { link: string, name: string, children: ReactNode }) => {
  return (
    <a href={link} target='_blank' rel="noreferrer" className='flex flex-row justify-start items-center mr-4' >
      {children}
    </a>
  )
}
