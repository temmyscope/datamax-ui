import Head from 'next/head';

export default function SeoHead({ siteTitle, description, keywords }) {

  return (
    <Head>
      <title>{`PunhubCentral | ${siteTitle}`}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={`${description}`}/>
      <meta 
        name="keywords" 
        content={`Punhub, Central, Puns, HipHop, Pop, Rap, ${keywords}`} 
      />
      <meta name="author" content="Elisha Temiloluwa a.k.a TemmyScope" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="http://" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
  );
}