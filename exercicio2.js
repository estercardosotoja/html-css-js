const valores = [5, 12, 8, 12, 7, 9, 3, 5, 20, 1];

for (let valor in valores) {
    console.log(valores[valor]);
}

for (const index, valor of valores.entries()) {
    console.log(index, valor);
};