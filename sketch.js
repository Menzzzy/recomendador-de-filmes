let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(890, 600);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:"); 
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(0,60,90)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color("#00B384"));
  stroke("#00B384");
  textAlign(CENTER, CENTER);
  textSize(34);
  text(recomendacao, width / 2, height / 2);
  
  rect(0, 0, 35, 600)

  rect(0, 0, 890, 35)

  rect(855, 0, 35, 600)

  rect(0, 565, 890, 35)

}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
