;
(function () {
    const $ = (query) => document.querySelector(query);
    function calcTempo(ms) {
        const min = Math.floor(ms / 60000);
        const sec = Math.floor(min % 60000 / 1000);
        return `${min}m e ${sec}s`;
    }
    ;
    function patio() {
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veiculo, salva) {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td><button class="delete" data-place="${veiculo.placa}">X</button></td>
            `;
            row.querySelector('.delete')?.addEventListener('click', function () {
                remover(this.dataset.placa);
            });
            $('#patio')?.appendChild(row);
            if (salva)
                salvar([...ler(), veiculo]);
        }
        function remover(placa) {
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (confirm(`o veiculo ${nome} permaneceu por ${tempo} Deseja encerrar ?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        ;
        function salvar(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function render() {
            $('#patio').innerHTML = '';
            const patio = ler();
            if (patio.length) {
                patio.forEach((veiculo) => adicionar(veiculo));
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    $('#cadastrar')?.addEventListener('click', () => {
        const nome = $('#nome')?.value ?? '';
        const placa = $('#placa')?.value ?? '';
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
        patio().render();
    });
})();
