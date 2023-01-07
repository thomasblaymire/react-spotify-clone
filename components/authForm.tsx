import {
  Box,
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react'
import { MdEmail, MdPassword } from 'react-icons/md'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import NextImage from 'next/image'
import { auth } from '../lib/mutations'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/')
  }

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px" width="30%">
          <form onSubmit={handleSubmit}>
            <Stack paddingBottom="25px">
              <InputGroup marginBottom="15px">
                <InputLeftElement pointerEvents="none">
                  <MdEmail color="gray.300" />{' '}
                </InputLeftElement>
                <Input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <MdPassword color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Stack>

            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                '&:hover': {
                  bg: 'green.300',
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default AuthForm
