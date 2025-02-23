import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { PlusSquareIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={"16"}
        justify={"space-between"} 
        align={"center"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Furosha Store 🛒</Link>
        </Text>

        <HStack spacing={4} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar