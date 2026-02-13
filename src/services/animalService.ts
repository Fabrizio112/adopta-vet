import { api } from "@/lib/axios";
import { AddPetData } from "@/types/pet";
import { isAxiosError } from "axios";
export class AnimalService {
    private authBase = import.meta.env.VITE_API_ROUTE_ANIMALS;

    async getAllAnimals() {
        try {
            const url = this.authBase;
            const data = await api.get(url);
            return data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }

    async getAnimalById(animalId: string) {
        try {
            const url = this.authBase + `/${animalId}`;
            const data = await api.get(url);
            return data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
    async addAnimal(animalData: AddPetData) {
        try {
            const url = this.authBase;
            const data = await api.post(url, animalData);
            return data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
}

const animalService = new AnimalService();
export default animalService;