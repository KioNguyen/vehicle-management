import { AppDataSource } from "../data-source";
import { Vechicle } from "../entity/Vehicles";

const getAllVechicles = async (limit = 4, offset = 1): Promise<any> => {
    const vechicles: Vechicle[] = await AppDataSource.getRepository(Vechicle)
        .createQueryBuilder("vechicle").skip(offset).take(limit).getMany();
    return vechicles || [];
};

export default { getAllVechicles };