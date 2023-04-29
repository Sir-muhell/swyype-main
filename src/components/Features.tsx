import Image from "next/image"
import { useEffect, useRef } from "react"
import AOS from "aos"

export const Features = () => {
  const heading = useRef<HTMLHeadingElement>({} as HTMLHeadingElement)
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
    })
  }, [])
  return (
    <>
      <div id="features" className="scroll-m-3.5 px-5 lg:px-11 w-full h-full lg:h-screen overflow-x-hidden" draggable={false}>
        <div ref={heading} className="grid grid-cols-1 ipad-mini:grid-cols-2 md:place-items-start lg:grid-cols-3 lg:gap-x-48 lg:gap-y-14 mt-10">
          <div data-aos="fade-down" className="flex flex-col gap-y-5">
            <h1 data-splitting className="lg:w-[413px] w-[370px] font-SpaceGrotesk-Bold text-[35px] lg:text-[48px] leading-[61.25px]">Experience our
              Banking features.</h1>
            <p className="lg:w-[437px] w-[320px] font-SpaceGrotesk-Medium text-[18px] iphone-se:w-[296px] lg:text-[20px] leading-[25.52px]">Our vision is to give life to your crypto asset,
              by giving you the opportunity to spend it in
              real time daily.</p>
          </div>
          <div className="flex flex-col gap-y-3" data-aos="fade-down">
            <h1 className="w-[413px] font-SpaceGrotesk-Bold text-[42px] leading-[53.59px] tracking-[0.1em] text-swyype-blue/50">01</h1>
            <h1 className="w-[300px] font-SpaceGrotesk-Bold text-[24px] leading-[30.62px] tracking-[0.1em] text-swyype-black">Dencentralised wallet</h1>
            <p className="w-[345px] lg:w-[399px] iphone-se:w-[294px] font-SpaceGrotesk-Medium text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-black/70">A  multi-currency non-custodial wallet
              created with users safety and autonomy
              in mind.</p>
          </div>
          <div className="flex flex-col gap-y-3" data-aos="fade-down">
            <h1 className="w-[413px] font-SpaceGrotesk-Bold text-[42px] leading-[53.59px] tracking-[0.1em] text-swyype-blue/50">02</h1>
            <h1 className="w-[300px] font-SpaceGrotesk-Bold text-[24px] leading-[30.62px] tracking-[0.1em] text-swyype-black">Cards to go</h1>
            <p className="w-[316px] iphone-se:w-[294px] font-SpaceGrotesk-Medium text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-black/70">Card on the go to make  both local and
              international payment using crypto.</p>
          </div>
          <div className="flex flex-col gap-y-3" data-aos="fade-down">
            <h1 className="w-[413px] font-SpaceGrotesk-Bold text-[42px] leading-[53.59px] tracking-[0.1em] text-swyype-blue/50">03</h1>
            <h1 className="w-[300px] font-SpaceGrotesk-Bold text-[24px] leading-[30.62px] tracking-[0.1em] text-swyype-black">Cryptocurrency conversion</h1>
            <p className="w-[349px] iphone-se:w-[294px] lg:w-[399px] font-SpaceGrotesk-Medium text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-black/70">Multi- currency conversion across crypto and fiat.</p>
          </div>
          <div className="flex flex-col gap-y-3" data-aos="fade-down">
            <h1 className="w-[413px] font-SpaceGrotesk-Bold text-[42px] leading-[53.59px] tracking-[0.1em] text-swyype-blue/50">04</h1>
            <h1 className="w-[300px] font-SpaceGrotesk-Bold text-[24px] leading-[30.62px] tracking-[0.1em] text-swyype-black">International payment</h1>
            <p className="w-[349px] iphone-se:w-[294px] lg:w-[399px] font-SpaceGrotesk-Medium text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-black/70">Make Global payment with the Swyype
              virtual card.</p>
          </div>
          <div className="flex flex-col gap-y-3" data-aos="fade-down">
            <h1 className="w-[413px] font-SpaceGrotesk-Bold text-[42px] leading-[53.59px] tracking-[0.1em] text-swyype-blue/50">05</h1>
            <h1 className="w-[300px] font-SpaceGrotesk-Bold text-[24px] leading-[30.62px] tracking-[0.1em] text-swyype-black">Money transfer and payment</h1>
            <p className="w-[349px] iphone-se:w-[294px] lg:w-[399px] font-SpaceGrotesk-Medium text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-black/70">Make payment to your love ones in seconds
              with the Swyype multi-currency wallet.</p>
          </div>
        </div>
      </div>
      <div className="bg-swyype-blue w-full mt-12 px-12 py-12 flex flex-col ipad-mini:flex-row lg:flex-row gap-16 iphone-se:gap-3 lg:justify-between items-center h-full">
        <div data-aos="fade-right">
          <Image src={require("../img/swap.svg")} alt="Swap" width={547} height={349} className={`h-[349px] rounded-[20px] overflow-hidden lg:w-[547px] w-[432px] lg:object-cover`} draggable={false} />
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h1 data-aos="fade-down" className="text-swyype-yellow lg:w-[540px] iphone-se:w-[340px] w-[350px] text-center lg:text-left font-SpaceGrotesk-Bold iphone-se:text-[27px] text-[32px] lg:text-[42px] leading-[53.59px] not-italic">Easily convert your crypto
            assets to Fiat in seconds.</h1>
          <p data-aos="fade-up" className="lg:w-[712px] w-[313px] font-SpaceGrotesk-Medium text-center lg:text-left text-[18px] lg:text-[20px] leading-[25.52px] text-swyype-white">We convert your crypto to fiat using real time market price within
            seconds at the best rate you can find it, while you use your Swyype card
            on your daily purchases activity in the store, supermarket, and point
            of sale agent with lesser conversion fees.
          </p>
        </div>
      </div>
    </>
  )
}