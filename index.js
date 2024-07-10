// Funkce, která spočítá průměr ze dvou čísel:
var average = function (x, y) { return (x + y) / 2; };
// Funkce, která zjistí, zda je zadaný řetězec prázdný:
var isEmpty = function (input) { return input === ""; };
// Funkce, která odstraní z řetězce všechny nečíselné znaky a zkrátí jej na 16 znaků. Tato funkce se nám bude velmi hodit ve cvičení v příští lekci.
var filterNonDigits = function (value) {
    return value.replace(/\D/g, '').slice(0, 16);
};
// Funkce, která zjistí, zda zadaný řetězec začíná číslem v rozsahu od 100 do 999. Také bude potřeba v příští lekci.
var startsWith = function (value, min, max) {
    var digits = min.toString().length;
    var start = parseInt(value.slice(0, digits));
    return start >= min && start <= max;
};
