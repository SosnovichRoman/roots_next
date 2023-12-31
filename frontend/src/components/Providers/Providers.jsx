'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function Providers({children}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}

const theme = extendTheme({
    fonts: {
      heading: `inherit`,
      body: `inherit`,
    },
    colors: {
      main: {
        100: '#042D1E',
        300: '#88A599',
      }
    }
  })