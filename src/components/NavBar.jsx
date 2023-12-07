import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

const NavBar = () => {
  
  return (
    <div>
          <Flex>
              <Menu>
                  <MenuButton>
                      CATEGORIAS
                  </MenuButton>
                  <MenuList>
                      <MenuItem>COMESTIBLE</MenuItem>
                      <MenuItem>ELECTRODOMESTICO</MenuItem>
                      <MenuItem>HOGAR</MenuItem>
                      <MenuItem>BEBIBLES</MenuItem>
                      <MenuItem>CARNES</MenuItem>
                  </MenuList>
              </Menu>
              <Spacer />
              <Box p='4' >
                  <h1>COMPARA TODO</h1>

              </Box>
              
              
              <Spacer />

              <Box p='4'>
                <CartWidget/>
                 
              </Box>
          </Flex>

    </div>
  )
}

export default NavBar