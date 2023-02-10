import '../styles/global.css';

import { Roboto_Slab } from '@next/font/google';
import type { AppProps } from 'next/app';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <style jsx global>{`
      html {
        font-family: ${robotoSlab.style.fontFamily};
        background: #224c5c;
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default MyApp;
