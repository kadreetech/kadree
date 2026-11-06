import type { NextPage } from 'next'
import { client } from '.'
import { AboutLayout } from '../components/layout/AboutLayout'

const AboutUs: NextPage<any> = ({ menu }) => <AboutLayout menu={menu} />

export async function getStaticProps() {
  const menu = await client.fetch('*[_type == "setting"]')
  return { props: { menu } }
}
export default AboutUs
