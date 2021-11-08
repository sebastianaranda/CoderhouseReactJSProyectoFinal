export default function validateInfo(values) {
    let errors = {}

    if (!values.firstNameUser.trim()) {
        errors.firstNameUser = 'Debe ingresar un nombre'
    }

    if (!values.lastNameUser.trim()) {
        errors.lastNameUser = 'Debe ingresar un apellido'
    }

    if (!values.emailUser) {
        errors.emailUser = 'Debe ingresar un email'
    } else if (!/\S+@\S+\.\S+/.test(values.emailUser)) {
        errors.emailUser = 'El email no es valido';
    }

    if (!values.phoneUser.trim()) {
        errors.phoneUser = 'Debe ingresar un telefono'
    }

    if (!values.addressUser.trim()) {
        errors.addressUser = 'Debe ingresar una direccion'
    }

    if (!values.cityUser.trim()) {
        errors.cityUser = 'Debe ingresar una ciudad'
    }

    if (!values.postalCodeUser.trim()) {
        errors.postalCodeUser = 'Codigo Postal obligatorio'
    }

    if (!values.stateUser.trim()) {
        errors.stateUser = 'Debe ingresar una provincia'
    }
    return errors;
}