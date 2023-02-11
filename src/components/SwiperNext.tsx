import type { SVGProps } from 'react';
import * as React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperNext = (props: SVGProps<SVGSVGElement>) => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={51}
        height={60}
        fill="none"
        {...props}
      >
        <path fill="currentColor" d="M51 30 0 59.445V.555L51 30Z" />
      </svg>
    </button>
  );
};

export default SwiperNext;
