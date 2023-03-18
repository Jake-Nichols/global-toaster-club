import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';
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
import { BottomImages } from '@/utils/BottomImages';
import { MerchImages } from '@/utils/MerchImages';
import { TeamImages } from '@/utils/TeamImages';
import { TopImages } from '@/utils/TopImages';

const Index = () => {
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
      meta={<Meta title="Global Toaster Club" description="Meta Description" />}
    >
      <section className="max-w-screen-xl pt-8 mx-auto">
        <h1 className="mx-auto mt-8 text-center text-[74px] font-black leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:mt-16 lg:w-[900px] lg:text-[194px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
          GLOBAL TOASTER CLUB
        </h1>
        <h2 className="py-8 text-xl font-black tracking-tight text-center lg:pt-16 lg:text-5xl">
          <span className="text-secondary">The London Drop</span> - Coming Soon
        </h2>
      </section>

      <section>
        <div className="relative hidden max-w-screen-xl gap-4 p-8 mx-auto auto-rows-auto lg:grid lg:grid-cols-4 lg:px-0">
          <div className="absolute left-[-150px] top-[-150px] -scale-x-100">
            <SingleToaster />
          </div>

          <div className="absolute left-[-475px] top-[235px] -scale-x-100">
            <SingleToaster />
          </div>
          {TopImages.images?.map((placeholder) => (
            <div
              className="relative aspect-[3/4] overflow-hidden"
              key={placeholder.name + placeholder.drop}
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full border-8 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-full transition-all hover:scale-125">
                <Image src={placeholder.src} alt={placeholder.name} />
              </div>
            </div>
          ))}
          <div id="buy" className="flex flex-col items-end">
            <div className="flex justify-center w-full pt-8 lg:pt-0">
              <SingleToaster />
            </div>
            <button className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] hover:animate-wiggle hover:bg-black  hover:text-secondary hover:drop-shadow-[0px_4px_8px_#00000080]  focus:drop-shadow-[0px_4px_8px_#00000080]">
              Buy <strong>NFTs</strong>
            </button>
          </div>
        </div>

        <div className="grid gap-4 p-8 mx-auto auto-rows-auto lg:hidden lg:px-0">
          {TopImages.images?.slice(0, visible).map((placeholder) => (
            <div
              className="relative aspect-[3/4] overflow-hidden"
              key={placeholder.name + placeholder.drop}
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full border-8 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-full transition-all hover:scale-125">
                <Image src={placeholder.src} alt={placeholder.name} />
              </div>
            </div>
          ))}
          <button
            className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] hover:animate-wiggle hover:bg-black  hover:text-secondary hover:drop-shadow-[0px_4px_8px_#00000080]  focus:drop-shadow-[0px_4px_8px_#00000080]"
            onClick={showMoreItems}
          >
            Load More
          </button>
          <div id="buy" className="flex justify-center">
            <SingleToaster />
          </div>
          <button className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] hover:animate-wiggle hover:bg-black  hover:text-secondary hover:drop-shadow-[0px_4px_8px_#00000080]  focus:drop-shadow-[0px_4px_8px_#00000080]">
            Buy <strong>NFTs</strong>
          </button>
        </div>
      </section>

      <section className="py-8 overflow-hidden">
        <div className="bg-[#2B5C71] py-8">
          <div className="flex -mx-8 img-ticker">
            <h3 className="mx-8 flex-none self-start text-[40px] font-black uppercase leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[150px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              All Global Toaster Club NFTs are one off originals!
            </h3>
            <h3 className="mx-8 flex-none self-start text-[40px] font-black uppercase leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[150px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              All Global Toaster Club NFTs are one off originals!
            </h3>
            <h3 className="mx-8 flex-none self-start text-[40px] font-black uppercase leading-[0.80] tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[150px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              All Global Toaster Club NFTs are one off originals!
            </h3>
          </div>
        </div>
      </section>

      <section className="">
        <div className="hidden max-w-screen-xl gap-4 p-8 mx-auto auto-rows-auto lg:grid lg:grid-cols-3 lg:px-0">
          {BottomImages.images?.map((placeholder) => (
            <div
              className="relative aspect-[4/3] overflow-hidden"
              key={placeholder.name + placeholder.drop}
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full border-8 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-full transition-all hover:scale-125">
                <Image src={placeholder.src} alt={placeholder.name} className="object-none" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 p-8 mx-auto auto-rows-auto lg:hidden lg:px-0">
          {BottomImages.images?.slice(0, visibleOther).map((placeholder) => (
            <div
              className="relative aspect-[4/3] overflow-hidden"
              key={placeholder.name + placeholder.drop}
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full border-8 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-full transition-all hover:scale-125">
                <Image src={placeholder.src} alt={placeholder.name} className="object-none" />
              </div>
            </div>
          ))}
          <button
            className="my-8 mx-auto w-full max-w-[200px] rounded-md border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] hover:animate-wiggle hover:bg-black  hover:text-secondary  focus:drop-shadow-[0px_4px_8px_#00000080]"
            onClick={showMoreItemsOther}
          >
            Load All
          </button>
        </div>
      </section>

      <section className="relative my-16">
        <div className="mx-auto flex max-w-screen-lg flex-row before:absolute before:right-0 before:-bottom-12 before:z-[-1] before:h-[489px] before:w-[1440px] before:bg-gradient-to-r before:from-[#EEB5AB00] before:to-[#EEB5AB] 2xl:before:w-[1771px]">
          <div className="absolute left-[-79px] top-[230px] hidden -scale-x-100 2xl:block">
            <SingleToaster />
          </div>
          <div className="hidden w-1/2 md:block lg:w-full">
            <Toaster />
          </div>
          <div className="w-full overflow-hidden lg:w-1/2 lg:overflow-visible lg:pl-12 xl:w-full">
            <div className="relative -left-16 w-[133%] lg:-left-24 lg:w-full">
              <CtaBubble />
            </div>
            <p className="px-10 text-2xl text-black">
              Pre drop sales are currently available while stocks last or until
              our latest drop is published.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8" id="background">
        <h3 className="mx-auto max-w-screen-xl text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
          BACKGROUND
        </h3>
        <div
          className={`relative mx-auto max-w-screen-lg bg-[40%] bg-no-repeat px-8 lg:bg-[url('/assets/images/background-background.png')] lg:bg-center`}
        >
          <p className="py-4">
            In the late 90&apos;s three like-minded individuals formed the{' '}
            <strong>‘Toasters’</strong>, and they promoted their graffiti
            toaster images across London. This enigmatic image gained global
            recognition, and toasters became part of street art across the
            globe.
          </p>

          <p className="py-4">
            We believe these early images to be the of the
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

          <ul className="py-4 pl-5 list-disc list-outside text-secondary">
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
            <span className="text-white">remain calm</span>. You can still work
            & play and rigorous global testing has revealed no side effects what
            so ever.
          </p>

          <hr className="mt-2 mb-8 border-secondary" />

          <p className="text-secondary">
            All Global Toaster Club NFTs are one of originals artworks and we
            only issue single images we do not duplicate artwork. Please double
            check before purchasing that your NFT is a ‘Global Toaster Club’
            original to ensure your rarity value.
          </p>

          <div className="1xl:block absolute right-[-579px] bottom-[-250px] hidden animate-wiggle">
            <SingleToaster />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto mt-[33px] max-w-[1440px] bg-[#0d0a0aa8] px-8 pb-8 lg:mt-[133px] lg:bg-inherit lg:bg-gradient-to-t lg:from-[#1D1D1B00] lg:to-[#0d0a0aa8] lg:px-20 lg:pb-0">
          <div
            id="team"
            className="relative top-[-33px] mx-auto max-w-screen-xl lg:top-[-135px]"
          >
            <h3 className="text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              THE TEAM
            </h3>
            <p className="mx-auto max-w-[739px] pt-8 pb-16 text-center lg:pt-0 lg:text-left">
              The <strong>3J’s</strong> - our Toaster investigation team
              comprises of <strong>Jake</strong>, <strong>Jacob </strong>
              and <strong>Joe</strong>. All 3 have had Toaster Takeovers this is
              what brought the team together.{' '}
            </p>
            <div className="relative">
              <Swiper
                modules={[A11y]}
                spaceBetween={18}
                loop={true}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 480px
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  {TeamImages.images[0] && (
                    <div className="aspect-[3/4] lg:mx-4">
                      <Image
                        src={TeamImages.images[0].src}
                        alt={TeamImages.images[0].name}
                      />
                    </div>
                  )}
                  <div className="grid gap-8 px-0 pt-2 pb-8 mt-10 text-center lg:px-10">
                    <div className="z-10 flex items-center justify-between w-full text-secondary md:hidden lg:hidden">
                      <SwiperPrev />
                      <h4 className="font-black text-secondary">Jake</h4>
                      <SwiperNext />
                    </div>

                    <h4 className="hidden font-black text-secondary md:block">
                      Jake
                    </h4>

                    <p>
                      Apart from having the amazing ability eat a mountain and
                      stay as skinny as a rake. Jake’s keen eye for detail makes
                      him a great researcher, authenticator and drop selector.
                    </p>

                    <p>Jake also looks after the technical needs of the GTC.</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {TeamImages.images[1] && (
                    <div className="aspect-[3/4] lg:mx-4">
                      <Image
                        src={TeamImages.images[1].src}
                        alt={TeamImages.images[1].name}
                      />
                    </div>
                  )}
                  <div className="grid gap-8 px-0 pt-2 pb-8 mt-10 text-center lg:border-x-2 lg:border-secondary lg:px-10">
                    <div className="z-10 flex items-center justify-between w-full text-secondary md:hidden lg:hidden">
                      <SwiperPrev />
                      <h4 className="font-black text-secondary">Jacob</h4>
                      <SwiperNext />
                    </div>

                    <h4 className="hidden font-black text-secondary md:block">
                      Jacob
                    </h4>

                    <p>
                      Jacob loves his Reggae and runs a couple of sound systems
                      - when not buying records.
                    </p>

                    <p>
                      He’s our events organiser and create thinker responsible
                      for merch, publishing and drop selection.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {TeamImages.images[2] && (
                    <div className="aspect-[3/4] lg:mx-4">
                      <Image
                        src={TeamImages.images[2].src}
                        alt={TeamImages.images[2].name}
                      />
                    </div>
                  )}
                  <div className="grid gap-8 px-0 pt-2 pb-8 mt-10 text-center lg:px-10">
                    <div className="z-10 flex items-center justify-between w-full text-secondary md:hidden lg:hidden">
                      <SwiperPrev />
                      <h4 className="font-black text-secondary">Joe</h4>
                      <SwiperNext />
                    </div>

                    <h4 className="hidden font-black text-secondary md:block">
                      Joe
                    </h4>

                    <p>Joe loves a good moan (apparently).</p>
                    <p>
                      Original founder of GTC that proudly brought Jake and
                      Jacob to the team.
                    </p>
                    <p>Helps with research, creative and drop selection.</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1440px] bg-[url('/assets/images/background-background.png')] bg-[length:140%] bg-bottom bg-no-repeat px-8 pt-[95px] lg:mt-[135px] lg:bg-[length:33%] lg:bg-center lg:bg-repeat-x lg:px-20 lg:pt-0">
          <div
            id="merch"
            className="relative top-[-135px] mx-auto max-w-screen-xl"
          >
            <h3 className="pb-8 text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:pb-0 lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              MERCH
            </h3>
            <div className="mx-auto grid max-w-[1096px] gap-8 pb-16 text-center text-black lg:pb-28">
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
                  {MerchImages.images[0] && (
                    <Image
                      src={MerchImages.images[0].src}
                      alt={MerchImages.images[0].id}
                    />
                  )}
                  <div className="grid gap-8 px-10 pt-2 pb-8 mt-10 text-center text-black">
                    <p>
                      Set A:
                      <br />
                      <strong>Big Back Toaster</strong>
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {MerchImages.images[1] && (
                    <Image
                      src={MerchImages.images[1].src}
                      alt={MerchImages.images[1].id}
                    />
                  )}
                  <div className="grid gap-8 px-10 pt-2 pb-8 mt-10 text-center text-black">
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
          <div
            id="social"
            className="relative top-[-135px] mx-auto max-w-screen-xl"
          >
            <h3 className="pb-8 text-center text-[45px] font-black tracking-tight drop-shadow-[0_1px_6px_#0D0A0A] lg:pb-0 lg:text-[170px] lg:drop-shadow-[0_3px_16px_#0D0A0A]">
              SOCIAL
            </h3>
            <div className="mx-auto grid max-w-[1096px] gap-8 text-center text-secondary">
              <p>
                Catch us on{' '}
                <Link
                  href="https://www.instagram.com/global_toaster_club/"
                  target="_blank"
                  className="font-black text-white"
                >
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
          <div
            id="drops"
            className="relative top-[-175px] mx-auto h-[600px] max-w-screen-xl text-center lg:h-[350px]"
          >
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
            <button className="my-8 mx-auto w-full max-w-[200px] border-2 border-[#20222C4D] bg-secondary py-2 font-bold text-black drop-shadow-[0px_4px_8px_#00000060] hover:animate-wiggle hover:bg-black  hover:text-secondary  focus:drop-shadow-[0px_4px_8px_#00000080]">
              Buy <strong>NFTs</strong>
            </button>
            <div className="flex justify-center pt-8 lg:hidden lg:pt-0">
              <SingleToaster />
            </div>
            <div className="pointer-events-none absolute top-0 right-[-10px] hidden w-full flex-col items-end justify-end px-32 lg:flex">
              <div className="relative w-1/4">
                <CtaBubble />
              </div>
              <div className="flex justify-center w-1/4">
                <SingleToaster />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
