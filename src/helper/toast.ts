import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true
})

export const toastSuccess = (title: string, text?: string) => {
    Toast.fire({
        icon: "success",
        title,
        text
    })
}


export const toastError = (title: string, text?: string) => {
    Toast.fire({
        icon: "error",
        title,
        text
    })
}

export const toastInfo = (title: string, text?: string) => {
    Toast.fire({
        icon: "info",
        title,
        text
    })
}