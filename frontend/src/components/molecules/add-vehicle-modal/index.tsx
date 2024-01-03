import { BodyType, Brand, FuelType } from "@/api/graphql/generated/schema"
import RequireStar from "@/components/atoms/require-star"
import Select from "@/components/atoms/select"
import { Option } from "@/components/atoms/select/type"
import useCreateVehicle from "@/hooks/useCreateVehicle"
import { useApolloClient } from "@apollo/client"
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"

import { Controller, SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string
  description: string
  brand: Brand
  bodyType: BodyType
  fuelType: FuelType
  price: number
}

export function AddVehicleModal({ open, handleClose }: { open: boolean, handleClose: () => void }) {

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<Inputs>()

  const client = useApolloClient();

  const { mutate } = useCreateVehicle()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const vehicle = await mutate({
      name: data.name,
      description: data.description,
      brand: data.brand,
      bodyType: data.bodyType,
      fuelType: data.fuelType,
      price: parseFloat(data.price.toString())
    })
    if (vehicle) {
      handleOnClose();
      client.refetchQueries({ include: "active" })
    }

  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (open) {
      onOpen()
    } else {
      handleClose()
    }
    return () => handleClose()
  }, [open])
  const brandDataSource: Option[] = [...new Set(Object.values(Brand))].map((brand) => ({ label: brand, value: brand }))
  const bodyTypeDataSource: Option[] = [...new Set(Object.values(BodyType))].map((type) => ({ label: type, value: type }))
  const fuelTypeDataSource: Option[] = [...new Set(Object.values(FuelType))].map((type) => ({ label: type, value: type }))

  const handleOnClose = () => {
    onClose();
    handleClose();
    reset();
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Vehicle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction={"column"} rowGap={5}>
                <Controller
                  control={control}
                  name="name"
                  rules={{ required: "This field is required." }}
                  render={({ field: { ...props }, formState: { errors } }) => (
                    <FormControl isInvalid={Boolean(errors.name)}>
                      <FormLabel>Name<RequireStar /></FormLabel>
                      <Input placeholder='Input name' {...props} />
                      {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
                    </FormControl>
                  )}
                />
                <Controller
                  control={control}
                  name="brand"
                  rules={{ required: "This field is required." }}
                  render={({ field: { onChange, value } }) => (
                    <FormControl isInvalid={Boolean(errors.brand)}>
                      <FormLabel>Brand<RequireStar /></FormLabel>
                      <Select dataSource={brandDataSource} onChange={onChange} value={value} placeholder="Select Brand" />
                      {errors.brand && <FormErrorMessage>{errors.brand.message}</FormErrorMessage>}
                    </FormControl>
                  )}
                />
                <Controller
                  control={control}
                  name="bodyType"
                  rules={{ required: "This field is required." }}
                  render={({ field: { onChange, value } }) => (
                    <FormControl isInvalid={Boolean(errors.bodyType)}>
                      <FormLabel>Body Type<RequireStar /></FormLabel>
                      <Select dataSource={bodyTypeDataSource} onChange={onChange} value={value} placeholder="Select Brand" />
                      {errors.bodyType && <FormErrorMessage>{errors.bodyType.message}</FormErrorMessage>}
                    </FormControl>
                  )}
                />
                <Controller
                  control={control}
                  name="fuelType"
                  rules={{ required: "This field is required." }}
                  render={({ field: { onChange, value } }) => (
                    <FormControl isInvalid={Boolean(errors.fuelType)}>
                      <FormLabel>Fuel Type<RequireStar /></FormLabel>
                      <Select dataSource={fuelTypeDataSource} onChange={onChange} value={value} placeholder="Select Brand" />
                      {errors.fuelType && <FormErrorMessage>{errors.fuelType.message}</FormErrorMessage>}
                    </FormControl>
                  )}
                />
                <Controller
                  control={control}
                  name="price"
                  rules={{ required: "This field is required.", min: { value: 1, message: "Price should greater than 1." } }}
                  render={({ field: { onChange, value } }) => (
                    <FormControl isInvalid={Boolean(errors.price)}>
                      <FormLabel>Price<RequireStar /></FormLabel>
                      <NumberInput defaultValue={value} min={1} onChange={onChange}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      {errors.price && <FormErrorMessage>{errors.price.message}</FormErrorMessage>}
                    </FormControl>
                  )}
                />
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { ...props }, formState: { errors } }) => (
                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Textarea placeholder='Vehicle description' {...props} />
                    </FormControl>
                  )}
                />
              </Flex>

            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleOnClose}>Close</Button>
            <Button colorScheme='blue' ml={3} onClick={handleSubmit(onSubmit)}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}