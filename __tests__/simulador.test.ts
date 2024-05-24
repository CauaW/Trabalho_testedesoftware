import { sortearNumero, sortearNumeroEntre1e100 } from '../src/sorteio';

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
