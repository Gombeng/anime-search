import { Spinner, Center } from '@chakra-ui/react'

export default function Loader() {
  return (
    <Center py={10}>
      <Spinner size="xl" />
    </Center>
  )
}
