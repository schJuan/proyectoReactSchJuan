import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    
    
    const [contador,setContador] = useState(0)
    const mostrarMensaje = () => {
        alert(`Agregado al carrito ${contador} unidades`)
    }
    const sumar = () => {
        if (contador < 10) {
            setContador (contador + 1)
            
        }
    }
    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }
  return (
    
    <div>
          <Button colorScheme='teal' size='sm' onClick={sumar}>
              +
          </Button>
          <Button onClick={mostrarMensaje}>
            Agregar al carrito {contador}
          </Button>
          <Button colorScheme='teal' size='sm' onClick={restar} >
              -
          </Button>
    </div>
  )
}

export default ItemCount