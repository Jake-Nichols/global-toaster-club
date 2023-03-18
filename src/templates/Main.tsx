import Link from 'next/link';
import type { ReactNode } from 'react';
import React, { useState } from 'react';

import Logo from '@/components/Logo';
import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [navbar, setNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  React.useEffect(() => {
    const handleContextmenu = (e: { preventDefault: () => void }) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  return (
    <div className="w-full pt-40 text-gray-100 antialiased">
      {props.meta}

      <header
        className={`fixed top-0 z-50 w-full bg-[#1f4453] ${
          scroll ? 'scrolled' : ''
        }`}
      >
        <nav className="w-full">
          <div className="mx-auto justify-between px-4 lg:max-w-screen-xl lg:justify-center">
            <div className="lg:hidden">
              <div className="flex flex-col items-center justify-between py-3 lg:block lg:flex-row lg:py-5">
                <div className="w-full max-w-[100px]">
                  <Logo />
                </div>
                <div>
                  <button
                    className="rounded-md border border-transparent p-2 text-secondary outline-none focus:border focus:border-secondary"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-secondary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`mt-2 flex-1 justify-self-center pb-20 lg:mt-0 lg:block lg:pb-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <ul
                  className={`h-full items-center justify-center space-y-4 text-center text-2xl transition-all lg:grid lg:grid-cols-7 lg:gap-6 lg:space-y-0 ${
                    scroll ? 'lg:h-[107px]' : 'lg:h-[157px]'
                  }`}
                >
                  <li className="">
                    <Link
                      href="#buy"
                      className="text-secondary hover:text-white"
                      scroll={false}
                    >
                      Buy a GTC
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#background"
                      className="text-secondary hover:text-white"
                      scroll={false}
                    >
                      Background
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-secondary hover:text-white"
                      href="#team"
                      scroll={false}
                    >
                      The Team
                    </Link>
                  </li>
                  <li className="relative hidden px-20 lg:block">
                    <Link href="/" className="text-secondary">
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-35%] transition-all ${
                          scroll
                            ? 'md:w-[50px] lg:w-[125px]'
                            : 'md:w-[100px] lg:w-[200px]'
                        }`}
                      >
                        <Logo />
                        <div className="sr-only">Global Toaster Club Logo</div>
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#merch"
                      className="text-secondary hover:text-white"
                      scroll={false}
                    >
                      Merch
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#social"
                      className="text-secondary hover:text-white"
                      scroll={false}
                    >
                      Social
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href="#drops"
                      className="text-secondary hover:text-white"
                      scroll={false}
                    >
                      Drops
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="text-xl">{props.children}</main>

      <footer className="bg-black p-8 text-right text-xs text-secondary lg:px-20">
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
};

export { Main };
