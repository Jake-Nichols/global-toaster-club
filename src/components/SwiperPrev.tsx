import type { SVGProps } from 'react';
import * as React from 'react';
import { useSwiper } from 'swiper/react';

const SwiperPrev = (props: SVGProps<SVGSVGElement>) => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={51}
        height={60}
        fill="none"
        {...props}
      >
        <path fill="currentColor" d="M0 30 51 .555v58.89L0 30Z" />
      </svg>
    </button>
  );
};

export default SwiperPrev;
