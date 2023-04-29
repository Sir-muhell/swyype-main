import { Navbar } from '../components/Navbar'
// import { Footer } from './Footer'
import { ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}