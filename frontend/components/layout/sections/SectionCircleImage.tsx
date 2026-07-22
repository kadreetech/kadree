import React, { useEffect, useRef } from 'react'
import { useGetImage, useMediaQueries } from '../../../hooks'
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Button } from '../../buttons/Button';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { SectionColor } from './SectionColor';
import { SectionHeadline } from './SectionHeadline';

export const SectionCircleImage = ({ section }: { section: any }) => {
  const imageProps = useGetImage(section.section_image)
  const { isTablet } = useMediaQueries();

  if (isTablet) {
    return (
      <SectionColor>
        <div className='w-full h-full pb-12 relative max-w-[992px] mx-auto'>
          <div className='absolute w-full lg:max-w-8/12 h-full top-0 z-30'>
            <div className='w-[240px] lg:w-[340px]   mx-auto h-full flex justify-center items-center top-12 relative'>
              <SectionHeadline header={section.section_title} body={section.section_desc} />
            </div>
            <div className='absolute top-0 left-[230px] md:left-[278px]  max-w-[350px] lg:left-[376px]'>
              <Card card={section.section_textcards[0]} align='text-left' sideNumber={1} leftCard />
            </div>
            <div className='absolute top-[170px] md:top-[200px] left-[469px] md:left-[572px] max-w-[130px] md:max-w-[160px] lg:top-[265px] lg:left-[770px] lg:max-w-[200px]'>
              <Card card={section.section_textcards[1]} align='text-left' sideNumber={2} leftCard />
            </div>
            <div className='absolute top-[410px] left-[418px] max-w-[180px] md:top-[490px] md:left-[505px] md:max-w-[260px] lg:top-[650px] lg:left-[682px] lg:max-w-[300px]'>
              <Card card={section.section_textcards[2]} align='text-left' sideNumber={3} leftCard />
            </div>
            <div className='absolute top-[420px] right-[420px] max-w-[200px] md:top-[505px] md:right-[510px] md:max-w-[250px] lg:top-[670px] lg:right-[687px] lg:max-w-[300px]'>
              <Card card={section.section_textcards[3]} align='text-right' sideNumber={4} rightCard />
            </div>
            <div className='absolute top-[145px] right-[468px] max-w-[130px] md:top-[170px] md:right-[555px] md:max-w-[200px] lg:top-[215px] lg:right-[748px] lg:max-w-[300px]'>
              <Card card={section.section_textcards[4]} align='text-right' sideNumber={5} rightCard />
            </div>
          </div>
          <div className='w-7/12 max-w-[579px] relative top-10 m-auto'>
            <Image src={'/img/misc/circle.png'} alt='' layout='responsive' width={300} height={350} />
          </div>
        </div>
      </SectionColor>
    )
  }

  return (
    <SectionColor bg='bg-lightGray' botWave>
      <SectionHeadline header={section.section_title} body={section.section_desc} />
      {section.section_textcards.length > 0 && section.section_textcards.length <= 5 && section.section_textcards.map((x: any, k: number) => {
        return (
          <Card key={`text-card-${section.section_title}-${x.textcard_title}`} card={x} sideNumber={k + 1} />
        )
      })}
    </SectionColor>
  )
}

const Card = ({ card, align = 'text-center', sideNumber, leftCard, rightCard }: { card: any, align?: string, sideNumber: number, leftCard?: boolean, rightCard?: boolean }) => {
  const CardBody = {
    block: ({ children }: any) => <p className="text-sm sm:text-xs font-light md:text-sm xl:text-md sm:leading-6 md:leading-7 w-full">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };

  if (rightCard) {
    return (
      <div className={`w-full mb-8 text-black flex flex-col ${align}`} >
        <div className='w-full mb-1 font-bold text-lg lg:text-2xl'>
          {card.textcard_title}<span className='text-primary/80 lg:text-3xl text-2xl font-bold ml-2 text-shadow shadow-primary/20 '>{sideNumber}</span>
        </div>
        <div className={`${sideNumber === 4 ? 'mr-2' : 'mr-5'} `}>
          <PortableText value={card.textcard_body} components={CardBody} />
        </div>
      </div>
    )
  }

  if (leftCard) {
    return (
      <div className={`w-full mb-8 text-black flex flex-col ${align}`} >
        <div className='w-full mb-1 font-bold text-lg lg:text-2xl'>
          <span className='text-primary/80 lg:text-3xl text-2xl font-bold mr-2 text-shadow shadow-primary/20 '>{sideNumber}</span>{card.textcard_title}
        </div>
        <div className={`${sideNumber === 3 ? '' : sideNumber === 2 ? 'ml-6' : 'ml-5'} `}>
          <PortableText value={card.textcard_body} components={CardBody} />
        </div>
      </div >
    )
  }

  return (
    <div className={`w-full mb-8 text-black flex flex-col ${align}`} >
      <div className='w-full mb-4 font-bold text-lg lg:text-2xl'>
        <span className='text-primary/80 lg:text-3xl text-2xl font-bold mr-2 text-shadow shadow-primary/20'>{sideNumber}</span>{card.textcard_title}
      </div>
      <PortableText value={card.textcard_body} components={CardBody} />
    </div>
  )
}
