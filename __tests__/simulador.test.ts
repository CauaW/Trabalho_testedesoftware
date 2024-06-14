import { sortearNumero, sortearNumeroEntre1e100, sortearNumerosUnicos } from '../src/sorteio';

describe('Testes para funções de sorteio', () => {
    test('sortearNumero deve retornar um número dentro do intervalo especificado', () => {
        const min = 1;
        const max = 100;
        const numeroSorteado = sortearNumero(min, max);
        expect(numeroSorteado).toBeGreaterThanOrEqual(min);
        expect(numeroSorteado).toBeLessThanOrEqual(max);
    });
 

    test('sortearNumeroEntre1e100 deve retornar um número dentro do intervalo de 1 a 100', () => {
        const numeroSorteado = sortearNumeroEntre1e100();
        console.log(`Número sorteado: ${numeroSorteado}`);
        expect(numeroSorteado).toBeGreaterThanOrEqual(1);
        expect(numeroSorteado).toBeLessThanOrEqual(100);
    });
});

test('sortearNumerosUnicos deve retornar a quantidade correta de números únicos dentro do intervalo especificado', () => {
    const min = 1;
    const max = 100;
    const quantidade = 5;
    const numerosSorteados = sortearNumerosUnicos(min, max, quantidade);
    expect(numerosSorteados.length).toBe(quantidade);
    expect(new Set(numerosSorteados).size).toBe(quantidade); // Verifica se todos os números são únicos
    numerosSorteados.forEach(numero => {
        expect(numero).toBeGreaterThanOrEqual(min);
        expect(numero).toBeLessThanOrEqual(max);
    });
});

test('sortearNumerosUnicos deve lançar um erro se a quantidade solicitada for maior que o intervalo disponível', () => {
    const min = 1;
    const max = 5;
    const quantidade = 10;
    expect(() => sortearNumerosUnicos(min, max, quantidade)).toThrow(Error);
});
