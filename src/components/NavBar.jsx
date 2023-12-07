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
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
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