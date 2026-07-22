import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export const SectionHeadline = ({ header, body, color, align = 'text-center', isHori, inlineImage }: { header: string; body?: any[]; color?: 'white' | 'black', align?: 'text-right' | 'text-center' | 'text-left', isHori?: boolean, inlineImage?: any }) => {

  const SectionTitle = {
    block: ({ children }: any) => <p className={`text-md lg:text-lg font-light leading-6 ${color === 'white' ? 'text-white' : 'text-black'} mb-4 ${isHori ? 'text-left' : align}`}>{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong className={`text-accent font-bold`}>{children}</strong>
    },
  };

  if (isHori) {
    return (
      <div className={`w-full px-4 md:container mx-auto relative mb-6 flex flex-row ${align}`}>
        <h2 className={`w-1/2 text-2xl mr-4 font-bold lg:text-3xl text-right ${color === 'white' ? 'text-white' : 'text-black'} `}>{header}</h2>
        {body &&
          <div className='w-1/2 '>
            <PortableText value={body} components={SectionTitle} />
          </div>
        }
        {inlineImage && <div className='w-100 max-w-xs mx-auto'>
          <Image {...inlineImage} alt='' layout='fixed' />
        </div>}
      </div>
    )
  }

  return (
    <div className={`w-full px-4 md:container mx-auto relative mb-6 ${align}`}>
      <h2 className={`text-2xl font-bold lg:text-3xl ${color === 'white' ? 'text-white' : 'text-black'} mb-2`}>{header}</h2>
      {body &&
        <PortableText value={body} components={SectionTitle} />}

      {inlineImage && <div className='w-100 max-w-xs mx-auto'>
        <Image {...inlineImage} alt='' layout='responsive' className='' />
      </div>}
    </div>
  );
};
