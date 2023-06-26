import React from 'react'
import { CartStyles } from './CartStyled'
import Items from '../Items/Items'
export default function Cart() {
  return (
   
    <CartStyles>
      <h2>Cart</h2>
      <Items/>
      <p>Valor Total: 0</p>
    </CartStyles>

  )
}