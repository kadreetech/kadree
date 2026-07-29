import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { NextPage } from 'next';
import { createClient } from "next-sanity";
import { ImageUrlBuilder } from 'next-sanity-image';
import { HtmlHead } from '../components/head/HtmlHead';

import { HomeLayout, IMainLayout, } from '../components/layout/HomeLayout';


const Home: NextPage<any, any> = ({ menu, page, stepGraphics, ctas, forms }: IMainLayout) => {

  return (
    <div className={'w-screen'}>
      <HtmlHead />
      <HomeLayout headline={'Here'} menu={menu} page={page} stepGraphics={stepGraphics} ctas={ctas} forms={forms} />
    </div>
  )
}
export const client = createClient({
  projectId: "z72wzr8g",
  dataset: "production",
  apiVersion: "2022-11-03",
  useCdn: false
});


export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`);
  const page: any[] = await client.fetch(`*[_type == "home"]`);
  const stepGraphics: any[] = await client.fetch(`*[_type == "stepsgraphics"]`);
  const ctas: any[] = await client.fetch(`*[_type == "cta"]`);
  const forms: any[] = await client.fetch(`*[_type == "mainform"]`);
  return {
    props: {
      menu,
      page,      
      
      stepGraphics,
      ctas,
      forms
    }
  };
}

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source)
}


export default Home
