import React, { ReactNode } from 'react';
import { Wave } from '../../wave/Wave';

interface ISectionColor {
  bg?: string;
  id?: string;
  topWave?: boolean;
  botWave?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
}

export const SectionColor = ({ bg = 'bg-white', topWave, botWave, children, fullWidth = false, id }: ISectionColor) => {
  return (
    <div className={`${bg} relative w-screen`} data-target={id} id={id}>
      {topWave && <Wave />}
      <div className={`${fullWidth ? 'w-100' : 'mx-auto max-w-[1280px]'} py-12 lg:pt-24 lg:pb-0 px-4`}>
        {children}
      </div>
      {botWave && <Wave isBot />}
    </div>
  );
};
