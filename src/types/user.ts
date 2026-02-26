import { Pet } from "./pet";

export interface User {
    name: string,
    email: string,
    password: string,
    repeat_password: string
    telphone: string,
    _id: string,
    animals: Pet[],
    favorites: Pet[]
}

export type LoginData = Pick<User, "email" | "password">;
export type RegisterData = Pick<User, "name" | "email" | "password" | "repeat_password" | "telphone">;