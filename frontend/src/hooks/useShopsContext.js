import { ShopsContext } from "../context/ShopContext"
import { useContext } from "react"

export const useShopsContext = () => {
  const context = useContext(ShopsContext)

  if (!context) {
    throw Error('useWorkoutsContext must be used inside an ShopContextProvider')
  }

  return context
}