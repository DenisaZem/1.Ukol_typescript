// Funkce, která spočítá průměr ze dvou čísel:
const average = (x:number, y:number):number => (x + y) / 2;

// Funkce, která zjistí, zda je zadaný řetězec prázdný:
const isEmpty = (input:string):boolean => input === "";

// Funkce, která odstraní z řetězce všechny nečíselné znaky a zkrátí jej na 16 znaků. Tato funkce se nám bude velmi hodit ve cvičení v příští lekci.
const filterNonDigits = (value:string):string => {
  return value.replace(/\D/g, '').slice(0, 16);
};

// Funkce, která zjistí, zda zadaný řetězec začíná číslem v rozsahu od 100 do 999. Také bude potřeba v příští lekci.
const startsWith = (value:string, min:number, max:number):any => {
  const digits = min.toString().length;
  const start = parseInt(value.slice(0, digits));
  return start >= min && start <= max;
};