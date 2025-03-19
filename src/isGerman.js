function isGerman() {
    if (navigator.language == "de-DE") {
        return true;
    } else {
        return false;
    }
}

export default isGerman;