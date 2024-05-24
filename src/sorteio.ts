export function sortearNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export function sortearNumeroEntre1e100(): number {
    return sortearNumero(1, 100);
}