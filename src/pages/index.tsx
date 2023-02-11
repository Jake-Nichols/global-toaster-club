import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CtaBubble from '@/components/CtaBubble';
import SingleToaster from '@/components/SingleToaster';
import SwiperNext from '@/components/SwiperNext';
import SwiperPrev from '@/components/SwiperPrev';
import Toaster from '@/components/Toaster';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  const imagePlaceholders = [
    {
      id: '1',
      src: '/images/100p.jpeg',
      name: 'NFT 1',
      category: 'Groceries',
    },
    {
      id: '2',
      src: '/images/Ajinomoto.jpeg',
      name: 'NFT 2',
      category: 'Groceries',
    },
    {
      id: '3',
      src: '/images/Almondnuts.jpg',
      name: 'NFT 3',
      category: 'Groceries',
    },
  ];

  const [visible, setVisible] = useState(7);
  const [visibleOther, setVisibleOther] = useState(2);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 7);
  };

  const showMoreItemsOther = () => {
    setVisibleOther((prevValue) => prevValue + 2);
  };

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <section className="mx-auto max-w-screen-xl pt-8">
        <h1 className="mx-auto mt-8 text-center text-[74px] font-black leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:mt-16 lg:w-[900px] lg:text-[194px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
          GLOBAL TOASTER CLUB
        </h1>
        <h2 className="py-8 text-center text-xl font-black tracking-tight lg:pt-16 lg:text-5xl">
          <span className="text-secondary">The London Drop</span> - Coming Soon
        </h2>
      </section>

      <section className="">
        <div className="mx-auto hidden max-w-screen-xl auto-rows-auto gap-4 p-8 lg:grid lg:grid-cols-4 lg:px-0">
          {imagePlaceholders?.map((placeholder) => (
            <div
              className="aspect-[3/4] border-8 border-white"
              key={placeholder.name}
            >
              {placeholder.name}
            </div>
          ))}
          <div className="aspect-[3/4]">Buy NFTs</div>
        </div>

        <div className="mx-auto grid auto-rows-auto gap-4 p-8 lg:hidden lg:px-0">
          {imagePlaceholders?.slice(0, visible).map((placeholder) => (
            <div
              className="aspect-[3/4] border-8 border-white"
              key={placeholder.name}
            >
              {placeholder.name}
            </div>
          ))}
          <button
            className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] focus:border-black focus:drop-shadow-[0px_4px_8px_#00000080]"
            onClick={showMoreItems}
          >
            Load More
          </button>
          <div className="flex justify-center">
            <SingleToaster />
          </div>
          <button className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] focus:border-black focus:drop-shadow-[0px_4px_8px_#00000080]">
            Buy <strong>NFTs</strong>
          </button>
        </div>
      </section>

      <section className="overflow-hidden py-8">
        <div className="bg-[#2B5C71] py-8">
          <div className="img-ticker -mx-8 flex">
            <h3 className="mx-8 flex-none self-start text-[40px] font-black leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[150px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              All GLOBAL TOASTER CLUB NFTS ARE 1 OFF
              <span className="text-secondary">.</span>
            </h3>
            <h3 className="mx-8 flex-none self-start text-[40px] font-black leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[150px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              All GLOBAL TOASTER CLUB NFTS ARE 1 OFF
              <span className="text-secondary">.</span>
            </h3>
            <h3 className="mx-8 flex-none self-start text-[40px] font-black leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[150px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              All GLOBAL TOASTER CLUB NFTS ARE 1 OFF
              <span className="text-secondary">.</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="">
        <div className="mx-auto hidden max-w-screen-xl auto-rows-auto gap-4 p-8 lg:grid lg:grid-cols-3 lg:px-0">
          {imagePlaceholders?.map((placeholder) => (
            <div
              className="aspect-[4/3] border-8 border-white"
              key={placeholder.name}
            >
              {placeholder.name}
            </div>
          ))}
        </div>

        <div className="mx-auto grid auto-rows-auto gap-4 p-8 lg:hidden lg:px-0">
          {imagePlaceholders?.slice(0, visibleOther).map((placeholder) => (
            <div
              className="aspect-[4/3] border-8 border-white"
              key={placeholder.name}
            >
              {placeholder.name}
            </div>
          ))}
          <button
            className="my-8 mx-auto w-full max-w-[200px] rounded-md border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] focus:border-black focus:drop-shadow-[0px_4px_8px_#00000080]"
            onClick={showMoreItemsOther}
          >
            Load All
          </button>
        </div>
      </section>

      <section className="relative my-16">
        <div className="mx-auto flex max-w-screen-lg flex-row before:absolute before:right-0 before:-bottom-12 before:z-[-1] before:h-[489px] before:w-[1440px] before:bg-gradient-to-r before:from-[#EEB5AB00] before:to-[#EEB5AB]">
          <div className="hidden w-1/2 md:block lg:w-full">
            <Toaster />
          </div>
          <div className="w-full overflow-hidden lg:w-1/2 lg:overflow-visible lg:pl-12 xl:w-full">
            <div className="relative -left-16 lg:-left-24">
              <CtaBubble />
            </div>
            <p className="px-10 text-2xl text-black">
              Pre drop sales are currently available while stocks last or until
              our latest drop is published.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h3 className="mx-auto max-w-screen-xl text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
          BACKGROUND
        </h3>
        <div className="mx-auto max-w-screen-lg px-8">
          <p className="py-4">
            In the late 90&apos;s three like-minded individuals formed the{' '}
            <strong>‘Toasters’</strong>, and they promoted their graffiti
            toaster images across London. This enigmatic image gained global
            recognition, and toasters became part of street art across the
            globe.
          </p>

          <p className="py-4">
            We believe these early images to be the{' '}
            <strong>origin/inspiration</strong> of the{' '}
            <span className="font-bold text-secondary">
              ‘Toaster Takeovers’
            </span>{' '}
            we are seeing in communities today.
          </p>

          <p className="py-4">
            Our first records of this phenomenon are from the UK. We now have
            records from across the globe, and we wonder where did these
            harmless and friendly characters come from.
          </p>

          <p className="py-4 font-bold text-secondary">We ask:</p>

          <ul className="list-outside list-disc py-4 pl-5 text-secondary">
            <li className="">
              Why do they only host with certain individuals, objects or
              landmarks?
            </li>
            <li className="">
              Why do they migrate in flocks from city to city?
            </li>
            <li className="">What do they want?</li>
          </ul>

          <p className="py-4">
            These question drove us to form the{' '}
            <strong>‘Global Toaster Club’</strong> (GTC).
          </p>

          <p className="py-4">
            We gather information, and share imagery, videos and data to build a
            better understanding of what happening. The global government has
            let us down, we need your help to identify hot spots and share info,
            so we can educate people.
          </p>

          <p className="py-4">
            We’re using an NFT network to share data - As strong penalties are
            now issued by global government and can result in jail time, which
            we’d rather avoid.{' '}
          </p>

          <p className="py-4">
            Keep safe and if you are taken over{' '}
            <span className="text-secondary">remain calm</span>. You can still
            work & play and rigorous global testing has revealed no side effects
            what so ever.
          </p>

          <hr className="mt-2 mb-8 border-secondary" />

          <p>
            All{' '}
            <span className="font-black text-secondary">
              Global Toaster Club NFTs
            </span>{' '}
            are one of originals artworks and we only issue single images we do
            not duplicate artworks. Please double check before purchasing that
            your Artwork is a{' '}
            <span className="font-black text-secondary">
              ‘Global Toaster Club’
            </span>{' '}
            original. To ensure your Rarity value.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto mt-[33px] max-w-[1440px] bg-[#0d0a0aa8] px-8 pb-8 lg:mt-[135px] lg:bg-inherit lg:bg-gradient-to-t lg:from-[#1D1D1B00] lg:to-[#0d0a0aa8] lg:px-20 lg:pb-0">
          <div className="relative top-[-33px] mx-auto max-w-screen-xl lg:top-[-135px]">
            <h3 className="text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              THE TEAM
            </h3>
            <p className="mx-auto max-w-[739px] pt-8 pb-16 text-center lg:pt-0 lg:text-left">
              The <strong>3J’s</strong> - our Toaster investigation team
              comprises of <strong>Jake</strong>, <strong>Jacob</strong>
              and <strong>Joe</strong>. All 3 have had Toaster Takeovers this is
              what brought the team together.{' '}
            </p>
            <div>
              <Swiper
                modules={[A11y]}
                spaceBetween={0}
                loop={true}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 480px
                  768: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 640px
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="aspect-[3/4] border-8 border-white lg:mx-4"></div>
                  <div className="mt-10 grid gap-8 px-0 pt-2 pb-8 text-center lg:px-10">
                    <h4 className="font-black text-secondary">Jake</h4>

                    <p>
                      Apart from having the amazing ability eat a mountain and
                      stay as skinny as a rake. Jake’s keen eye for detail makes
                      him a great researcher, authenticator and drop selector.
                    </p>

                    <p>Jake also looks after the technical needs of the GTC.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="aspect-[3/4] border-8 border-white lg:mx-4"></div>
                  <div className="mt-10 grid gap-8 px-0 pt-2 pb-8 text-center lg:border-x-2 lg:border-secondary lg:px-10">
                    <h4 className="font-black text-secondary">Jake</h4>

                    <p>
                      Apart from having the amazing ability eat a mountain and
                      stay as skinny as a rake. Jake’s keen eye for detail makes
                      him a great researcher, authenticator and drop selector.
                    </p>

                    <p>Jake also looks after the technical needs of the GTC.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="aspect-[3/4] border-8 border-white lg:mx-4"></div>
                  <div className="mt-10 grid gap-8 px-0 pt-2 pb-8 text-center lg:px-10">
                    <h4 className="font-black text-secondary">Jake</h4>

                    <p>
                      Apart from having the amazing ability eat a mountain and
                      stay as skinny as a rake. Jake’s keen eye for detail makes
                      him a great researcher, authenticator and drop selector.
                    </p>

                    <p>Jake also looks after the technical needs of the GTC.</p>
                  </div>
                </SwiperSlide>

                <div className="absolute bottom-[265px] z-10 flex w-full justify-between text-secondary lg:hidden">
                  <SwiperPrev />
                  <SwiperNext />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1440px] px-8 pt-[95px] lg:mt-[135px] lg:px-20 lg:pt-0">
          <div className="relative top-[-135px] mx-auto max-w-screen-xl">
            <h3 className="pb-8 text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:pb-0 lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              MERCH
            </h3>
            <div className="mx-auto grid max-w-[1096px] gap-8 pb-16 text-center text-black">
              <p>
                Our last Merch run was such a success that we are still printing
                garments. Unfortunately currently unable to keep up with demand.{' '}
              </p>
              <p>
                We are currently in negotiations with new suppliers so please{' '}
                <strong>contact us</strong> if you would like to add you to our
                latest clothing list. We will contact you we when have new
                suppliers.
              </p>
            </div>
            <div>
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={0}
                loop={true}
                slidesPerView={2}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 480px
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    src={`${router.basePath}/assets/images/tshirt-design-1.png`}
                    alt="Mock up A"
                    className="lg:border-r lg:border-r-black"
                  />
                  <div className="mt-10 grid gap-8 px-10 pt-2 pb-8 text-center text-black">
                    <p>
                      Set A:
                      <br />
                      <strong>Big Back Toaster</strong>
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <img
                    src={`${router.basePath}/assets/images/tshirt-design-1.png`}
                    alt="Mock up A"
                    className=""
                  />
                  <div className="mt-10 grid gap-8 px-10 pt-2 pb-8 text-center text-black">
                    <p>
                      Set B:
                      <br />
                      <strong>Toaster Logo Back</strong>
                    </p>
                  </div>
                </SwiperSlide>

                <div className="absolute bottom-[20px] z-10 flex w-full justify-between text-primary lg:hidden">
                  <SwiperPrev />
                  <SwiperNext />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] bg-primary px-8 pt-[100px] lg:px-20 lg:pt-0 lg:pb-10">
          <div className="relative top-[-135px] mx-auto max-w-screen-xl">
            <h3 className="pb-8 text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:pb-0 lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              SOCIAL
            </h3>
            <div className="mx-auto grid max-w-[1096px] gap-8 text-center text-secondary">
              <p>
                Catch us on{' '}
                <Link href="/" className="font-black text-white">
                  Instagram
                </Link>{' '}
                this is where we add the latest updates.
              </p>
              <p>Also watch this space for upcoming news.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2B5C71]">
        <div className="mx-auto max-w-[1440px] px-8 pt-[140px] lg:px-20 lg:pt-10">
          <div className="relative top-[-175px] mx-auto h-[550px] max-w-screen-xl text-center lg:h-auto">
            <h3 className="pb-8 text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:pb-0 lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              DROPS
            </h3>
            <div className="mx-auto mb-8 max-w-[1096px] text-black">
              <p>
                Our next drop is a collation of{' '}
                <strong className="text-white">London</strong> Images.
              </p>
              <p>We have a some advance sales here.</p>
            </div>
            <button className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] focus:border-black focus:drop-shadow-[0px_4px_8px_#00000080]">
              Buy <strong>NFTs</strong>
            </button>
            <div className="flex justify-center pt-8 lg:pt-0">
              <SingleToaster />
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
