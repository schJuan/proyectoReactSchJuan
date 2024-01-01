import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button, } from '@chakra-ui/react'
import { Link } from "react-router-dom";
const CartWidget = () => {
  
  return (
    <div>
      <Link to={"/cart"}>
      <AiOutlineShoppingCart />
      </Link>
      

    </div>
  )
}

export default CartWidget