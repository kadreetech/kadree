import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useGetImage, useMediaQueries } from '../../../hooks';
import { SectionBlur } from './SectionBlur';
import { SectionHeadline } from './SectionHeadline';

export const SectionTimelineTextCards = ({ section }: { section: any }) => {
  const imageProps = useGetImage(section.section_image)
  const { isTablet } = useMediaQueries();


  if (isTablet) {
    return (
      <SectionBlur topWave>
        <SectionHeadline header={section.section_title} body={section.section_desc} color='white' />
        <div className='container lg:w-8/12 mx-auto flex mx:auto flex-row justify-center items-start h-auto px-6'>
          <div className='flex flex-col w-5/12'>
            <Card card={section.section_textcards[0]} align='text-right' sideNumber={1} rightCircle />
            <div className='w-full h-[90px] md:h-[160px] lg:h-[80px] 2xl:h-[120px]' />
            <Card card={section.section_textcards[2]} align='text-right' sideNumber={3} rightCircle />
            <div className='w-full h-[90px] md:h-[210px] lg:h-[75px] xl:h-[135px] 2xl:h-[185px]' />
            <Card card={section.section_textcards[4]} align='text-right' sideNumber={5} rightCircle />
          </div>
          <div className='flex flex-col w-[210px] h-full z-20 min-h-[900px] justify-start items-center'>
            <svg width="198" height="817" viewBox="0 0 198 817" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7" filter="url(#filter0_f_459_717)">
                <path d="M21.9941 14.5408C21.9941 14.5408 212.971 43.7661 170.014 164.743C127.056 285.719 21.9941 274.889 21.9941 377.238C21.9941 479.587 165.679 467.138 169.59 595.772C173.5 724.406 21.9941 786.845 21.9941 786.845" stroke="#5149AB" strokeWidth="8" fill='transparent' />
              </g>
              <g filter="url(#filter1_d_459_717)">
                <path d="M21.9941 14.5408C21.9941 14.5408 212.971 43.7661 170.014 164.743C127.056 285.719 21.9941 274.889 21.9941 377.238C21.9941 479.587 165.679 467.138 169.59 595.772C173.5 724.406 21.9941 786.845 21.9941 786.845" stroke="url(#paint0_linear_459_717)" strokeWidth="3" fill='transparent' />
              </g>
              <defs>
                <filter id="filter0_f_459_717" x="7.99414" y="0.587585" width="182.314" height="799.954" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_459_717" />
                </filter>
                <filter id="filter1_d_459_717" x="0.494141" y="1.05859" width="197.314" height="815.173" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="8" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.447059 0 0 0 0 0.729412 0 0 0 0.16 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_717" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_717" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_459_717" x1="99.1513" y1="14.5408" x2="99.1513" y2="786.845" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8179D8" stopOpacity="0" />
                  <stop offset="0.0416667" stopColor="#8179D8" />
                  <stop offset="0.947917" stopColor="#8179D8" />
                  <stop offset="1" stopColor="#8179D8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='flex flex-col w-5/12'>
            <div className='w-full h-[140px] lg:h-[110px]' />
            <Card card={section.section_textcards[1]} align='text-left' sideNumber={2} leftCircle />
            <div className='w-full h-[140px] md:h-[220px] lg:h-[120px] xl:h-[160px] 2xl:h-[200px]' />
            <Card card={section.section_textcards[3]} align='text-left' sideNumber={4} leftCircle />
            <div className='w-full h-auto relative min-h-[160px] md:min-h-[220px] lg:min-h-[180px] xl:min-h-[250px] 2xl:min-h-[260px] 2xl:w-10/12   mx-auto'>
              <Image src={`/img/misc/maintenance_and_support.png`} alt='' layout='fill' className='z-10' objectFit='cover' />
            </div>
          </div>
        </div>
      </SectionBlur >
    )
  }

  return (
    <SectionBlur>
      <SectionHeadline header={section.section_title} body={section.section_desc} color='white' />
      {imageProps && <Image {...imageProps} alt='' layout='fill' className='z-10' objectFit='cover' />}
      <div className='px-6'>
        {section.section_textcards.length > 0 && section.section_textcards.length <= 5 && section.section_textcards.map((x: any, k: number) => {

          return (
            <div className='w-100 mb-8' key={`text-card-${section.section_title}-${x.textcard_title}`}>
              <Card sideNumber={k + 1} card={x} align='text-left' />
              {k === 3 &&
                <div className='w-11/12 mx-auto h-auto relative min-h-[250px] 500:min-h-[340px] 600:min-h-[420px]'>
                  <Image src={`/img/misc/maintenance_and_support.png`} alt='' layout='fill' className='z-10' objectFit='cover' />
                </div>
              }
            </div>
          )
        })}

      </div>
    </SectionBlur>
  )
}

const Card = ({ card, align = 'text-center', sideNumber, leftCircle, rightCircle }: { card: any, align?: string, sideNumber: number, rightCircle?: boolean, leftCircle?: boolean }) => {
  const CardBody = {
    block: ({ children }: any) => <p className="text-sm font-light md:text-sm lg:text-md xl:text-xl  leading-6 lg:leading-7 mb-4 w-full">{children}</p>,
    list: {
      bullet: ({ children }: any) => <ul className="list-disc text-left pl-12 sm:pl-4">{children}</ul>
    },
    listItem: {
      bullet: ({ children }: any) => <li className="text-sm md:text-xs lg:text-sm">{children}</li>
    },
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };

  return (
    <div className={`w-full text-white flex flex-col text-left justify-start`} >
      <div className={`w-full mb-4 font-bold sm:text-xl lg:text-2xl text-lg relative ${align} `}>
        {leftCircle && <Circles left />} <span className='text-accent font-bold mr-2 text-shadow shadow-accent/40'>{sideNumber}</span>{card.textcard_title} {rightCircle && <Circles right />}
      </div>
      <PortableText value={card.textcard_body} components={CardBody} />
    </div>
  )
}

const Circles = ({ right, left }: { right?: boolean, left?: boolean }) => (
  <div className={`w-7 h-7 shadow-center bg-black/10 rounded-full shadow-primary/80 flex justify-center items-center absolute top-[2px] ${right ? '-right-10' : ''} ${left ? '-left-10' : ''}`}>
    <div className='w-3 h-3 shadow-center bg-primary/80 rounded-full shadow-black/90 ' />
  </div>
)