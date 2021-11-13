import { createContext, FC } from "react"

export interface ICommonContext {
  appName: string
}

export const CommonCtx = createContext<ICommonContext>({
  appName: "",
})

const value: ICommonContext = {
  appName: "Eat App",
}

const CommonCtxProvider: FC = ({ children }) => {
  return <CommonCtx.Provider value={value}>{children}</CommonCtx.Provider>
}

export default CommonCtxProvider
