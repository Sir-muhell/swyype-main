import { useState } from "react"
import { useEffect } from "react"
import AOS from "aos"
export const FAQs = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
    })
  }, [])
  const [faqs] = useState([
    {
      question: "What is Swyype ?",
      answer: "Swyype is a decentralized system created to provide a easy liquidating of crypto asset to fiat through physical and virtual payment card."
    },
    {
      question: "How does Swyype work?",
      answer: "With Swyype, we give life to Crypto asset by giving the real life utility to pay for goods in the street, supermarket, Point-of-Sales, flight tickets, events and more"
    },
    {
      question: "Can I make international payment with Swyype card?",
      answer: "Yes, International payments are available"
    },
    {
      question: "Does Swyype have a reward system?",
      answer: "Yes, we have a reward system for each successful referral, we give you some percent of $SWYYPE coin"
    },
    {
      question: "How Is Swyype wallet truly decentralized?",
      answer: "Our wallet is decentralized as it's built as a non-custodial wallet powered by blockchain"
    },
    {
      question: "How many crypto currency does Swyppe wallet support?",
      answer: "Swyppe wallet would support as many token on our supported blockchain"
    },
    {
      question: "What blockchain is swyype built on?",
      answer: "Swyppe is built on lotex and Hathor blockchain"
    },
  ])
  return (
    <>
      <div id="faqs" className="h-full w-full py-6 lg:py-12 overflow-x-hidden">
        <div className="border-swyype-yellow border px-6 lg:px-12 py-6 iphone-se:px-2 lg:py-12">
          <h1 data-aos="fade-down" className="font-SpaceGrotesk-Medium text-[36px] leading-[45.94px] text-swyype-black text-center">Frequently Asked Questions</h1>
          <div className="mt-10 mb-5">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details data-aos="fade-down" key={i} className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer">
                    <h2 className="font-SpaceGrotesk-Medium text-[20px] leading-[25.52px] text-swyype-black">
                      {faq.question}
                    </h2>
                    <svg
                      className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="px-4 mt-4 font-SpaceGrotesk-Medium text-[18px] leading-relaxed text-swyype-black/60">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* -[5px_4px_4px_rgba(0,0,0,0.47)] */}
      <div className="py-6 lg:py-12 px-6 md:px-8 xiaomi:px-4 lg:px-12">
        <div className="h-[226px] w-[346px] iphone-se:w-[285px] iphone:w-[345px] xiaomi:w-[325px] iphone-12:w-[359px] iphonexr:w-[382px] iphone12:w-[396px] md:w-[710px] ipad-air:w-[760px] fold:w-[820px] lg:w-[1261px] [@media_(min-width:_1280px)]:w-[1300px] flex flex-col lg:flex-row [@media_(min-width:_1280px)]:flex-row justify-center gap-6 lg:gap-12 items-center bg-swyype-yellow rounded-[10px] shadow">
          <h1 className="font-SpaceGrotesk-Medium text-[28px] iphone-se:text-[23px] md:text-[34px] leading-[43.38px] text-center lg:text-left text-swyype-white">Get weekly updates !</h1>
          <div className="bg-swyype-white w-[313px] iphone-se:w-[275px] md:w-[560px] lg:w-[642px] h-[80px] rounded-[6px] px-4 md:px-6 lg:px-8 py-4 flex flex-col md:flex-row lg:justify-between items-center">
            <div className="flex flex-row items-center gap-2 lg:gap-4 mb-2 lg:mb-0">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9484 2.38576C19.8582 1.93162 19.6568 1.51604 19.3756 1.17271C19.3163 1.09791 19.2544 1.03092 19.1872 0.963926C18.689 0.463223 17.9897 0.150879 17.2257 0.150879H2.77426C2.01031 0.150879 1.31352 0.463223 0.81293 0.963926C0.745938 1.03092 0.683984 1.09791 0.624531 1.17271C0.343164 1.516 0.141797 1.93162 0.0541406 2.38576C0.018125 2.56104 0 2.74217 0 2.92529V13.075C0 13.4644 0.0825781 13.8387 0.229844 14.1767C0.366445 14.4994 0.567852 14.7913 0.812891 15.0361C0.875 15.0981 0.93668 15.155 1.00398 15.2117C1.48391 15.6091 2.1034 15.8492 2.77426 15.8492H17.2257C17.8968 15.8492 18.519 15.6091 18.9962 15.2092C19.0633 15.155 19.1253 15.0981 19.1872 15.0361C19.4321 14.7913 19.6335 14.4994 19.7729 14.1767V14.1742C19.9202 13.8362 20 13.4644 20 13.0751V2.92529C20 2.74217 19.9821 2.56104 19.9484 2.38576ZM1.81676 1.96764C2.06461 1.72006 2.39746 1.57018 2.77426 1.57018H17.2257C17.6025 1.57018 17.9383 1.72006 18.1832 1.96764C18.2271 2.01174 18.2684 2.06088 18.3048 2.10971L10.7303 8.71107C10.5214 8.89416 10.2634 8.98459 10 8.98459C9.7393 8.98459 9.48141 8.89416 9.26973 8.71107L1.69813 2.10689C1.73164 2.05807 1.77293 2.01174 1.81676 1.96764ZM1.4193 13.075V3.57561L6.9007 8.35744L1.42207 13.1342C1.4193 13.1161 1.4193 13.0957 1.4193 13.075ZM17.2257 14.4296H2.77426C2.52891 14.4296 2.29934 14.3651 2.1034 14.2518L7.88379 9.21432L8.42344 9.68377C8.87504 10.0762 9.44016 10.2749 10 10.2749C10.5627 10.2749 11.1278 10.0762 11.5794 9.68377L12.1187 9.21432L17.8969 14.2518C17.7007 14.3651 17.4711 14.4296 17.2257 14.4296ZM18.5807 13.075C18.5807 13.0957 18.5807 13.1161 18.578 13.1342L13.0995 8.36022L18.5807 3.57814V13.075Z" fill="black" fillOpacity="0.5" />
              </svg>
              <input className="placeholder:font-SpaceGrotesk-Medium placeholder:text-[16px] placeholder:leading-[20.42px] placeholder:text-swyype-black/50 outline-none bg-transparent border-none focus:outline-none focus:border-none" placeholder="Enter mail address" type="email" name="email" id="email" />
            </div>
            <button className="bg-swyype-blue group w-[313px] iphone-se:w-[275px] h-[70px] md:w-[308px] md:h-[68px] md:rounded-[30px] rounded-[6px]">
              <div className="flex flex-row justify-center w-[313px] h-[40px] md:w-[308px] md:h-[68px] gap-1 md:gap-3 items-center">
                <p className="font-SpaceGrotesk-Medium text-[15px] md:text-[20px] leading-[25.52px] text-swyype-white">Continue</p>
                <div className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] bg-swyype-yellow flex flex-col justify-center items-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:w-6 md:h-6 w-3 h-3 text-swyype-white group-hover:animate-arrow">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
