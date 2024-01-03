import React from 'react'
import { Card, CardFooter,CardHeader, Heading,  Button } from '@chakra-ui/react'

import { Link } from 'react-router-dom'


const Item = ({titulo, id}) => {
  return (
    <div>
          <Card>
              <CardHeader>
                  <Heading size='md'> {titulo}</Heading>
              </CardHeader>
              <CardFooter>
                  <Link to={`/producto/${id}`}>
                  <Button>Ver Descipcion</Button>
                </Link>
              </CardFooter>
          </Card>

    </div>
  )
}

export default Item