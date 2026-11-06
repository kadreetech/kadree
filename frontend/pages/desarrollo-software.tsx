import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { NextPage } from 'next';
import { ImageUrlBuilder } from 'next-sanity-image';
import { client, urlFor } from '.';
import { IMainLayout } from '../components/layout/HomeLayout';
import { CustomSoftwareLayout } from '../components/layout/CustomSoftwareLayout';


const CustomSoftware: NextPage<any, any> = ({ menu, page, stepGraphics, ctas, forms, images}: IMainLayout) => {

  return (
    <div className={'w-full'}>
      <CustomSoftwareLayout menu={menu} heroImage={urlFor(page[0].page_hero.hero_image).width(1400).quality(85).url()} />
    </div>
  )
}


export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`);
  const page: any[] = await client.fetch(`*[_type == "page" && page_title match "custom*"]`);
  const stepGraphics: any[] = await client.fetch(`*[_type == "stepsgraphics"]`);
  const ctas: any[] = await client.fetch(`*[_type == "cta"]`);
  const forms: any[] = await client.fetch(`*[_type == "mainform"]`);
  const images: any[] = await client.fetch(`*[_type == "images"]`);
  return {
    props: {
      menu,
      page,
      stepGraphics,
      ctas,
      forms,
      images
    }
  };
}

export default CustomSoftware
