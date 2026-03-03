import authService from "@/services/authService"
import { User } from "@/types/user"

const initalUserLogin = localStorage.getItem("userLogin") ? JSON.parse(localStorage.getItem("userLogin") as string) : null

export const userSlice = (set, get) => ({
    userLogin: initalUserLogin as User,
    setUserLogin: (data) => {
        set(() => ({ userLogin: data }))
    },
    getActualUser: async () => {
        const data = await authService.getUser()
        set(() => ({ userLogin: data.data }))
    }
})