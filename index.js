
// Definir minhas varriaveis

let jarra = 200;
let cafeteira = {
    po: true,
    agua: true,
    ligada: true,
    cafe_pronto: true
}

let xicara = 0;

// Fazer Café

if(jarra < 100) {
    // preciso fazer café

    console.log("Fazendo Café quentinho");

    if (cafeteira.po == false){
        cafeteira.po = true;
    }

    if (cafeteira.agua == false){
        cafeteira.agua = true;
    }

    if (cafeteira.ligada == false){
        cafeteira.ligada = true;
    }

    cafeteira.cafe_pronto = true;
    jarra=100;

   

} else if (xicara == 0){  // Tomar Café

    // encher minha xicara
    if(cafeteira.cafe_pronto){
        xicara = 100;
        jarra -=  100;
    }
    console.log("Café quentinho na xicara, que tal um golinho de felicidade")

} else if(jarra > 100){ // Jarra Derramando

    // alerta de jarra derramando
    cafeteira.ligada = false;
    console.log("A jarra esta cheia d+++, cuidado!")

} else {  // Manter quente

    // aqyecer café
    cafeteira.ligada = true;
    console.log("Estamo mantendo o seu Café quentinho!")

}

