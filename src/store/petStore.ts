import { create } from "zustand";
import { Pet, PetFilters } from "@/types/pet";
import dog1 from "@/assets/pets/dog1.jpg";
import dog2 from "@/assets/pets/dog2.jpg";
import cat1 from "@/assets/pets/cat1.jpg";
import cat2 from "@/assets/pets/cat2.jpg";

interface PetStore {
  pets: Pet[];
  filters: PetFilters;
  addPet: (pet: Omit<Pet, "id" | "createdAt">) => void;
  setFilters: (filters: Partial<PetFilters>) => void;
  getFilteredPets: () => Pet[];
  getPetById: (id: string) => Pet | undefined;
}

const initialPets: Pet[] = [
  {
    id: "1",
    name: "Max",
    type: "dog",
    breed: "Golden Retriever",
    age: "puppy",
    size: "medium",
    description: "Un cachorro adorable y juguetón que ama estar con niños. Max es muy sociable y le encanta aprender trucos nuevos.",
    image: dog1,
    location: "Buenos Aires, Argentina",
    contactName: "María González",
    contactEmail: "maria@ejemplo.com",
    contactPhone: "+54 9 11 1234-5678",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    name: "Luna",
    type: "cat",
    breed: "Gato Atigrado",
    age: "young",
    size: "small",
    description: "Luna es una gatita cariñosa que busca un hogar tranquilo. Le encanta dormir en lugares cálidos y jugar con plumas.",
    image: cat1,
    location: "Córdoba, Argentina",
    contactName: "Juan Pérez",
    contactEmail: "juan@ejemplo.com",
    contactPhone: "+54 9 351 234-5678",
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    name: "Rocky",
    type: "dog",
    breed: "Husky Siberiano",
    age: "adult",
    size: "large",
    description: "Rocky es un perro activo que necesita mucho ejercicio. Ideal para familias aventureras que disfruten del aire libre.",
    image: dog2,
    location: "Rosario, Argentina",
    contactName: "Carlos Rodríguez",
    contactEmail: "carlos@ejemplo.com",
    contactPhone: "+54 9 341 234-5678",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "4",
    name: "Mimi",
    type: "cat",
    breed: "Gato Naranja",
    age: "adult",
    size: "small",
    description: "Mimi es una gata tranquila y cariñosa perfecta para apartamentos. Le gusta la compañía pero también valora su espacio.",
    image: cat2,
    location: "Mendoza, Argentina",
    contactName: "Laura Martínez",
    contactEmail: "laura@ejemplo.com",
    contactPhone: "+54 9 261 234-5678",
    createdAt: new Date("2024-02-05"),
  },
];

export const usePetStore = create<PetStore>((set, get) => ({
  pets: initialPets,
  filters: {
    type: "all",
    age: "all",
    size: "all",
  },
  addPet: (petData) =>
    set((state) => ({
      pets: [
        ...state.pets,
        {
          ...petData,
          id: Date.now().toString(),
          createdAt: new Date(),
        },
      ],
    })),
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  getFilteredPets: () => {
    const { pets, filters } = get();
    return pets.filter((pet) => {
      if (filters.type !== "all" && pet.type !== filters.type) return false;
      if (filters.age !== "all" && pet.age !== filters.age) return false;
      if (filters.size !== "all" && pet.size !== filters.size) return false;
      return true;
    });
  },
  getPetById: (id) => {
    const { pets } = get();
    return pets.find((pet) => pet.id === id);
  },
}));
