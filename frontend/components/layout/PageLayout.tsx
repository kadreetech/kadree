import { ReactNode, useState } from 'react'
import "yup-phone"
import { useMainContext } from '../../context/context'
import { Hero, IHero } from '../hero/Hero'
import { Navigation } from '../navigation/Navigation'
import { IMainLayout } from './HomeLayout'
import { SectionCta } from './sections/SectionCta'
import { SectionForm } from './sections/SectionForm'
import { SectionLegoCards } from './sections/SectionLegoCards'
import { SectionSingleImage } from './sections/SectionSingleImage'
import { SectionSteps } from './sections/SectionSteps'
import { SectionStraightCards } from './sections/SectionStraightCards'
import { SectionTestimonials } from './sections/SectionTestimonials'
import { ParallaxProvider } from 'react-scroll-parallax';
import { SectionCertification } from './sections/SectionCertification'
import { SectionTimelineTextCards } from './sections/SectionTimelineTextCards'
import { SectionAroundCards } from './sections/SectionAroundCards'
import { useRouter } from 'next/router'
import { SectionCircleImage } from './sections/SectionCircleImage'

export interface ISection {
  section: any
}

export const PageLayout = ({ menu, page, stepGraphics, ctas, forms, images, isMainHorizontal, cardType, testimonials }: IMainLayout) => {
  const { lang } = useMainContext()
  const pageContent = page.find(x => x['__i18n_lang'] === lang)
  const router = useRouter()

  const heroMain = pageContent?.page_hero

  const hero: IHero = {
    img: heroMain?.hero_image,
    title: heroMain?.hero_title,
    body: heroMain?.hero_body,
    button: {
      color: 'blue',
      isInternal: !heroMain?.hero_button.button_redirect,
      label: heroMain?.hero_button.button_label,
      link: heroMain?.hero_button.button_link
    }
  }

  const pageSections: any[] = pageContent?.page_sections
  // console.log(pageSections);

  let initialTextCard = true;
  return (
    <ParallaxProvider>
      <Navigation menu={menu} >
        {hero && <Hero {...hero} />}

        {pageSections && pageSections.map(x => {
          const allSections: ReactNode[] = []
          if (x.section_content === 'image') allSections.push(<SectionSingleImage section={x} key={`section-single-image-${x.section_title}`} isHori={isMainHorizontal} />)
          if (x.section_content === 'steps_graphic') allSections.push(<SectionSteps section={x} stepGraphics={stepGraphics || []} key={`section-steps-graphic-${x.section_title}`} />)
          if (x.section_content === 'form') allSections.push(<SectionForm section={x} formsCollection={forms || []} key={`section-form-${x.section_title}`} />)
          if (x.section_content === 'testimonials') allSections.push(<SectionTestimonials section={x} testimonialsCollection={testimonials || []} key={`section-testimonials-${x.section_title}`} />)
          if (x.section_content === 'cta') allSections.push(<SectionCta section={x} ctaCollection={ctas || []} key={`section-cta-${x.section_title}`} />)
          if (x.section_content === 'textcards') {
            if (router.pathname.includes('consultancy')) {
              allSections.push(<SectionCircleImage section={x} key={`section-text-cards-${x.section_title}`} />);
            } else {

              if (initialTextCard) {
                allSections.push(<SectionCertification section={x} key={`section-text-cards-${x.section_title}`} />);
                initialTextCard = false
              } else {
                allSections.push(<SectionTimelineTextCards section={x} key={`section-text-cards-${x.section_title}`} />)
              }
            }
          }

          if (x.section_content === 'imagecards') {
            switch (cardType) {
              case 'lego':
                allSections.push(<SectionLegoCards section={x} key={`section-lego-cards-${x.section_title}`} />)
                break;
              case 'straigh':
                allSections.push(<SectionStraightCards section={x} key={`section-lego-cards-${x.section_title}`} />)
                break;
              case 'around':
                allSections.push(<SectionAroundCards section={x} key={`section-lego-cards-${x.section_title}`} />)
                break;

              default:
                allSections.push(<SectionLegoCards section={x} key={`section-lego-cards-${x.section_title}`} />)
                break;
            }
          }
          return allSections
        })}
      </Navigation>
    </ParallaxProvider>
  )
}
