import type { NextPage } from 'next'
import { StaffAugmentationLayout } from '../components/layout/StaffAugmentationLayout'
import { client } from '.'

const ItStaffAugmentation: NextPage<any, any> = ({ menu }) => <StaffAugmentationLayout menu={menu} />

export async function getStaticProps() {
  const menu: any[] = await client.fetch(`*[_type == "setting"]`)
  return { props: { menu } }
}

export default ItStaffAugmentation
