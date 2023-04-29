import { useRouter } from "next/router"
import { ReactElement } from "react"

export const Link = ({ children, href, onPress }: { children: any, href: string, onPress?: any }) => {
  const router = useRouter()
  const classes = `${router.asPath === href ? 'text-center flex flex-col items-center border-b-4 border-[#D9D9D9]' : 'group-hover:text-center group-hover:flex group-hover:flex-col group-hover:items-center group-hover:border-b-4 group-hover:border-[#D9D9D9]'}`

  const handleClick = (e: Event) => {
    // e.preventDefault()
    // router.push(href)
    onPress ? onPress(e) : null;
  }

  return (
    <a href={href} onClick={(e) => handleClick(e as any)} className={classes}>
      {children}
    </a>
  )
}