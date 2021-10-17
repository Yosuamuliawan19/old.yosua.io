import '@/css/tailwind.css'
import '@/css/prism.css'

import '@/components/legacy_portfolio/styles/Common.css';
import '@/components/legacy_portfolio/styles/Home.css';
import '@/components/legacy_portfolio/styles/Work.css';
import '@/components/legacy_portfolio/styles/Button.css';
import '@/components/legacy_portfolio/styles/NotFound.css';
import '@/components/legacy_portfolio/styles/NavBar.css';
import '@/components/legacy_portfolio/styles/ProjectSection2.css';
import '@/components/legacy_portfolio/styles/SkillsSection.css';
import '@/components/legacy_portfolio/styles/Footer.css';
import '@/components/legacy_portfolio/styles/Sidebar.css';
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      {/* <LayoutWrapper> */}
        <Component {...pageProps} />
      {/* </LayoutWrapper> */}
    </ThemeProvider>
  )
}
