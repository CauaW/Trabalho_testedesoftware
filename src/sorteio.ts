export function sortearNumero(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



export function sortearNumeroEntre1e100(): number {
    return sortearNumero(1, 100);
}

export function sortearNumerosUnicos(min: number, max: number, quantidade: number): number[] {
    if (quantidade > (max - min + 1)) {
        throw new Error('A quantidade de números únicos solicitada é maior do que o intervalo disponível.');
    }

    const numerosSorteados: number[] = [];
    while (numerosSorteados.length < quantidade) {
        const numero = sortearNumero(min, max);
        if (!numerosSorteados.includes(numero)) {
            numerosSorteados.push(numero);
        }
    }

    return numerosSorteados;
}
