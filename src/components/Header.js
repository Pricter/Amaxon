import Image from "next/image"
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline"

function Header() {
  return (
    <header>
      {/* TOP NAV */}
      <div className="flex items-center bg-amaxon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 px-4">
          <Image
            src="/amazon_PNG.png"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            className="cursor-pointer"
          />
        </div>

        {/* SEARCH */}
        <div className="hidden sm:flex items-center bg-yellow-400 
                      hover:bg-yellow-500 h-10 rounded-md flex-grow
                        cursor-pointer">
          <input 
            className="p-2 h-full w-6 flex-grow flex-shrink px-4
                       rounded-l-md focus:outline-none"
            type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* RIGHT */}
        <div className="text-white flex items-center text-xs space-x-6
                        mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello K. Srinivas</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative flex link items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4
                           bg-yellow-400 text-center rounded-full
                            text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold 
                          md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div>
      </div>
    </header>
  )
}

export default Header