import { FC } from "react"
import { useRouter } from "next/router"
import classes from "./DefaultLayout.module.scss"
import Image from "next/image"

const DefaultLayout: FC = ({ children }) => {
  const router = useRouter()
  let background = "/img/backgrounds/placeholder.png"
  const containerClasses = [classes.container]

  switch (router.pathname) {
    case "/login": {
      background = "/img/backgrounds/auth.jpg"
      containerClasses.push(classes.flexContainer)
      break
    }

    case "/registration": {
      background = "/img/backgrounds/auth.jpg"
      containerClasses.push(classes.flexContainer)
      break
    }

    default:
      break
  }

  return (
    <div className={classes.layout}>
      <div className={classes.background}>
        <div className={classes.background__wrapper}>
          <Image
            src={background}
            layout='fill'
            objectFit='cover'
            alt='background-image'
            loading='eager'
          />
        </div>
      </div>
      <div className={classes.overlay}></div>
      <div className={containerClasses.join(" ")}>{children}</div>
    </div>
  )
}

export default DefaultLayout
