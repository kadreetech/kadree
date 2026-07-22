import { PortableText } from '@portabletext/react'
import React from 'react'
import { Button } from '../buttons/Button'

interface ICta {
  title: any[]
  link: string
  label: string
}

export const CtaWhite = ({ title, link, label }: ICta) => {
  const CtaTitle = {
    block: ({ children }: any) => <p className="z-20 text-2xl lg:text-3xl text-white mb-4 text-center leading-6">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong className='text-accent font-bold'>{children}</strong>
    },
  };

  return (
    <div className='px-4 flex flex-col justify-center items-center z-20 mb- mx-auto max-w-[1280px]6'>
      <PortableText value={title} components={CtaTitle} />
      <Button color={'blue'} isInternal={true} link={link} label={label} />
    </div>
  )
}
