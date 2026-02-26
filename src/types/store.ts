import { AddPetData, Pet, PetFilters } from "./pet";
import { User } from "./user";

type UserSliceProps = {
    userLogin: User;
    setUserLogin: (data: User) => void;
    getActualUser: (id: string) => Promise<void>;
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
    toggleFavorite: (animalId: Pet["_id"], favorite: boolean, idUsuario: User["_id"]) => Promise<number>
}

export type AppStore = UserSliceProps & PetSliceProps;