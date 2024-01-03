import { PaginatedItems } from '@/components/atoms/pagination'
import VehicleTable from '@/components/molecules/vehicles-table'
import { Flex } from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex direction={"column"} width={{ base: "100%" }}>
      <VehicleTable />
      <PaginatedItems />
    </Flex>
  )
}
