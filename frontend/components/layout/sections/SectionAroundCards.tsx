import { SectionColor } from './SectionColor';
import { SectionHeadline } from './SectionHeadline';
import Image from 'next/image';
import { useGetImage, useMediaQueries } from '../../../hooks';
import { PortableText } from '@portabletext/react';

interface Card {
  title: string;
  body: any[];
  image?: any;
  cardIndex?: number;
  height?: number;

}
export const SectionAroundCards = ({ section }: { section: any; }) => {

  const { isTablet, isLaptop } = useMediaQueries();

  const CardsBody = {
    block: ({ children }: any) => <p className="text-xs font-light md:text-sm lg:text-md text-white leading-6 lg:leading-7 drop-shadow-md shadow-black text-center">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };

  const allCards: Card[] = section.section_imagecards.map((x: any, k: number) => ({
    title: x.card_name,
    body: x.card_text,
    cardIndex: k,
    image: x.card_image
  }));

  const BoxedCard = ({ title, body, image, cardIndex, height }: Card) => {

    const imageProps = useGetImage(image);
    let cardBackground;
    switch (cardIndex) {
      case 0:
        cardBackground = 'bg-secondary';
        break;
      case 1:
        cardBackground = 'bg-gradient-to-b from-accent/90 to-secondary/90';
        break;
      case 2:
        cardBackground = 'bg-gradient-to-b from-primary/90 to-secondary/90';
        break;
      case 3:
        cardBackground = 'bg-black/80';
        break;
      case 4:
        cardBackground = 'bg-black';
        break;

      default:
        cardBackground = 'bg-secondary';
        break;
    }

    return (
      <div className={`w-full h-full relative min-h-[200px] mb-1 ${height ? `h-[${height}]` : ''}`}>
        <div className='absolute top-0 w-full h-full flex flex-col z-20'>
          <div className={`w-full h-full flex flex-col justify-center items-center text-white ${cardBackground} px-4 py-5 lg:px-8`}>
            <h6 className='text-shadow text-lg md:text-xl lg:text-2xl lg:mb-2 font-bold shadow-black/30 text-center'>{title}</h6>
            <PortableText value={body} components={CardsBody} />
          </div>
        </div>
        {imageProps && <Image {...imageProps} alt='' layout='fill' className='z-10' width={300} height={height} objectFit='cover' />}
      </div>
    );
  };

  if (isTablet) {
    return (
      <SectionColor>
        <div className='md:w-8/12 mx-auto'>

          <div className='w-full flex mb-1'>
            {allCards[1] &&
              <div className='w-2/6 mr-1'>
                <BoxedCard {...allCards[0]} />
              </div>}
            {allCards[0] && <div className='w-4/6 '>
              <BoxedCard {...allCards[1]} />
            </div>}
          </div>
          <div className='w-full flex mb-1'>
            <div className='w-3/6 p-4'>
              <SectionHeadline
                header={section.section_title}
                body={section.section_desc}
                align='text-right' />
            </div>
            {allCards[2] &&
              <div className='w-3/6'>
                <BoxedCard {...allCards[2]} />
              </div>}
          </div>
          <div className='w-full flex mb-1'>
            {allCards[3] &&
              <div className='w-4/6 mr-1'>
                <BoxedCard {...allCards[3]} />
              </div>}
            {allCards[4] &&
              <div className='w-2/6'>
                <BoxedCard {...allCards[4]} />
              </div>}
          </div>
        </div>
      </SectionColor>
    );
  }

  return (
    <SectionColor>
      <SectionHeadline
        isHori={isTablet}
        header={section.section_title}
        body={section.section_desc} />
      {allCards.length > 0 && allCards.map((x: any, k: number) => (
        <BoxedCard {...x} key={`color-card-${x.card_name?.toLowerCase()}-${k}`} />
      ))}
    </SectionColor>
  );
};
