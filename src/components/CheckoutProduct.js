import { addToBasket, removeFromBasket } from "@/slices/basketSlice";
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"

function CheckoutProduct({ id, title, price, description, category, image,
    rating, prime }) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, rating, prime }
    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className="grid grid-cols-5">
        <Image
            src={image}
            height={200}
            width={200}
            style={{ objectFit: "contain" }}
        />

        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(Math.round(rating.rate)).fill().map((_, i) => (
                    <StarIcon
                        key={i}
                        className="h-5 text-yellow-500"
                    />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <Currency quantity={price} currency="USD" />
            {prime && (
                <div className="flex items-center space-x-2">
                    <img
                        loading="lazy"
                        className="w-12"
                        src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
                    />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
        </div>

        <div className="flex flex-col my-auto justify-self-end space-y-2">
            <button className="button" onClick={addItemToBasket}>Add to Basket</button>
            <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct