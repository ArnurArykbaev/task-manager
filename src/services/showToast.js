import { app } from "@/main";

const makeToast = (message, title = "Error", variant = "danger") => {
    app.$bvToast.toast(message, {
        title: title,
        variant: variant,
        autoHideDelay: 5000,
        solid: true,
    });
}

export default makeToast