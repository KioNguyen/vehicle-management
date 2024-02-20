import { AddVehicleModal } from '@/components/molecules/add-vehicle-modal'
import VehicleTable from '@/components/molecules/vehicles-table'
import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'


export default function Home() {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false)
  return (<>

    <Flex direction={"column"} width={{ base: "100%" }} flexDir={"row-reverse"} >
      <Button colorScheme='teal' variant='solid' onClick={() => setOpenAddModal(true)} mr="15" my="15">
        Create
      </Button>
    </Flex>
    <Flex direction={"column"} width={{ base: "100%" }}>
      <VehicleTable />
      <AddVehicleModal open={openAddModal} handleClose={() => setOpenAddModal(false)} />
    </Flex>
  </>
  )
}
