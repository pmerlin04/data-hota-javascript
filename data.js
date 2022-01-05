var b1 = document.getElementById('botao')
var resp = document.getElementById('res')

function calcular(){
    var data = new Date();
    var dia = data.getDate();
    var semana = data.getDay();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    resp.innerText = `Dia: ${dia}\n`
    switch(semana){
        case 1:
        resp.innerText += `Semana: Segunda-feira\n`
    break;
        case 2:
        resp.innerText += `Semana: Terça-feira\n`
    break;
        case 3:
        resp.innerText += `Semana: Quarta-feira\n`
    break;
        case 4:
        resp.innerText += `Semana: Quinta-feira\n`
    break;
        case 5:
         resp.innerText += `Semana: Sexta-feira\n`
    break;
        case 6:
        resp.innerText += `Semana: Sabado\n`
    break;
        case 7:
         resp.innerText += `Semana: Domingo\n`
    break
    }
    
    resp.innerText += `Mês: ${mes}\n`
    resp.innerText += `Ano: ${ano}\n`
    resp.innerText += `Hora: ${hora}\n`
    resp.innerText += `Minutos: ${min}\n`
    resp.innerText += `Segundos: ${seg}`
    

    
}