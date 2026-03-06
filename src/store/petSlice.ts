
import { Pet, PetFilters } from "@/types/pet";
import animalService from "@/services/animalService";

export const petSlice = (set, get) => ({
  filters: {
    type: "all",
    age: "all",
    size: "all",
    location: "all",
  } as PetFilters,
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    }))
});
