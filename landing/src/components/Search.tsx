import IconSearch from "@/assets/icon-search.svg"
import Image from "next/image"

export const Search = () => {
    return (
        <div className="flex items-center gap-4">
            <Image 
                src={IconSearch}
                alt="Icon Search"
            />
            <input 
                type="text" 
                placeholder="Buscar"
                className="bg-transparent outline-none font-bold text-white pr-5 placeholder:text-white"/>
        </div>
    )
}