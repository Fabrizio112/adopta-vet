export type PetType = "dog" | "cat";
export type PetSize = "small" | "medium" | "large";
export type PetAge = "puppy" | "young" | "adult" | "senior";

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed: string;
  age: PetAge;
  size: PetSize;
  description: string;
  image: string;
  location: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  createdAt: Date;
}

export interface PetFilters {
  type: PetType | "all";
  age: PetAge | "all";
  size: PetSize | "all";
}
