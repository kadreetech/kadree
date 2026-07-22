import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import Marquee from "react-fast-marquee"
import "yup-phone"
import { Lang, useMainContext } from '../../context/context'
import { useMediaQueries } from '../../hooks'
import Map2XL from '../../images/world_2xl.png'
import MapXL from '../../images/world_xl.png'
import MapLG from '../../images/world_lg.png'
import MapSM from '../../images/world_sm.png'
import MapXS from '../../images/world_xs.png'
import { IconCard, IconGlassCard } from '../cards/IconCards'
import { CtaWhite } from '../cta/CTA'
import { Hero, IHero } from '../hero/Hero'
import { Navigation } from '../navigation/Navigation'
import { Step } from '../steps/Step'
import { SectionBlur } from './sections/SectionBlur'
import { SectionColor } from './sections/SectionColor'
import { SectionForm } from './sections/SectionForm'
import { SectionHeadline } from './sections/SectionHeadline'

export interface IMainLayout {
  headline?: string
  menu: any[]
  page: any[]
  stepGraphics?: any[]
  ctas?: any[]
  forms?: any[]
  images?: any[]
  testimonials?: any[]
  isMainHorizontal?: boolean
  cardType?: 'lego' | 'straigh' | 'around'
}

export const HomeLayout = ({ menu, page, stepGraphics, ctas, forms }: IMainLayout) => {
  const { lang } = useMainContext()

  const homePage = page.find(x => x['__i18n_lang'] === lang)
  const heroMain = homePage?.home_hero

  const hero: IHero = {
    img: heroMain?.hero_image,
    title: heroMain?.hero_title,
    body: heroMain?.hero_body,
    button: {
      color: 'purple',
      isInternal: !heroMain?.hero_button.button_redirect,
      label: heroMain?.hero_button.button_label,
      link: heroMain?.hero_button.button_link
    }
  }

  const graphicSection = homePage?.home_sections[0]

  const stepsSection = homePage?.home_sections[1]
  const stepsGraphic = stepGraphics?.find(x => x._id === stepsSection?.section_steps_graphic._ref) //stepsgraphics_collection_name /stepsgraphics_collection

  const whiteCards = homePage?.home_sections[2]
  const mapCta = ctas?.find(x => x._id === homePage?.home_sections[3].section_cta._ref)

  return (

    <Navigation menu={menu} >
      {hero &&
        <Hero {...hero} isHome />
      }
      {graphicSection &&
        <div className="mx-auto max-w-[1280px] -top-24 -mb-24 md:-top-32 md:-mb-32 relative ">
          <div className='w-full flex flex-col sm:flex-row px-4 justify-start sm:justify-between lg:w-10/12 mx-auto gap-4'>
            {graphicSection.section_iconcards?.map((x: any, k: any) => {
              return (
                <IconCard card={x} key={`service-icon-cards-${k}`} isLink />
              )
            })}
          </div>
        </div>}

      {stepsGraphic &&
        <SectionColor>
          <SectionHeadline
            header={stepsGraphic.stepsgraphics_collection_name}
            body={stepsGraphic.stepsgraphics_collection_body}
          />
          <div className='flex flex-col justify-center'>
            {stepsGraphic.stepsgraphics_collection.map((x: any, k: number) => {
              return (
                <Step key={`graphic-step-${k}`} index={k} image={x.step_image} title={x.steps_graphic_title} body={x.steps_graphic_desc} />
              )
            })}
          </div>
        </SectionColor>
      }

      {whiteCards &&
        <SectionBlur topWave fullWidth botWave>
          <SectionHeadline
            header={whiteCards.section_title}
            color={'white'}
          />
          <div className='max-w-[1280px] flex flex-col sm:flex-row px-4 justify-start sm:justify-between lg:w-10/12 mx-auto'>
            {whiteCards.section_iconcards.map((x: any, k: number) => {
              return (
                <IconGlassCard key={`differentiate-cards-${k}`} card={x} />
              )
            })}
          </div>
          {mapCta && <CtaWhite title={mapCta.cta_title} link={mapCta.cta_button.button_link} label={mapCta.cta_button.button_label} />}

          <div className='w-full min-h-[550px] 600:min-h-[690px] 700:min-h-[360px] 800:min-h-[720px] 900:min-h-[860px] 1000:min-h-[920px] 1100:min-h-[990px] 1200:min-h-[1000px] 1250:min-h-[1200px]
          1300:min-h-[640px] 1400:min-h-[700px] 1520:min-h-[780px] 1600:min-h-[840px] 1700:min-h-[940px] 1800:min-h-[940px] 1850:min-h-[1040px] 1900:min-h-[1100px] 2000:min-h-[1200px] 2100:min-h-[1300px] 2200:min-h-[1400px] 2300:min-h-[1450px] 2400:min-h-[1500px] 2500:min-h-[1550px] 2600:min-h-[1600px]
           sm:min-h-[450px] md:min-h-[650px] lg:min-h-[820px] xl:min-h-[560px]  z-10 mb-24 500:mb-72'>
            <TextMarquee text={lang === Lang.EN ? 'our geography' : 'nuestra ubicación'} times={5} />
            <Map />
          </div>
        </SectionBlur>
      }


      {homePage?.home_sections[4] &&
        <SectionForm section={homePage?.home_sections[4]} formsCollection={forms || []} key={`section-form-home`} />
      }

    </Navigation >
  )
}


