import { Card, CardBody, CardFooter, Spacer, Stack, Heading, Divider, Text, ButtonGroup, Button } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { useState } from 'react'


const Tarjeta = () => {
    const [contador, setContador] = useState(0)
  return (
    <div>
          
          <Card maxW='sm'>
              <CardBody>
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>PAN DULCE CIRENITA </Heading>
                      <Text>
                          PAN DULCE EN EL CARREOFUR TE SALE
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                          $10.000
                      </Text>
                  </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue' onClick={() => setContador(contador +1)}>
                          AGREGAR 
                      </Button>
                      <Button variant='solid' colorScheme='blue'>
                          {contador}
                      </Button>
                      <Button variant='solid' colorScheme='blue' onClick={() =>setContador (contador -1) }>
                          ELIMINAR
                      </Button>
                      
                  </ButtonGroup>
              </CardFooter>
          </Card>

          <Spacer />

          
         
         
          
          <Card maxW='sm'>
              <CardBody>
                  <Stack mt='6' spacing='3'>
                      <Heading size='md'>PAN DULCE MAROLIO</Heading>
                      <Text>
                          TA RE CARO ESTE SACALO EN CUOTAS AMIGO XD
                      </Text>
                      <Text color='blue.600' fontSize='2xl'>
                          $15.000
                      </Text>
                  </Stack>
              </CardBody>

              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                      <Button variant='solid' colorScheme='blue'>
                          AÑADIR AL CARRITO
                      </Button>
                      
                  </ButtonGroup>
              </CardFooter>
          </Card>

    </div>
  )
}

export default Tarjeta