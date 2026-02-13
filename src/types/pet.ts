import { ProvinciaArgentina } from "@/helper";
import { User } from "./user";

export type PetType = "dog" | "cat";
export type PetSize = "small" | "medium" | "large";
export type PetAge = "puppy" | "young" | "adult" | "senior";
export type PetLocation = ProvinciaArgentina

export interface Pet {
  _id: string;
  name: string;
  type: PetType;
  breed: string;
  age: PetAge;
  size: PetSize;
  description: string;
  imageUrl: string;
  location: PetLocation;
  createdAt: Date;
  updatedAt: Date;
  user: User["_id"];
}

export interface PetFilters {
  type: PetType | "all";
  age: PetAge | "all";
  size: PetSize | "all";
  location: PetLocation | "all";
}

export type AddPetData = Omit<Pet, "createdAt" | "updatedAt" | "_id">;