import Head from 'next/head'
import {
  About,
  Contagion,
  Footer,
  Header,
  Report,
  Overview,
  Subscribe,
  Symptomps,
  Prevention,
} from './content';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Covid 19 - landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">
        <Overview />
        <About />
        <Contagion />
        <Symptomps />
        <Prevention />
        <Report />
        <Subscribe />
      </main>
      <Footer />
    </div>

  )
}
