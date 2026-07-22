import { SectionColor } from './SectionColor';
import { SectionHeadline } from './SectionHeadline';
import Image from 'next/image';
import { useGetImage, useMediaQueries } from '../../../hooks';

export const SectionSingleImage = ({ section, isHori }: { section: any; isHori?: boolean; }) => {
  const imagePropsDesktop: any = useGetImage(section.section_image.section_image_desktop);
  const imagePropsMobile: any = useGetImage(section.section_image.section_image_mobile);
  const imageInline: any = useGetImage(section.section_desc.find((x: any) => x._type === 'image'));
  const { isTablet } = useMediaQueries();

  console.log(section);


  if (isTablet) {
    return (
      <>
        {isHori ?
          <SectionColor>
            <div className='flex w-full'>
              <div className='w-1/2'>
                <SectionHeadline
                  align='text-right'
                  header={section.section_title}
                  body={section.section_desc}
                  inlineImage={imageInline}
                  />
              </div>
              <div className='w-1/2 flex flex-col justify-start items-center'>
                {imagePropsDesktop && <div className='w-full mb-2 max-w-[600px] block'>
                  <Image {...imagePropsDesktop} alt='' layout='responsive' />
                </div>}
              </div>
            </div>
          </SectionColor>
          :
          <SectionColor>
            <SectionHeadline
              header={section.section_title}
              body={section.section_desc}
              inlineImage={imageInline}
              />
            <div className='mb-2 flex flex-col w-full justify-center items-center md:container md:mx-auto'>
              {imagePropsDesktop && <div className='w-full max-w-[1200px]'>
                <Image {...imagePropsDesktop} alt='' layout='responsive' />
              </div>}
            </div>
          </SectionColor>
        }
      </>
    )
  }

  return (
    <SectionColor>
      <SectionHeadline
        header={section.section_title}
        body={section.section_desc}
        inlineImage={imageInline}
        />
      <div className='mb-2 flex flex-col w-full justify-center items-center md:container md:mx-auto'>
        <div className='w-full max-w-[1200px]'>
          {imagePropsMobile ? <Image {...imagePropsMobile} alt='' layout='responsive' /> : imagePropsDesktop ? <Image {...imagePropsDesktop} alt='' layout='responsive' /> : null}
        </div>
      </div>
    </SectionColor>
  );
};
