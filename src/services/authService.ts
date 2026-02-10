import { api } from "@/lib/axios";
import { isAxiosError } from "axios";

export class AuthService {
    private authBase = import.meta.env.VITE_API_ROUTE_AUTH;

    async createAccount(userData: any) {
        try {
            const url = this.authBase + "/create-account";
            const data = await api.post(url, userData);
            return data;
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.error);
            }
            throw error;
        }
    }

    async loginUser(userData: any) {
        try {
            const url = this.authBase + "/login";
            const data = await api.post(url, userData);
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