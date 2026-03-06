import animalService from "@/services/animalService"
import { Pet } from "@/types/pet"
import { useQuery } from "@tanstack/react-query"

export const usePet = (petId: Pet["_id"]) => {

    const { data: pet, isLoading, isError } = useQuery({
        queryKey: ["pet", petId],
        queryFn: () => animalService.getAnimalById(petId)
    })

    return {
        pet, isLoading, isError
    }
}