import { Link } from "@/components/Link"
import { useLenis } from "@/utils/lenis"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [lenis, setLenis] = useState<any>()
  const ref = useRef(null)
  const variants = {
    open: { x: 0, opacity: 1, transition: { ease: "easeInOut" } },
    closed: { x: "110%", opacity: 0 },
  }
  useEffect(() => {
    const lenis = useLenis()
    setLenis(lenis)
  }, [])
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-swyype-blue">
        <div className="">
          <div className="md:flex md:flex-row md:justify-between md:items-center px-3 py-3 lg:px-32">
            <div className="flex flex-row items-center justify-between">
              <a href="/" className="flex ml-2 md:mr-24">
                <img src="/images/logo.svg" className="mr-3 h-[42px] object-contain" alt="SendTokens Logo" />
              </a>
              <motion.div className="md:hidden">
                <button onClick={() => setIsOpen(isOpen => !isOpen)} className="group">
                  <div>
                    <motion.svg initial={{ y: -50 }} animate={{ y: 0 }} whileTap={{ scale: 0.9 }}
                      transition={{ type: "just", stiffness: 400, damping: 17 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                      stroke="currentColor" className="w-[35px] h-[35px] !bg-transparent text-swyype-white transition-all ease-[ease] group-hover:hidden">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </motion.svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-[35px] text-swyype-white h-[35px] transition-all ease-[ease] group-hover:block hidden">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </div>

                </button>
              </motion.div>
            </div>
            <div className="md:block hidden">
              <ul className="flex flex-col md:flex-row items-center justify-between gap-14 text-[24px] !text-swyype-white font-SpaceGrotesk-Medium">
                <li className="group">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="group">
                  <Link href={"#features"} onPress={() => lenis?.scrollTo('#features')}>Features</Link>
                </li>
                <li className="group">
                  <Link href={"#faqs"} onPress={() => lenis?.scrollTo('#faqs')}>FAQs</Link>
                </li>
                <li className="group">
                  <Link href={"https://swyype.gitbook.io/swyype/"}>Docs</Link>
                </li>
              </ul>
            </div>
            <motion.div
              animate={isOpen ? "open" : "closed"}
              variants={variants} ref={ref}
              className="lg:hidden flex flex-col-reverse md:flex-row justify-evenly items-center transition-all duration-500 px-5 font-sans text-2xl h-screen overflow-hidden w-full fixed top-0 z-[999] bg-[#191919]/70"
            >
              <motion.div>
                <button onClick={() => setIsOpen(isOpen => !isOpen)} className="hover:[transform:rotate(45deg)] transition-all ease-[ease] opacity-[0.8] text-white text-center px-3 py-3 fixed right-10 z-[999] top-10 text-7xl rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white text-2xl">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
              <ul className="flex flex-col lg:flex-row items-center justify-between gap-14 text-[24px] !text-swyype-white font-SpaceGrotesk-Medium">
                <li className="group">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="group">
                  <Link href={"#features"} onPress={() => lenis?.scrollTo('#features')}>Features</Link>
                </li>
                <li className="group">
                  <Link href={"#faqs"} onPress={() => lenis?.scrollTo('#faqs')}>FAQs</Link>
                </li>
                <li className="group">
                  <Link href={"https://swyype.gitbook.io/swyype/"}>Docs</Link>
                </li>
              </ul>
            </motion.div>
            <div className="flex items-center justify-start">
              {/*  */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}