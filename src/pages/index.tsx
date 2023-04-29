import { FAQs } from '@/components/Faq'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Layout from '@/layouts/default'
import Head from 'next/head'
import { ReactElement } from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Swyype is a card to cash settlement platform that gives users the ability to withdraw USDT in Naira through ATMs and POS machines with a virtual and physical card ." />
        <title>
          {'Swyype is a card to cash settlement platform that gives users the ability to withdraw USDT in Naira through ATMs and POS machines with a virtual and physical card .'}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-fit w-full">
        <Hero />
        <Features />
        <FAQs />
        <Footer />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
