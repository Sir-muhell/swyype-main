import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos"

export const Hero = () => {
  useEffect(()=> {
    AOS.init({
      easing: 'ease-in-out-sine',
    })
  },[])
  return (
    <>
      <main className="h-full w-full bg-swyype-white px-11 pt-5 md:pt-12 pb-10 overflow-x-hidden">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-center items-center lg:h-full">
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h1 data-aos="fade-down" className="lg:w-[594px] w-[294px] font-SpaceGrotesk-Bold text-[35px] lg:text-[54px] leading-[35.9px] lg:leading-[68.9px]">Your portal to a Decentralized
              way of payment.</h1>
            <p data-aos="fade-up" className="font-SpaceGrotesk-Medium text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-black/70 w-[308px] lg:w-[787px] text-center lg:text-left">Swyype is a card to cash settlement platform  that gives users the ability
              to withdraw USDT in Naira through ATMs and POS machines with a virtual and physical card .</p>
            <button data-aos="fade-right" className="bg-swyype-blue group w-[308px] h-[68px] rounded-[30px]">
               <a href="https://swyypewaitlist.typeform.com/to/y4lrQbgE" target="_blank">
              <div className="flex flex-row justify-center gap-3 items-center">
                <p className="font-SpaceGrotesk-Medium text-[20px] leading-[25.52px] text-swyype-white">Get Started</p>
                <div className="w-[45px] h-[45px] bg-swyype-yellow flex flex-col justify-center items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-swyype-white group-hover:animate-arrow">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
               </a>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center relative w-[594px] mt-20 md:mt-0 lg:h-[1009px]">
            <div data-aos="fade-left">
              <Image src={require("../img/swyype-card.svg")} alt="Swyype Card" width={1026.2} height={559} className={`h-full lg:h-screen overflow-hidden w-[800px] object-cover`} draggable={false} />
            </div>
          </div>
        </div>
      </main>
      <Image src={require("../img/line.svg")} alt="Line" width={1728} height={47} className={`h-[47px] overflow-hidden w-full object-cover`} draggable={false} />
    </>
  )
}
