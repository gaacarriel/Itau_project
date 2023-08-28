import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Container = ({children}: Props) => {
    return(
        <div className="flex items-center justify-between w-full max-w-[1256px] px-[15px] mx-auto">
            {children}
        </div>
    )
}