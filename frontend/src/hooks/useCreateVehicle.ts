import {
  CreateVehicleInput,
  useCreateVehicleMutation,
} from '@/api/graphql/generated/schema';
import { MESSAGE } from '@/constants';
import toast from 'react-hot-toast';

const useCreateVehicle = () => {
  const [createVehicle, { data, loading }] = useCreateVehicleMutation();
  const mutate = async (vehicleInput: CreateVehicleInput) => {
    const { errors, data } = await createVehicle({
      variables: vehicleInput,
    });
    if (errors?.length) {
      return {
        errorMessage: errors[0].message,
      };
    }
    toast.success(MESSAGE.SAVE_SUCCESS);
    return data;
  };

  return { mutate, data, loading };
};

export default useCreateVehicle;
