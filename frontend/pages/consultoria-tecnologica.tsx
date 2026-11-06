import type { NextPage } from 'next';
import { client } from '.';
import { ConsultancyLayout } from '../components/layout/ConsultancyLayout';

const Consultancy: NextPage<any, any> = ({ menu }) => {
  return (
    <div className="w-full">
      <ConsultancyLayout menu={menu} />
    </div>
  )
}

export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`);
  return {
    props: { menu }
  };
}

export default Consultancy
