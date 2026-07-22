import Image from 'next/image';
import { ImStarFull } from 'react-icons/im';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetImage, useMediaQueries } from '../../../hooks';
import { ISection } from '../PageLayout';
import { SectionColor } from './SectionColor';
import { SectionHeadline } from './SectionHeadline';


interface ITestimonials extends ISection {
  testimonialsCollection: any
}

export const SectionTestimonials = ({ section, testimonialsCollection }: ITestimonials) => {
  const testimonials = testimonialsCollection?.find((x: any) => x._id === section?.section_testimonials._ref).testimonial_collection;
  const { isTablet, isLaptop, isDesktop } = useMediaQueries()
  const slides = testimonials.map((x: any, k: number) => {
    return (
      <SwiperSlide key={`testimonial-${k}`} ><SectionTestimonial testimonial={x} /></SwiperSlide>
    )
  })

  const pagination = {
    el: '#testimonials_pag',
  };



  return (
    <SectionColor bg='bg-lightGray' topWave>
      <SectionHeadline
        align='text-center'
        header={section.section_title}
        body={section.section_desc} />

      <Swiper slidesPerView={isTablet ? 1.6 : isLaptop ? 1.8 : isDesktop ? 2.6 : 1}
        speed={800}
        spaceBetween={30}
        loopFillGroupWithBlank
        centeredSlides
        loop
        autoplay={{
          delay: 10000
        }}
        grabCursor
        modules={[Pagination, Autoplay]}
        pagination={pagination}>
        {slides}
      </Swiper>
      <div className='w-100 relative flex flex-row justify-center items-center mt-8'>
        <div id='testimonials_pag' className='text-center' />
      </div>
    </SectionColor >

  )
}


export const SectionTestimonial = ({ testimonial }: { testimonial: any }) => {
  const imageProps = useGetImage(testimonial.testimonial_image)
  const { isTablet } = useMediaQueries()

  if (isTablet) {
    return (
      <div className='flex flex-col w-100 px-4'>
        <div className='flex flex-col justify-start items-center w-100'>
          <div className='flex flex-row w-100 justify-start items-center text-black grow-0 mb-4'>

            {imageProps &&
              <div className='z-10 rounded-full h-[80px] w-[80px] overflow-hidden mr-4 shrink-0 grow-0'>
                <Image {...imageProps} alt='' layout='responsive' width={85} height={85} />
              </div>
            }
            <div className='flex flex-col w-100 h-fit justify-end items-start text-black grow-0'>
              <div>{testimonial.testimonial_name}</div>
              <div className='text-sm font-bold mb-1'>{testimonial.testimonial_role}</div>
            </div>
          </div>
          <div className='flex flex-col w-100 justify-start items-center text-black grow-0'>
            <div className='relative mb-6 w-10/12 md:8/12 ' >
              <span className='text-accent text-2xl mr-1 absolute left-0 font-bold'>{`"`}</span>
              <p className='leading-6 indent-4 relative  '>{testimonial.testimonial_body} <span className='text-accent font-bold leading-4 text-2xl'>{`"`}</span></p>
            </div>
            <Stars stars={testimonial.testimonial_rating} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col w-100 px-4'>
      <div className='flex flex-col justify-start items-center w-100'>
        {imageProps &&
          <div className='z-10 rounded-full h-[80px] w-[80px] overflow-hidden mb-2 shrink-0 grow-0'>
            <Image {...imageProps} alt='' layout='responsive' width={85} height={85} />
          </div>
        }
        <div className='flex flex-col w-100 justify-start items-center  text-black grow-0'>
          <div className='text-center'>{testimonial.testimonial_name}</div>
          <div className='text-sm font-bold mb-1 text-center'>{testimonial.testimonial_role}</div>
          <div className='relative mb-6 w-full' >
            <span className='text-accent text-2xl mr-1 absolute left-0 font-bold'>{`"`}</span>
            <p className='leading-6 indent-4 relative  '>{testimonial.testimonial_body} <span className='text-accent font-bold leading-4 text-2xl'>{`"`}</span></p>
          </div>
          <Stars stars={testimonial.testimonial_rating} />
        </div>
      </div>
    </div>
  )
}


export const Stars = ({ stars }: { stars: number }) => {
  let bg = 100
  const allStars = [...Array(stars)].map((_, k) => {
    bg -= k === 0 ? 0 : 20
    return (<ImStarFull className={`text-2xl mr-2 ${k !== 0 ? `text-primary/${bg}` : 'text-primary'} `} key={`start-${k}`} />)
  })

  return (
    <div className='flex flex-row justify-center items-center'>
      {allStars.reverse()}
    </div>
  )
}