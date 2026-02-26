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
            return { data: data.data, status: data.status };
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
    async updateAnimal(animalId: string, animalData: AddPetData) {
        try {
            const url = this.authBase + `/${animalId}`;
            const data = await api.put(url, animalData);
            return { data: data.data, status: data.status };
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
    async deleteAnimal(animalId: string) {
        try {
            const url = this.authBase + `/${animalId}`;
            const data = await api.delete(url);
            return { data: data.data, status: data.status };
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
    async toggleFavorite(animalId: string, isFavorite: boolean, userId: string) {
        const url = this.authBase + `/${animalId}/favorite`;

        if (isFavorite) {
            const response = await api.delete(url, {
                data: {
                    userId
                }
            });
            return response.data;
        } else {
            const response = await api.post(url, { userId });
            return response.data;
        }
    }

}

const animalService = new AnimalService();
export default animalService;