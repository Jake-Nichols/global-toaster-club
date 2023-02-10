import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import CtaBubble from '@/components/CtaBubble';
import Toaster from '@/components/Toaster';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

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
        <h1 className="mx-auto mt-16 w-[900px] text-center text-[194px] font-black leading-[0.80] tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
          GLOBAL TOASTER CLUB
        </h1>
        <h2 className="pt-16 pb-8 text-center text-5xl font-black tracking-tight">
          <span className="text-secondary">The London Drop</span> - Coming Soon
        </h2>
      </section>

      <section className="mx-auto grid max-w-screen-xl auto-rows-auto grid-cols-4 gap-4 py-8">
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
        <div className="aspect-[3/4] border-8 border-white"></div>
      </section>

      <section className="overflow-hidden py-8">
        <div className="bg-[#2B5C71] py-8">
          <div className="img-ticker -mx-8 flex">
            <h3 className="mx-8 flex-none self-start text-[150px] font-black leading-[0.80] tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
              All GLOBAL TOASTER CLUB NFTS ARE 1 OFF
              <span className="text-secondary">.</span>
            </h3>
            <h3 className="mx-8 flex-none self-start text-[150px] font-black leading-[0.80] tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
              All GLOBAL TOASTER CLUB NFTS ARE 1 OFF
              <span className="text-secondary">.</span>
            </h3>
            <h3 className="mx-8 flex-none self-start text-[150px] font-black leading-[0.80] tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
              All GLOBAL TOASTER CLUB NFTS ARE 1 OFF
              <span className="text-secondary">.</span>
            </h3>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-screen-xl auto-rows-auto grid-cols-3 gap-4 py-8">
        <div className="aspect-[4/3] border-8 border-white"></div>
        <div className="aspect-[4/3] border-8 border-white"></div>
        <div className="aspect-[4/3] border-8 border-white"></div>
        <div className="aspect-[4/3] border-8 border-white"></div>
        <div className="aspect-[4/3] border-8 border-white"></div>
        <div className="aspect-[4/3] border-8 border-white"></div>
      </section>

      <section className="relative my-16">
        <div className="mx-auto flex max-w-screen-lg flex-row before:absolute before:right-0 before:-bottom-12 before:z-[-1] before:h-[489px] before:w-[1440px] before:bg-gradient-to-r before:from-[#EEB5AB00] before:to-[#EEB5AB]">
          <div>
            <Toaster />
          </div>
          <div>
            <div className="relative -left-24">
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
        <h3 className="mx-auto max-w-screen-xl text-center text-[170px] font-black tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
          BACKGROUND
        </h3>
        <div className="mx-auto max-w-screen-lg">
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

          <ul className="list-inside list-disc py-4 text-secondary">
            <li className="indent-4">
              Why do they only host with certain individuals, objects or
              landmarks?
            </li>
            <li className="indent-4">
              Why do they migrate in flocks from city to city?
            </li>
            <li className="indent-4">What do they want?</li>
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
        <div className="mx-auto mt-[135px] max-w-[1440px] bg-gradient-to-t from-[#1D1D1B00] to-[#0d0a0aa8] px-20">
          <div className="relative top-[-135px] mx-auto max-w-screen-xl">
            <h3 className="text-center text-[170px] font-black tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
              THE TEAM
            </h3>
            <p className="mx-auto max-w-[739px] pb-16">
              The 3J’s - our Toaster investigation team comprises of Jake, Jacob
              and Joe. All 3 have had Toaster Takeovers this is what brought the
              team together.{' '}
            </p>
            <div>
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
              >
                <SwiperSlide>
                  <div className="mx-4 aspect-[3/4] border-8 border-white"></div>
                  <div className="mt-10 grid gap-8 px-10 pt-2 pb-8 text-center">
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
                  <div className="mx-4 aspect-[3/4] border-8 border-white"></div>
                  <div className="mt-10 grid gap-8 border-x border-x-secondary px-10 pt-2 pb-8 text-center">
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
                  <div className="mx-4 aspect-[3/4] border-8 border-white"></div>
                  <div className="mt-10 grid gap-8 px-10 pt-2 pb-8 text-center">
                    <h4 className="font-black text-secondary">Jake</h4>

                    <p>
                      Apart from having the amazing ability eat a mountain and
                      stay as skinny as a rake. Jake’s keen eye for detail makes
                      him a great researcher, authenticator and drop selector.
                    </p>

                    <p>Jake also looks after the technical needs of the GTC.</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto mt-[135px] max-w-[1440px] px-20">
          <div className="relative top-[-135px] mx-auto max-w-screen-xl">
            <h3 className="text-center text-[170px] font-black tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
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
                slidesPerView={2}
                navigation
              >
                <SwiperSlide>
                  <img
                    src={`${router.basePath}/assets/images/tshirt-design-1.png`}
                    alt="Mock up A"
                    className="border-r border-r-black"
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
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] bg-primary px-20 pb-10">
          <div className="relative top-[-135px] mx-auto max-w-screen-xl">
            <h3 className="text-center text-[170px] font-black tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
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

      <section>
        <div className="mx-auto max-w-[1440px] bg-[#2B5C71] px-20">
          <div className="relative top-[-135px] mx-auto max-w-screen-xl text-center">
            <h3 className="text-[170px] font-black tracking-tight drop-shadow-[0_3px_16px_#0D0A0A]">
              DROPS
            </h3>
            <div className="mx-auto mb-8 max-w-[1096px] text-black">
              <p>
                Our next drop is a collation of{' '}
                <strong className="text-white">London</strong> Images.
              </p>
              <p>We have a some advance sales here.</p>
            </div>
            <Link href="/">Buy NFTs</Link>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
