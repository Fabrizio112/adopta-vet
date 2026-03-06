import { create } from "zustand";
import { petSlice } from "./petSlice";
import { AppStore } from "@/types/store";

export const useAppStore = create<AppStore>()((set, get) => ({
    ...petSlice(set, get)
}))