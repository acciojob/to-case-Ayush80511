
function toCase(text) {
    if (text === "") {
        return "-";
    }

    return text.toLowerCase() + "-" + text.toUpperCase();
}

