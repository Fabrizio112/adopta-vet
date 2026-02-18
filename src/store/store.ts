import { create } from "zustand";
import { petSlice } from "./petSlice";
import { userSlice } from "./userSlice";
import { AppStore } from "@/types/store";

export const useAppStore = create<AppStore>()((set, get) => ({
    ...userSlice(set, get),
    ...petSlice(set, get)

}))