import animalService from "@/services/animalService"
import { useQuery } from "@tanstack/react-query"

export const useGetPets = () => {
    const { data: pets, isLoading, isError } = useQuery({
        queryKey: ["pets"],
        queryFn: () => animalService.getAllAnimals()
    })

    return { pets, isLoading, isError }
}