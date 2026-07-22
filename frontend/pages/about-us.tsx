import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { NextPage } from 'next';
import { ImageUrlBuilder } from 'next-sanity-image';
import { client } from '.';
import { HtmlHead } from '../components/head/HtmlHead';
import { IMainLayout } from '../components/layout/HomeLayout';
import { PageLayout } from '../components/layout/PageLayout';


const AboutUs: NextPage<any, any> = ({ menu, page, stepGraphics, ctas, forms, images, testimonials }: IMainLayout) => {

  return (
    <div className={'w-screen'}>
      <HtmlHead />
      <PageLayout headline={'Here'} menu={menu} page={page} stepGraphics={stepGraphics} ctas={ctas} forms={forms} images={images} testimonials={testimonials} />
    </div>
  )
}


export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`);
  const page: any[] = await client.fetch(`*[_type == "page" && page_title match "about*"]`);
  const stepGraphics: any[] = await client.fetch(`*[_type == "stepsgraphics"]`);
  const ctas: any[] = await client.fetch(`*[_type == "cta"]`);
  const forms: any[] = await client.fetch(`*[_type == "mainform"]`);
  const images: any[] = await client.fetch(`*[_type == "images"]`);
  const testimonials: any[] = await client.fetch(`*[_type == "testimonials"]`);
  return {
    props: {
      menu,
      page,
      stepGraphics,
      ctas,
      forms,
      images,
      testimonials,
    }
  };
}

export default AboutUs
