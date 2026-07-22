/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export const Wave = ({ isBot }: { isBot?: boolean }) => {

  if (isBot) {
    return (
      <div className='h-1 absolute w-full bottom-0'>
        <div className='relative h-full w-full'>
          <img src={'/img/misc/top.svg'} className='absolute -bottom-[1px] lg:-bottom-[2px] left-0 w-full h-auto' />
        </div>
      </div>
    )
  }
  return (
    <div className='h-1 absolute w-full -top-[1px] md:-top-[2px]'>
      <div className='relative h-full w-full'>
        <img src={'/img/misc/bottom.svg'} className='absolute top-0 left-0 w-full h-auto' />
      </div>
    </div>
  )
}