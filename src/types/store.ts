import { AddPetData, Pet, PetFilters } from "./pet";
import { User } from "./user";

type UserSliceProps = {
    userLogin: User;
    setUserLogin: (data: User) => void;
    getActualUser: () => Promise<void>;
}

type PetSliceProps = {
    pets: Pet[];
    editPet: Pet | null;
    filters: PetFilters;
    fetchPets: () => Promise<void>;
    addPet: (pet: AddPetData) => Promise<number>;
    setFilters: (filters: Partial<PetFilters>) => void;
    fetchPetByID: (id: string) => Promise<Pet | undefined>;
    setEditPet: (pet: Pet | null) => void;
    updatePet: (data: { id: string, petData: AddPetData }) => Promise<number>;
    deletePet: (id: string) => Promise<number>;
    toggleFavorite: (animalId: Pet["_id"], favorite: boolean) => Promise<{ message: string }>
}

export type AppStore = UserSliceProps & PetSliceProps;