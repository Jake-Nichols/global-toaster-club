import Link from 'next/link';
import type { ReactNode } from 'react';

import Logo from '@/components/Logo';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-100 antialiased">
    {props.meta}

    <header className="z-10 w-full bg-black/10">
      <nav>
        <ul className="mx-auto grid h-[157px] max-w-screen-xl grid-cols-7 items-center justify-between gap-6 text-center text-lg">
          <li className="">
            <Link href="/" className="text-secondary hover:text-white">
              Buy a GTC
            </Link>
          </li>
          <li className="">
            <Link href="/about/" className="text-secondary hover:text-white">
              Background
            </Link>
          </li>
          <li className="">
            <Link className="text-secondary hover:text-white" href="/">
              The Team
            </Link>
          </li>
          <li className="relative px-20 ">
            <Link href="/blog/" className="text-secondary">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-35%]">
                <Logo />
              </div>
            </Link>
          </li>
          <li className="">
            <Link href="/blog/" className="text-secondary hover:text-white">
              Merch
            </Link>
          </li>
          <li className="">
            <Link href="/blog/" className="text-secondary hover:text-white">
              Social
            </Link>
          </li>
          <li className="">
            <Link href="/blog/" className="text-secondary hover:text-white">
              Drops
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <main className="text-xl">{props.children}</main>

    <footer className="bg-black px-20 py-8 text-right text-xs text-secondary">
      © {AppConfig.title} {new Date().getFullYear()}
      {/* <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>. */}
      {/*
       * PLEASE READ THIS SECTION
       * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
       */}
    </footer>
  </div>
);

export { Main };
