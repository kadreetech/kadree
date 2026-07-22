import React from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../../pages';
import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { useMediaQueries } from '../../hooks';


export const MainCustomImageBuilder = (imageUrlBuilder: any, options: any) => {
  return imageUrlBuilder
    .width(Math.min(options.originalImageDimensions.width, 1920))
    .quality(options.quality || 80);
};

export const Step = ({ index, image, title, body }: { index: number; image: any; title: string; body: any; }) => {
  const { isTablet } = useMediaQueries();
  const imageProps: any = useNextSanityImage(
    client,
    image,
    { imageBuilder: MainCustomImageBuilder }
  );


  const StepImage = () => {
    if (!imageProps)
      return null;
    return (
      <div className={`w-full sm:w-2/5 h-auto relative max-w-[380px] shrink-0 grow-0`}>
        <Image {...imageProps} alt='' layout="responsive" sizes="(max-width: 639px) 150px, 100%" className='mb-2' />
      </div>
    );
  };

  const StepNumber = () => (
    <div className='rounded-full
    p-2
    bg-gradient-to-br
    from-primary to-indigo-700 shadow-md shadow-primary/50  text-white font-bold w-12 md:w-16 min-w-12 h-12 md:h-16 flex justify-center items-center md:text-xl '>{index + 1}</div>
  );

  if (isTablet) {
    return (
      <div className='w-full flex flex-col sm:flex-row justify-center relative px-4 mb-6'>
        {index % 2 === 0 ?
          <>
            <StepImage />
            <div className='sm:w-1/5 flex flex-col justify-center items-center max-w-[60px] shrink-0 grow-0 mx-8'>
              <StepNumber />
            </div>
            <div className='w-full sm:w-2/5 flex flex-row sm:flex-col justify-center shrink-0 grow-0 max-w-[380px]'>
              <div className='flex justify-start text-black font-bold text-xl items-center mb-2 text-left'>{title}</div>
              {body && <PortableText value={body} components={StepBodyLeft} />}
            </div>
          </>
          :
          <>
            <div className='w-full sm:w-2/5 flex flex-row sm:flex-col justify-center shrink-0 grow-0 max-w-[380px]'>
              <div className='flex justify-end text-black font-bold text-xl items-center mb-2 text-right'>{title}</div>
              {body && <PortableText value={body} components={StepBodyRight} />}
            </div>
            <div className='sm:w-1/5 flex flex-col justify-center items-center'>
              <StepNumber />
            </div>
            <StepImage />
          </>}
      </div>
    );
  }


  return (
    <div className='w-full flex flex-col sm:flex-row justify-center relative px-4 mb-6'>
      {imageProps &&
        <div className='w-full sm:w-1/2 h-auto relative'>
          <Image {...imageProps} alt='' layout="responsive" sizes="(max-width: 639px) 150px, 100%" className='mb-2' />
        </div>}
      <div className='w-full sm:w-1/2 flex flex-row sm:flex-col justify-start mb-2'>
        <StepNumber />
        <div className='flex justify-center text-black font-bold text-xl items-center ml-4 md:ml-0'>{title}</div>
      </div>
      {body && <PortableText value={body} components={StepBodyLeft} />}
    </div>
  );
};

export const StepBodyRight = {
  block: ({ children }: any) => <p className="text-sm md:text-md lg:text-lg font-light leading-6 text-black mb-4 text-right">{children}</p>,
  marks: {
    strong: ({ children }: any) => <strong className='text-accent font-bold'>{children}</strong>
  },
};

export const StepBodyLeft = {
  block: ({ children }: any) => <p className="text-sm md:text-md lg:text-lg font-light leading-6 text-black mb-4 text-left">{children}</p>,
  marks: {
    strong: ({ children }: any) => <strong className='text-accent font-bold'>{children}</strong>
  },
};
