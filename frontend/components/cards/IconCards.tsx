import knight from './icons/knight.svg'
import lab from './icons/lab.svg'
import staff from './icons/staff.svg'
import low_risk from './icons/low_risk.svg'
import shield from './icons/shield.svg'
import money_cog from './icons/money_cog.svg'
import profiling from './icons/profiling.svg'
import Image from 'next/image'
import Link from 'next/link'
import { getLinkToPage } from '../layout/HomeLayout'

export const IconCard = ({ card, isLink }: any) => {
  if (isLink) {
    return (
      <Link href={getLinkToPage(card?.card_name)} passHref>
        <a className='h-fit sm:w-[30%] w-full'>
          <Card card={card} isLink />
        </a>
      </Link>
    )
  }
  return (
    <Card card={card} />
  )
}

const Card = ({ card, isLink }: any) => {
  const icon = card?.card_icon_selection
  return (
    <div className={`
    w-full
    bg-gradient-to-b
    from-white
    to-slate-50
    h-36
    md:h-48
    rounded-md
    mb-6 flex
    flex-col
    justify-end
    p-4
    dark
    shadow-lg shadow-blue/50
     ${isLink ? 'cursor-pointer' : ''}
    `}
    >

      <Icon icon={icon} />
      <div className='w-full text-primary text-lg lg:text-2xl xl:text-3xl  leading-6'>
        {card.card_name}
      </div>
    </div >
  )

}

export const IconGlassCard = ({ card, isLink }: any) => {
  const icon = card?.card_icon_selection


  return (

    <div className={`
    bg-gradient-to-br
    from-white/30
    p-4
        rounded-md
            flex
    flex-col
    justify-end
        w-full
    lg:w-2/6
    mx-auto
    h-36
    md:h-48
    sm:mx-4
    mb-6
    ${isLink ? 'cursor-pointer' : ''}
    `}>

      <Icon icon={icon} />
      <div className='w-full text-white text-lg lg:text-2xl xl:text-3xl  leading-6'>
        {card.card_name}
      </div>
    </div >
  )
}

const Icon = ({ icon }: { icon: string }) => {
  return (
    <div className='w-full mb-2'>
      {icon === 'icon_staff' && <Image src={staff} alt='' height="40" width="40" />}
      {icon === 'icon_knight' && <Image src={knight} alt='' height="40" width="40" />}
      {icon === 'icon_lab' && <Image src={lab} alt='' height="40" width="40" />}
      {icon === 'icon_money_cog' && <Image src={money_cog} alt='' height="40" width="40" />}
      {icon === 'icon_profiling' && <Image src={profiling} alt='' height="40" width="40" />}
      {icon === 'icon_low_risk' && <Image src={low_risk} alt='' height="40" width="40" />}
      {icon === 'icon_shield' && <Image src={shield} alt='' height="60" width="60" />}
    </div>
  )
}