import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Search from './search'
import Works from './works'
import Waranty from './homeWaranty'
import Mobile from './mobile'

import ServiceTech from './serviceTech'
import Available from './available'
import Plan from './plan'
import Subscription from './subscription'
import Faqs from './faqs'

// Your Home Appliance Destination


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LY3LEY </title>
        <meta name="description" content="Welcome to LY3LEY, your premier destination for home appliances and smart living solutions. Explore our wide selection of kitchen essentials, household gadgets, and cutting-edge smart home devices. Shop now and transform your home into a haven of convenience and innovation with LY3LEY." />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"/>
      </Head>
      <main className='' >
        <Search />
        <Works />
        <Waranty />
        <ServiceTech />
        <Plan />
        <Subscription />
        <Mobile />
        <Faqs />
        <Available />
      </main>
    </>
  )
}
