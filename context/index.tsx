import { FC } from "react"
import CommonCtxProvider from "./common"

const Ctx: FC = ({ children }) => {
  return (
    <>
      <CommonCtxProvider>{children}</CommonCtxProvider>
    </>
  )
}

export default Ctx
