import type {ToastMessageOptions} from "primevue";

export function toStandardError(err: any): ToastMessageOptions {
        if (err.hasOwnProperty("response") && err.response.hasOwnProperty("data")
                && err.response.data.hasOwnProperty("message") && err.response.data.hasOwnProperty("summary"))
                return {
                        summary: err.response.data.summary,
                        detail: err.response.data.message,
                        severity: "error"
                }

        if (err.hasOwnProperty("message") && err.hasOwnProperty("name"))
                return {
                        summary: err.name,
                        detail: err.message,
                        severity: "error"
                }

        console.warn("The value passed for error does not resemble any known error type. Are you sure that this is the correct behaviour?")

        return {
                summary: "Unknown error",
                detail: "An unknown error occurred.",
                severity: "error"
        }
}