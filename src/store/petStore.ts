import { create } from "zustand";
import { AddPetData, Pet, PetFilters } from "@/types/pet";
import animalService from "@/services/animalService";
import { User } from "@/types/user";

interface PetStore {
  pets: Pet[];
  userLogin: User;
  filters: PetFilters;
  setUserLogin: (user: User) => void;
  fetchPets: () => Promise<void>;
  addPet: (pet: AddPetData) => Promise<number>;
  setFilters: (filters: Partial<PetFilters>) => void;
  fetchPetByID: (id: string) => Promise<Pet | undefined>;
}
const initalUserLogin = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") as string) : {} as User

export const usePetStore = create<PetStore>((set, get) => ({
  pets: [] as Pet[],
  userLogin: initalUserLogin as User,
  filters: {
    type: "all",
    age: "all",
    size: "all",
    location: "all",
  },
  setUserLogin: (user) => set(() => ({ userLogin: user })),
  fetchPets: async () => {
    const data = await animalService.getAllAnimals()
    set(() => {
      return { pets: data.data }
    })
  },
  addPet: async (petData) => {
    const response = await animalService.addAnimal(petData);
    await get().fetchPets();
    return response.status;
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  fetchPetByID: async (id) => {
    const data = await animalService.getAnimalById(id);
    if (data) {
      return data.data as Pet;
    }
  },
}));
