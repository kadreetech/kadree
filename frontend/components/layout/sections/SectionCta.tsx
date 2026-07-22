import React, { useEffect, useRef } from 'react'
import { useGetImage } from '../../../hooks'
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Button } from '../../buttons/Button';
import { Parallax, useParallax } from 'react-scroll-parallax';

export const SectionCta = ({ section, ctaCollection }: { section: any, ctaCollection: any[] }) => {
  const cta = ctaCollection.find(x => x._id === section.section_cta._ref)
  const imageProps = useGetImage(cta.cta_image)


  const CTATitle = {
    block: ({ children }: any) => <h6 className={`text-shadow text-xl md:text-xl lg:text-2xl lg:mb-2 font-bold shadow-black/30 text-center w-full md:w-1/2 xl:w-4/12 xl:text-4xl ${cta.cta_body ? 'md:text-right' : ''} md:mr-4 shrink-0`}>{children}</h6>,
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };

  const CTABody = {
    block: ({ children }: any) => <p className="text-sm font-light md:text-sm lg:text-md xl:text-xl  text-white leading-6 lg:leading-7 drop-shadow-md shadow-black text-center md:w-1/2 xl:w-4/12 w-full md:text-left">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };

  return (
    <div className={`w-full h-full relative min-h-[300px] sm:min-h-[250px] mb-1 overflow-hidden lg:mt-24`}>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center z-20 text-white px-4 py-5 lg:px-8 bg-gradient-to-r from-accent/70 to-primary/70 '>
        <div className={`w-full h-auto flex flex-col md:flex-row justify-center items-start sm:w-9/12 md:w-7/12 md:mx-auto mb-4`}>
          <PortableText value={cta.cta_title} components={CTATitle} />
          {cta.cta_body && <PortableText value={cta.cta_body} components={CTABody} />}
        </div>
        <div className={`w-full h-auto flex flex-col justify-center items-center sm:w-9/12 md:w-7/12  md:mx-auto`}>
          <Button color={'purple'} isInternal link={cta.cta_button.button_link} label={cta.cta_button.button_label} />
        </div>
      </div>
      {imageProps &&
        <Image {...imageProps} alt='' layout='fill' className='z-10' objectFit='cover' objectPosition={'center'} />
      }
    </div>
  )
}
