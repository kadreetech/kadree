import React from 'react'
import Head from 'next/head';

export const HtmlHead = () => {
  const websiteDesc = 'Desarrollos a la medida para tu negocio. Utilizamos diferentes tecnologías para mejorar los costos y los tiempos de entrega.'
  const websiteDescEn = 'Custom development solutions, IT consultancy experts trainings.'
  return (
    <Head>
      <title>Kadree Tech</title>
      <meta name="title" content="Kadree Tech - Expand your development team" />
      <meta name="description" content={websiteDesc} lang="es" />
      <meta name="description" content={websiteDescEn} lang="en" />

      {	/* Open Graph / Facebook  */}
      <meta property="og:title" content="Kadree Tech" />
      <meta property="og:description" lang="en" content={websiteDescEn} />
      <meta property="og:description" lang="es" content={websiteDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kadreetech.com" />
      <meta property="og:image" content="https://www.kadreetech.com/img/brand/meta.png" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.kadreetech.com" />
      <meta property="twitter:title" content="Kadree Tech" />
      <meta property="twitter:description" content={websiteDesc} lang="es" />
      <meta property="twitter:description" content={websiteDescEn} lang="en" />
      <meta property="twitter:image" content="https://www.kadreetech.com/img/brand/meta.png" />

      <meta name="application-name" content="Kadree Tech" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
      <link rel="icon" type="image/png" href="favicon-128x128.png" sizes="128x128" />
      <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon-180x180.png" />
      <link rel="apple-touch-icon" sizes="192x192" href="apple-touch-icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png" />
      <link rel="manifest" href="site.webmanifest" />
    </Head>
  )
}
