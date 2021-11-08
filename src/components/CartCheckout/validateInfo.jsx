export default function validateInfo(values) {
    let errors = {}

    if (!values.firstNameUser.trim()) {
        errors.firstNameUser = 'Name required'
    }

    if (!values.lastNameUser.trim()) {
        errors.lastNameUser = 'Last Name required'
    }

    if (!values.emailUser) {
        errors.emailUser = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.emailUser)) {
        errors.emailUser = 'Email address is invalid';
    }

    if (!values.phoneUser.trim()) {
        errors.phoneUser = 'Phone required'
    }

    if (!values.addressUser.trim()) {
        errors.addressUser = 'Address required'
    }

    if (!values.cityUser.trim()) {
        errors.cityUser = 'City required'
    }

    if (!values.postalCodeUser.trim()) {
        errors.postalCodeUser = 'PostalCode required'
    }

    if (!values.stateUser.trim()) {
        errors.stateUser = 'State required'
    }

    return errors;
}