import { useState, useEffect } from 'react'
import validateInfo from './validateInfo'

const useForm = validateInfo => {
    const [values, setValues] = useState({
        firstNameUser: '',
        lastNameUser: '',
        emailUser: '',
        phoneUser: '',
        addressUser: '',
        cityUser: '',
        postalCodeUser: '',
        stateUser: ''
    })

    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
        setSubmit(true)
    }

    return { handleChange, handleSubmit, values, errors, submit }
}

export default useForm;