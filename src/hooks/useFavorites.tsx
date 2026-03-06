import animalService from "@/services/animalService"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useFavorites = () => {
    const queryClient = useQueryClient()

    const toggleFavorite = useMutation({
        mutationFn: (data: { animalId: string, isFavorite: boolean }) => animalService.toggleFavorite(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] })
        }
    })

    return {
        toggleFavorite
    }
}