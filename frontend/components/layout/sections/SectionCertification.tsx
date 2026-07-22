import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { useGetImage, useMediaQueries } from '../../../hooks';
import { SectionColor } from './SectionColor';
import { SectionHeadline } from './SectionHeadline';
import * as cert from '../../../images/cert.jpeg'

export const SectionCertification = ({ section }: { section: any }) => {
  const imageProps = useGetImage(section.section_image)
  const { isTablet } = useMediaQueries();

  if (isTablet) {
    return (
      <SectionColor>
        <SectionHeadline header={section.section_title} />
        <div className='container flex mx:auto flex-row justify-center items-start'>
          <div className='flex flex-col w-1/3'>
            <Card card={section.section_textcards[0]} align='text-right' />
            <Card card={section.section_textcards[2]} align='text-right' />
          </div>
          <div className='flex flex-col w-1/3 justify-start items-end'>
            <div className='min-h-[300px] w-8/12 mx-auto flex flex-col justify-center mb-12'>
              <Image src={cert} alt='' layout='responsive' className='z-10' />
            </div>
            <Card card={section.section_textcards[4]} />
          </div>

          <div className='flex flex-col w-1/3'>
            <Card card={section.section_textcards[1]} align='text-left' />
            <Card card={section.section_textcards[3]} align='text-left' />
          </div>
        </div>

      </SectionColor>
    )
  }

  return (
    <SectionColor>
      <SectionHeadline header={section.section_title} body={section.section_desc} />
      <div className='w-10/12 mx-auto mb-6'>

        <Image src={cert} alt='' layout='responsive' className='z-10' />
      </div>
      {section.section_textcards.length > 0 && section.section_textcards.length <= 5 && section.section_textcards.map((x: any, k: number) => {
        return (
          <Card key={`text-card-${section.section_title}-${x.textcard_title}`} card={x} />
        )
      })}
    </SectionColor>
  )
}

const Card = ({ card, align = 'text-center' }: { card: any, align?: string }) => {
  const CardBody = {
    block: ({ children }: any) => <p className="text-sm font-light md:text-sm lg:text-md xl:text-xl  leading-6 lg:leading-7 h-[100px] w-full">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };
  return (
    <div className={`w-full mb-4 text-black flex flex-col ${align}`} >
      <div className='w-full mb-4 font-bold lg:text-2xl'>
        {card.textcard_title}
      </div>
      <PortableText value={card.textcard_body} components={CardBody} />
    </div>
  )
}