import { useState, useEffect } from 'react';

import classNames from 'classnames';

const Up = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isScrolled)
    return (
      <a
        className={classNames(
          'fixed bottom-8 right-16 h-14 w-14 sm:inline hidden btn-up z-50'
        )}
        href='#hero'
      >
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 118 118'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_d_1358_120)'>
            <rect x='9' y='5' width='100' height='100' rx='50' fill='#FFA400' />
          </g>
          <path
            d='M58.4987 90.9167C78.0593 90.9167 93.9154 75.0607 93.9154 55.5C93.9154 35.9394 78.0593 20.0834 58.4987 20.0834C38.9381 20.0834 23.082 35.9394 23.082 55.5C23.082 75.0607 38.9381 90.9167 58.4987 90.9167Z'
            stroke='black'
            strokeWidth='4'
          />
          <path
            d='M58.4987 90.9167C78.0593 90.9167 93.9154 75.0607 93.9154 55.5C93.9154 35.9394 78.0593 20.0834 58.4987 20.0834C38.9381 20.0834 23.082 35.9394 23.082 55.5C23.082 75.0607 38.9381 90.9167 58.4987 90.9167Z'
            stroke='white'
            strokeWidth='4'
            strokeLinejoin='round'
          />
          <path
            d='M74.4375 60.8125L58.5 44.875L42.5625 60.8125'
            stroke='white'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <filter
              id='filter0_d_1358_120'
              x='0'
              y='0'
              width='118'
              height='118'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='4.5' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.25 0 0 0 0 0.25 0 0 0 0 0.25 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_1358_120'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_1358_120'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      </a>
    );
  else return null;
};

export default Up;
