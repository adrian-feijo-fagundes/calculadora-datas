const calcular = () => {
    const d1 = document.getElementById("date1").value;
    const d2 = document.getElementById("date2").value;
    const result = document.getElementById("result");

    if (!d1 || !d2) {
        result.textContent = "Por favor, selecione as duas datas.";
        return;
    }
    let data1 = new Date(d1);
    let data2 = new Date(d2);
    if (data1 > data2) {
        // garante que data1 seja sempre a menor
        [data1, data2] = [data2, data1];
    }
    let anos = data2.getFullYear() - data1.getFullYear();
    let meses = data2.getMonth() - data1.getMonth();
    let dias = data2.getDate() - data1.getDate();
    // Ajuste de dias
    if (dias < 0) {
        meses--;
        // pegar dias do mês anterior
        let ultimoDiaMesAnterior = new Date(data2.getFullYear(), data2.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    // Ajuste de meses
    if (meses < 0) {
        anos--;
        meses += 12;
    }
    result.innerHTML = `
        Diferença exata: <br>
        ${anos} ano(s), ${meses} mes(es), ${dias} dia(s).
    `;
}

document.getElementById('calc-btn').addEventListener('click', calcular)



const data = new Date(2025, 9, 1, 0, 0, 0); 
    //  Lembrando: mês é 0-11 (11 = dezembro)

    function atualizarContagem() {
        const agora = new Date();
        const diff = data - agora;

        const timerDiv = document.getElementById("timer");

        if (diff <= 0) {
            timerDiv.textContent = "🎉 Feliz Natal!";
            clearInterval(interval);
            return;
    }

        const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);

        timerDiv.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s restantes`;
    }

atualizarContagem(); // chama já na primeira vez
const interval = setInterval(atualizarContagem, 1000);
