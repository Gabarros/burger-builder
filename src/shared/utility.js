export const updateObject = (oldObject, updatedPropertis) => {

    return{
        ...oldObject,
        ...updatedPropertis
    };
};

export const checkValidity = (value, rules) => {

    let isValid = true;

    if (!rules){
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLenght) {
        isValid = value.length <= rules.minLength && isValid;

    }
    return isValid;
}