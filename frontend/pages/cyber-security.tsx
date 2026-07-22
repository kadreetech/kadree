import type { NextPage } from 'next';
import { client } from '.';
import { HtmlHead } from '../components/head/HtmlHead';
import { IMainLayout } from '../components/layout/HomeLayout';
import { PageLayout } from '../components/layout/PageLayout';


const CyberSecurity: NextPage<any, any> = ({ menu, page, stepGraphics, ctas, forms, images, testimonials }: IMainLayout) => {

  return (
    <div className={'w-screen'}>
      <HtmlHead />
      <PageLayout headline={'Here'} isMainHorizontal menu={menu} page={page} stepGraphics={stepGraphics} ctas={ctas} forms={forms} images={images} testimonials={testimonials} />
    </div>
  )
}

export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`);
  const page: any[] = await client.fetch(`*[_type == "page" && page_title match "cyber*"]`);
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

export default CyberSecurity
