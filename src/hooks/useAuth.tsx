import authService from "@/services/authService"
import { useQuery } from "@tanstack/react-query"

export const useAuth = () => {

    const token = localStorage.getItem("AUTH_TOKEN")
    const { data, isLoading, isError } = useQuery({
        queryKey: ["user"],
        queryFn: () => authService.getUser(),
        enabled: !!token
    })

    return { data, isLoading, isError }
}