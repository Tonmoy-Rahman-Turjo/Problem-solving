{
    function formatString(text, toUpper) {
        if (toUpper === void 0) { toUpper = true; }
        if (toUpper) {
            return text.toUpperCase();
        }
        else {
            return text.toLowerCase();
        }
    }
    console.log(formatString("Hello"));
}
