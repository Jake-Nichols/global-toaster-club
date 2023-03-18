import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          key="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          key="icon32"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          key="icon16"
          href={`${router.basePath}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${router.basePath}/site.webmanifest`}
          key="webmanifest"
        />
        <link
          rel="mask-icon"
          href={`${router.basePath}/safari-pinned-tab.svg" color="#224c5c`}
          key="mask-icon"
        />
        <link
          rel="shortcut icon"
          href={`${router.basePath}/favicon.ico`}
          key="shortcut"
        />
        <meta name="msapplication-TileColor" content="#00aba9" key="ms-tile" />
        <meta
          name="msapplication-config"
          content={`${router.basePath}/browserconfig.xml`}
          key="browser-config"
        />
        <meta name="theme-color" content="#224c5c" key="theme-color"></meta>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
