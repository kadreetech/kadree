import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useMainContext } from '../../context/context';

export interface IButton {
  color: 'purple' | 'blue'
  isInternal: boolean
  link: string;
  label: string
  onClick?: (() => void)
}
export const Button = ({ color, isInternal, label, onClick, link }: IButton) => {
  const mainColor = color === 'purple' ? 'bg-primary' : 'bg-accent'
  const shadowColor = `shadow-${mainColor}/50`
  const router = useRouter();

  const handleOnClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await router.push(link.includes('#') ? link : `#${link}`, undefined, { scroll: true });
    await setTimeout(() => {
      router.back();
    }, 1000)
  }


  if (!label) return null
  if (isInternal) {
    return (
      <button
        onClick={handleOnClick}
        className={`
      ${mainColor}
      ${shadowColor}
      hover:bg-accent
      text-white
      hover:text-white
      py-2
      px-4
      rounded-md
      shadow-lg
      md:hover:-translate-y-1
      tw-dark:bg-secondary
      z-40
      transition-all ease-in-out
      `}
      >
        {label}
      </button>
    )
  }
  return (
    <button
      onClick={onClick}
      className={`
      ${mainColor}
      ${shadowColor}
      hover:bg-accent
      text-white
      hover:text-white
      py-2
      px-4
      rounded-md
      shadow-lg
      md:hover:-translate-y-1
      tw-dark:bg-secondary
      z-40
      transition-all ease-in-out
      `}>
      {label}
    </button>
  )
}
