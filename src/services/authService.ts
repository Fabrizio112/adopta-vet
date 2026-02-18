import { api } from "@/lib/axios";
import { LoginData, RegisterData } from "@/types/user";
import { isAxiosError } from "axios";
export class AuthService {
    private authBase = import.meta.env.VITE_API_ROUTE_AUTH;

    async createAccount(registerData: RegisterData) {
        try {
            const url = this.authBase + "/create-account";
            const data = await api.post(url, registerData);
            return data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }

    async loginUser(loginData: LoginData) {
        try {
            const url = this.authBase + "/login";
            const data = await api.post(url, loginData);
            return data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
    async getUser(userId: string) {
        try {
            const url = this.authBase + `/profile/${userId}`
            const data = await api.get(url);
            return data;

        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;