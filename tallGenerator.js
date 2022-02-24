






//funksjon som hjelper oss med å finne tall
function tallGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //Max og min tallet er inkludert
}