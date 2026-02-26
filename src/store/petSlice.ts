
import { Pet, PetFilters } from "@/types/pet";
import animalService from "@/services/animalService";

export const petSlice = (set, get) => ({
  pets: [] as Pet[],
  editPet: null as Pet | null,
  filters: {
    type: "all",
    age: "all",
    size: "all",
    location: "all",
  } as PetFilters,
  fetchPets: async () => {
    const data = await animalService.getAllAnimals()
    set(() => {
      return { pets: data.data }
    })
  },
  addPet: async (petData) => {
    const response = await animalService.addAnimal(petData);
    await get().fetchPets();
    localStorage.setItem("userLogin", JSON.stringify(response.data.user));
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
  setEditPet: (pet) => set({ editPet: pet }),
  updatePet: async ({ id, petData }) => {
    const data = await animalService.updateAnimal(id, petData)
    return data.status;
  },
  deletePet: async (id) => {
    const data = await animalService.deleteAnimal(id);
    await get().fetchPets();
    return data.status;
  },
  toggleFavorite: async (animalId, favorite, idUsuario) => {
    const data = await animalService.toggleFavorite(animalId, favorite, idUsuario)
    await get().getActualUser(idUsuario);
    return data
  }
});
