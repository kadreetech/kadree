import React from 'react'
import { WHATSAPP_URL } from '../../lib/site'

export interface IButton {
  color: 'purple' | 'blue'
  isInternal: boolean
  link: string
  label: string
  onClick?: () => void
}
export const Button = ({ color, label, onClick }: IButton) => {
  if (!label) return null
  const className = `inline-flex items-center justify-center ${color === 'purple' ? 'bg-primary' : 'bg-accent'} text-white py-2 px-4 rounded-md shadow-lg transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4`
  return onClick
    ? <button type="button" onClick={onClick} className={className}>{label}</button>
    : <a href={WHATSAPP_URL} className={className}>{label}</a>
}
