import { toastError, toastSuccess } from "@/helper/toast"
import animalService from "@/services/animalService"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useFavorites = () => {
    const queryClient = useQueryClient()

    const toggleFavorite = useMutation({
        mutationFn: (data: { animalId: string, isFavorite: boolean }) => animalService.toggleFavorite(data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["user"] })
            if (variables.isFavorite) {
                toastSuccess(
                    "Eliminado de favoritos 💔",
                    "La mascota se quitó de tus favoritos."
                )
            } else {
                toastSuccess(
                    "Añadido a favoritos ❤️",
                    "La mascota se guardó en tus favoritos."
                )
            }
        },
        onError: () => {
            toastError(
                "Error al actualizar favoritos",
                "Intenta nuevamente."
            )
        }
    })

    return {
        toggleFavorite
    }
}