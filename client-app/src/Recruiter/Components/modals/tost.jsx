
import { ToastContainer, toast } from 'react-toastify';


const successTost = (message, position = 'top-right', time = 5000) => {
    toast.success(message, {
        position: position,
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

const errorTost = (message, position = 'top-right', time = 5000) => {
    toast.error(message, {
        position: position,
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}



export { successTost ,errorTost}