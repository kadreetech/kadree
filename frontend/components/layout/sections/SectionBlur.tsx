/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react';
import { Wave } from '../../wave/Wave';

export const SectionBlur = ({ topWave, botWave, children, fullWidth }: { topWave?: boolean; botWave?: boolean; children?: ReactNode, fullWidth?: boolean }) => {
  return (
    <div className={`relative w-full h-auto bg-blurBlue overflow-visible`}>
      {topWave && <Wave />}
      <div className={`${fullWidth ? 'w-full' : 'md:container md:mx-auto'} relative h-fit overflow-visible`}>

        <div className={`py-12 sm:py-16 lg:py-16 z-20 overflow-visible relative mb-12 ${topWave ? 'mt-6': ''}`}>
          {children}
        </div>
        <div className='absolute w-full top-0 z-0 h-full overflow-hidden'>
          <div className='absolute -left-16 top-36 h-auto w-2/3 z-0 opacity-60'>
            <svg viewBox="0 0 512 602" fill="none" xmlns="http://www.w3.org/2000/svg" className='blur-2xl opacity-60'>
              <path opacity="0.6" d="M354.925 40.2871C414.535 72.445 440.626 137.85 467.469 199.99C493.448 260.13 525.473 323.554 504.03 385.453C482.269 448.267 416.645 477.698 359.48 511.709C291.297 552.276 223.565 619.508 147.262 597.718C69.2018 575.427 28.3138 488.872 6.21114 410.829C-12.7841 343.758 16.3361 278.444 38.0824 212.212C61.2906 141.528 68.9945 55.8296 134.428 20.3239C201.846 -16.2581 287.419 3.86927 354.925 40.2871Z" fill="#0CC5C5" />
            </svg>
          </div>
          <div className='absolute -right-48 top-96 h-auto w-full z-0 opacity-80'>
            <svg viewBox="0 0 836 805" fill="none" xmlns="http://www.w3.org/2000/svg" className='blur-2xl opacity-60'>
              <path opacity="0.6" d="M533.479 32.1075C605.002 57.8114 670.546 96.2073 721.752 152.42C776.553 212.579 833.468 281.746 835.038 363.15C836.592 443.678 768.3 504.422 729.909 575.203C691.525 645.972 678.343 737.219 609.528 778.919C540.222 820.916 452.23 801.772 371.781 792.218C294.805 783.077 214.729 773.205 154.112 724.837C94.3429 677.146 68.8567 601.453 42.6325 529.581C16.6297 458.316 -8.39259 385.208 2.8108 310.171C14.4163 232.441 50.1314 158.65 106.224 103.663C161.93 49.0552 236.532 18.5558 313.428 5.67739C387.798 -6.77793 462.51 6.60278 533.479 32.1075Z" fill="#7A4982" />
            </svg>
          </div>
        </div>

      </div>
      {botWave && <Wave isBot />}
    </div>
  );
};
