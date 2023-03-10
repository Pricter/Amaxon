import Image from "next/image"
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

function Header() {
  const {data: session} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* TOP NAV */}
      <div className="flex items-center bg-amaxon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 px-4">
          <Image
            onClick={() => router.push("/")}
            src="/amazon_PNG.png"
            width={100}
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
          <div onClick={!session ? signIn : signOut} className="link">
            <p>
              {session ? `Hello, ${session.user.name}` : 'Hello, sign in'}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex link items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4
                           bg-yellow-400 text-center rounded-full
                            text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold 
                          md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="flex items-center bg-amaxon_blue-light text-sm
                    text-white space-x-3 pl-4">
        <p className="link flex items-center p-2 px-5 font-bold">
          <MenuIcon className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal</p>
      </div>
    </header>
  )
}

export default Header