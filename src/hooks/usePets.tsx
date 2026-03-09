import { toastError, toastSuccess } from "@/helper/toast"
import animalService from "@/services/animalService"
import { AddPetData } from "@/types/pet"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePets = () => {
    const queryClient = useQueryClient()

    const addPet = useMutation({
        mutationFn: (data: AddPetData) => animalService.addAnimal(data),
        onSuccess(data) {
            toastSuccess("Mascota agregada 🐶",
                "¡La mascota se ha agregado correctamente!")
            queryClient.invalidateQueries({ queryKey: ["user"] })
            queryClient.invalidateQueries({ queryKey: ["pets"] })
        },
        onError: () => {
            toastError("Error al agregar mascota",
                "Intenta nuevamente.")
        }
    })
    const editPet = useMutation({
        mutationFn: (data: { animalId: string, animalData: AddPetData }) => animalService.updateAnimal(data),
        onSuccess() {
            toastSuccess(
                "Mascota actualizada ✏️",
                "Los datos se actualizaron correctamente."
            )
            queryClient.invalidateQueries({ queryKey: ["user"] })
            queryClient.invalidateQueries({ queryKey: ["pets"] })
        },
        onError: () => {
            toastError(
                "Error al actualizar",
                "No se pudo actualizar la mascota."
            )
        }
    })
    const deletePet = useMutation({
        mutationFn: (data: string) => animalService.deleteAnimal(data),
        onSuccess(data) {
            toastSuccess(
                "Mascota eliminada 🗑️",
                "La mascota fue eliminada correctamente."
            )
            queryClient.invalidateQueries({ queryKey: ["user"] })
        },
        onError: () => {
            toastError(
                "Error al eliminar",
                "No se pudo eliminar la mascota."
            )
        }

    })
    return { addPet, editPet, deletePet }
}