import { UseFormSetError } from 'react-hook-form'

type ValidationErrors = {
    errors: {
        value: string
        msg: string
        param: string
        location: string
    }[]
}

export const setValidationErrors = async <T extends object,>(data: T, response: Response, setError: UseFormSetError<T>) => {
    const validation: ValidationErrors = await response.json()
    const formFields = Object.keys(data)

    validation.errors.map((e, index) => {
        type SetErrorParams = Parameters<typeof setError>
        type FirstParam = SetErrorParams[0]

        if (formFields.some(f => f == e.param)) {
            setError(e.param as FirstParam, {
                type: "manual",
                message: e.msg
            },
            { shouldFocus: index == 0 })
        }
    })
}