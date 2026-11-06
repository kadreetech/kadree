import { PortableText } from '@portabletext/react';
import type { NextPage } from 'next';
import { client } from '.';
import { IMainLayout } from '../components/layout/HomeLayout';
import { SectionColor } from '../components/layout/sections/SectionColor';
import { SectionHeadline } from '../components/layout/sections/SectionHeadline';
import { Navigation } from '../components/navigation/Navigation';
import { useMainContext } from '../context/context';


const TermsAndConditions: NextPage<any, any> = ({ menu, page }: IMainLayout) => {
  const { lang } = useMainContext()
  const pageContent = page.find(x => x['__i18n_lang'] === lang)
  // console.log(pageContent);

  const TermsAndConditionsBody = {
    block: ({ children }: any) => <p className="text-sm text-black font-light md:text-sm lg:text-md xl:text-xl mb-4 leading-6 lg:leading-7 w-full">{children}</p>,
    marks: {
      strong: ({ children }: any) => <strong>{children}</strong>
    },
  };
  return (
    <div className={'w-screen'}>
      <Navigation menu={menu}>
        <div className="pt-28"><SectionColor>
          <h1 className="text-3xl font-bold mb-8">{pageContent.terms_and_conditions_page_name}</h1>
          <PortableText value={pageContent.terms_and_conditions_body} components={TermsAndConditionsBody} />
        </SectionColor></div>
      </Navigation>
    </div>
  )
}


export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`);
  const page: any[] = await client.fetch(`*[_type == "terms_and_conditions"]`);

  return {
    props: {
      menu,
      page,
    }
  };
}

export default TermsAndConditions
