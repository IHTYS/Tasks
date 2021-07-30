function validate(pin){
    return /^(\d{4}|\d{6})$/.test(pin);
}
