import Link from "next/link"

export const Footer = () => {
  return (
    <>
      <div className="bg-swyype-blue h-[388px] w-full flex flex-col justify-center items-center gap-y-6">
        <h1 className="font-SpaceGrotesk-Medium text-[30px] leading-[38.28px] text-swyype-white">Stay in touch</h1>
        <p className="font-SpaceGrotesk-Medium text-[17px] px-5 lg:text-[20px] text-center lg:text-left leading-[25.52px] text-swyype-white">Follow our social media to stay updated on trends , new payment gateways and the latest on cryptocurrency.</p>
        <div className="flex flex-row items-center justify-between gap-7">
          {/* Telegram */}
          <Link href={"https://t.me/joinswyype"}>
            <svg width="42" height="37" viewBox="0 0 42 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.6574 0.790591C40.3346 0.511624 39.9415 0.326371 39.5208 0.254922C39.1002 0.183473 38.668 0.228555 38.2711 0.385279L2.22482 14.5464C1.75361 14.7315 1.35501 15.0642 1.08867 15.4948C0.822324 15.9253 0.702561 16.4305 0.7473 16.9348C0.792038 17.4391 0.998872 17.9153 1.33685 18.2923C1.67483 18.6692 2.12578 18.9265 2.62222 19.0258L12.4062 20.9827V33.0595C12.4014 33.5241 12.5369 33.9794 12.795 34.3657C13.0532 34.7521 13.4219 35.0514 13.8531 35.2247C14.1419 35.3456 14.4518 35.4083 14.7649 35.4092C15.0709 35.4082 15.3736 35.3465 15.6555 35.2276C15.9375 35.1087 16.193 34.935 16.4073 34.7166L21.9925 29.1314L30.2334 36.3834C30.658 36.7606 31.2061 36.9692 31.774 36.9698C32.0209 36.9695 32.2663 36.9305 32.5011 36.8544C32.8885 36.7315 33.2368 36.5093 33.5114 36.2098C33.7861 35.9103 33.9773 35.544 34.0662 35.1475L41.4126 3.09028C41.5085 2.67453 41.4889 2.24047 41.3558 1.83511C41.2226 1.42974 40.9811 1.06853 40.6574 0.790591ZM2.30369 16.7967C2.28426 16.6279 2.32231 16.4575 2.41169 16.3131C2.50108 16.1686 2.63657 16.0585 2.79627 16.0006L35.8383 3.01966L13.0063 19.5094L2.92863 17.4938C2.76123 17.4649 2.60848 17.3803 2.49508 17.2538C2.38168 17.1273 2.31425 16.9662 2.30369 16.7967ZM15.3024 33.6119C15.1931 33.7211 15.0539 33.7955 14.9024 33.8257C14.7508 33.8558 14.5938 33.8404 14.451 33.7812C14.3083 33.7221 14.1863 33.622 14.1004 33.4935C14.0146 33.365 13.9688 33.214 13.9687 33.0595V22.0704L20.8172 28.0971L15.3024 33.6119ZM39.8896 2.74124L32.5432 34.7984C32.5129 34.9303 32.4489 35.0521 32.3575 35.1519C32.266 35.2516 32.1502 35.3259 32.0214 35.3674C31.8926 35.409 31.7552 35.4163 31.6227 35.3888C31.4902 35.3613 31.3671 35.2998 31.2655 35.2104L14.4385 20.4025L39.7634 2.11248C39.83 2.20122 39.8759 2.30375 39.8977 2.41255C39.9196 2.52134 39.9168 2.63365 39.8896 2.74124Z" fill="white" />
            </svg>
          </Link>
          {/* Linkedin */}
          <Link href={`https://www.linkedin.com/company/swyype-pay/`}>
            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.1363 36C27.6988 36 27.3425 35.645 27.3425 35.2075V23.1625C27.3425 18.8075 25.1075 18.8075 24.265 18.8075C21.9175 18.8075 20.7288 20.2725 20.7288 23.1625V35.2088C20.7288 35.6463 20.3738 36.0013 19.9363 36.0013H13.125C12.6875 36.0013 12.3325 35.6463 12.3325 35.2088V12.2625C12.3325 11.825 12.6875 11.47 13.125 11.47H19.9375C20.375 11.47 20.73 11.825 20.73 12.2625V13.1175L21.14 12.7788C22.7525 11.445 24.6763 10.7688 26.8575 10.7688C29.5538 10.7688 31.8238 11.63 33.4213 13.2613C35.1088 14.9838 36 17.5488 36 20.6775V35.2088C36 35.6463 35.6438 36.0013 35.2063 36.0013H28.1363V36ZM24.2663 17.22C26.0088 17.22 28.9313 17.9925 28.9313 23.1625V34.415H34.4125V20.6775C34.4125 15.3888 31.6588 12.3563 26.8575 12.3563C22.57 12.3563 20.7125 15.5938 20.635 15.7313C20.495 15.985 20.23 16.1425 19.9413 16.1425C19.8763 16.1425 19.81 16.1325 19.7425 16.1163C19.39 16.0275 19.1438 15.7138 19.1438 15.3538V13.0575H13.9188V34.4163H19.1438V23.1625C19.1438 19.4413 21.0588 17.22 24.2663 17.22Z" fill="white" />
              <path d="M1.475 36C1.0375 36 0.681252 35.645 0.681252 35.2075V12.2625C0.681252 11.825 1.0375 11.47 1.475 11.47H8.58125C9.01875 11.47 9.37375 11.825 9.37375 12.2625V35.2075C9.37375 35.645 9.01875 36 8.58125 36H1.475ZM2.26875 34.415H7.7875V13.0562H2.26875V34.415Z" fill="white" />
              <path d="M4.99625 10.0487C2.24125 10.0487 0 7.795 0 5.025C0 2.25375 2.24125 0 4.99625 0C7.7475 0 9.9875 2.255 9.9875 5.02625C9.9875 7.795 7.7475 10.0487 4.99625 10.0487ZM4.99625 1.5825C3.11625 1.5825 1.5875 3.12625 1.5875 5.025C1.5875 6.9225 3.11625 8.46375 4.99625 8.46375C6.875 8.46375 8.4025 6.9225 8.4025 5.025C8.40125 3.1275 6.875 1.5825 4.99625 1.5825Z" fill="white" />
            </svg>
          </Link>
          {/* Twitter */}
          <Link href={`https://twitter.com/joinswyype?s=21&t=v9j8Pe2NAq4Us2JVlOBNsw`}>
            <svg width="50" height="42" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.418 3.74834C36 3.74834 38.3311 4.80478 39.9733 6.50088C42.0163 6.10557 43.9421 5.38525 45.6726 4.3876C45.003 6.42046 43.5788 8.12588 41.7265 9.20479C43.539 8.9915 45.2742 8.52588 46.8843 7.82979C45.6773 9.5751 44.1578 11.1118 42.4031 12.3399C42.4195 12.7126 42.4289 13.0892 42.4289 13.4641C42.4289 24.9743 33.3953 38.25 16.8766 38.25C11.8063 38.25 7.0836 36.8032 3.11177 34.3329C3.82232 34.4155 4.53707 34.4567 5.2524 34.4562C9.45943 34.4562 13.3336 33.0648 16.4078 30.7258C12.4758 30.6586 9.15704 28.1375 8.01876 24.6789C8.57624 24.7833 9.1422 24.8359 9.70938 24.8359C10.5258 24.8359 11.3211 24.7305 12.0727 24.5305C7.96485 23.7328 4.86876 20.2117 4.86876 15.989V15.8773C6.08048 16.5304 7.46407 16.9226 8.93829 16.9679C6.52735 15.4038 4.94219 12.7414 4.94219 9.71865C4.94219 8.121 5.38599 6.62412 6.15865 5.34209C10.5868 10.6093 17.204 14.078 24.6688 14.4429C24.5149 13.8069 24.4352 13.1351 24.4352 12.4593C24.4352 7.64756 28.4563 3.74834 33.418 3.74834ZM46.8842 7.8314H46.892H46.8842ZM33.4178 0.623535C27.2819 0.623535 22.1984 5.1064 21.4156 10.8986C16.3953 9.88999 11.8296 7.23218 8.54918 3.33296C8.25592 2.98411 7.8899 2.70363 7.47679 2.51118C7.06367 2.31874 6.61346 2.219 6.15772 2.21895C6.07588 2.21897 5.99406 2.22209 5.91246 2.22832C5.41712 2.26799 4.93834 2.425 4.51571 2.68638C4.09308 2.94776 3.73874 3.30599 3.48199 3.73145C2.39252 5.53916 1.81688 7.60987 1.8171 9.72051C1.8171 11.1291 2.07017 12.501 2.54991 13.7838C2.03897 14.3518 1.74444 15.0947 1.74444 15.8791V15.9908C1.74444 19.0518 2.9546 21.8924 4.96397 24.0213C4.84835 24.5572 4.87413 25.1182 5.05069 25.6557C5.74371 27.7642 7.00543 29.5814 8.64137 30.9657C7.54288 31.2103 6.40933 31.3337 5.25225 31.3337C4.64053 31.3337 4.04522 31.3001 3.48194 31.2313C3.35694 31.2157 3.2335 31.2103 3.10928 31.2103C1.79678 31.2103 0.605379 32.0376 0.163191 33.2993C-0.321965 34.6821 0.216365 36.2149 1.46007 36.9892C6.07574 39.8611 11.4069 41.3774 16.8757 41.3774C34.6507 41.3774 45.3429 27.4626 45.5507 13.8704C47.0093 12.6637 48.2978 11.265 49.3812 9.7126C49.7926 9.1724 50.0149 8.51192 50.014 7.83291C50.014 6.76963 49.482 5.82978 48.6718 5.26489C49.0226 4.06255 48.6226 2.76099 47.646 1.96567C47.0757 1.50161 46.3765 1.26567 45.6733 1.26567C45.1253 1.26516 44.5869 1.40934 44.1124 1.68364C43.0796 2.279 41.9749 2.7501 40.8116 3.08921C38.7069 1.50561 36.0975 0.623584 33.4178 0.623535Z" fill="white" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}