export function getLinkToPage(card: string) {
  let link = '/';
  if (card.toLowerCase().includes('staff') || card.toLowerCase().includes('staff')) link = '/staff-augmentation'
  if (card.toLowerCase().includes('software') || card.toLowerCase().includes('software')) link = '/custom-software'
  if (card.toLowerCase().includes('training') || card.toLowerCase().includes('training')) link = '/it-consultancy-and-training'
  if (card.toLowerCase().includes('cyber') || card.toLowerCase().includes('cyber')) link = '/cyber-security'
  return link
}


const TextMarquee = ({ text, times }: { text: string, times: number }) => {
  const textCollection: string[] = new Array(times).map(x => x = text)
  for (let index = 0; index < times; index++) {
    textCollection.push(text);
  }
  return (
    <Marquee gradient={false} className='overflow-hidden'>
      {textCollection.map((x: string, k: number) => {
        return (
          <div key={`marquee-${k}`} className='text-white text-3xl sm:text-4xl lg:text-6xl flex flex-row justify-start items-center z-40 relative min-h-[30px] sm:min-h-[50px] lg:min-h-[80px]'>
            <div>
              {x}
            </div>
            <div className='rounded-full h-[6px] w-[6px] lg:h-[10px] lg:w-[10px] bg-white mx-2 relative top-1' />
          </div>
        )
      })}
    </Marquee>
  )
}


const Map = () => {
  const { isTablet, isLaptop, isDesktop, isExtraLarge } = useMediaQueries()

  if (isExtraLarge) {
    return (
      <div className='relative w-full'>
        <div className='absolute -top-12 w-full flex flex-row justify-center'>
          <Image src={Map2XL} alt='Location of Kadree Tech employees and contractors' className='w-full h-auto' />
        </div>
      </div>
    )
  }
  if (isDesktop) {
    return (
      <div className='relative w-full'>
        <div className='absolute -top-12 w-full flex flex-row justify-center'>
          <Image src={MapXL} alt='Location of Kadree Tech employees and contractors' className='w-full h-auto' />
        </div>
      </div>
    )
  }
  if (isLaptop) {
    return (
      <div className='relative w-full'>
        <div className='absolute -top-12 w-full'>
          <Image src={MapLG} alt='Location of Kadree Tech employees and contractors' className='w-full h-auto' />
        </div>
      </div>
    )
  }

  if (isTablet) {
    return (
      <div className='relative w-full'>
        <div className='absolute -top-12 w-full'>
          <Image src={MapSM} alt='Location of Kadree Tech employees and contractors' className='w-full h-auto' />
        </div>
      </div>
    )
  }
  return (
    <div className='relative w-full'>
      <div className='absolute -top-24 w-full 500:-top-32'>
        <div className='w-full relative min-h-[770px] 500:min-h-[1010px] 600:min-h-[1170px]'>
          <Image src={MapXS} alt='Location of Kadree Tech employees and contractors' layout='fill' objectFit='cover' className='w-full mx-auto ' />
        </div>
      </div>
    </div>
  )
}