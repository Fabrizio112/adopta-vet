import { Pet, PetFilters } from "./pet";

type PetSliceProps = {
    filters: PetFilters;
    setFilters: (filters: Partial<PetFilters>) => void;
}

export type AppStore = PetSliceProps;