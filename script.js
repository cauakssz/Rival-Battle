function mostrarTela(id) {
    document
        .querySelectorAll(".tela")
        .forEach((tela) => tela.classList.remove("ativa"));
    document.getElementById(id).classList.add("ativa");
}

function escolher(choice) {
    let pokemons = {
        1: "Bulbasauro",
        2: "Charmander",
        3: "Squirtle",
      };
  
const fraquezas = {
        Bulbasauro: ["Charmander"],
        Charmander: ["Squirtle"],
        Squirtle: ["Bulbasauro"],
     };
  
//escolhaJogador = prompt("Escolha seu Pókemon: 1-Bulbasauro, 2-Charmander ou 3-Squirtle");//
 const escolhaPc = Math.floor(Math.random() * 3) + 1;
  let rival = pokemons[escolhaPc];
    let escolhaJogador = pokemons[choice];
  
  let resultado = `O Rival escolheu: ${rival}\n`;
  
    if (
        fraquezas[escolhaJogador] &&
        fraquezas[escolhaJogador].includes(rival)
    ) {
        resultado += `\nVOCÊ PERDEU!\nO ${rival} do Rival foi super efetivo contra o seu${escolhaJogador}!\nRival: Hahahaha isso é tudo que tem? Levante-se e lute!!`;
      
    } else if (fraquezas[rival] && fraquezas[rival].includes(escolhaJogador)) {
        resultado += `\nVOCÊ VENCEU!\nO seu ${escolhaJogador} foi super efetivo contra o ${rival} do Rival!\nRival: Não fique se achando porque teve sorte, vamos novamente!`;
      
    } else {
        resultado += "\EMPATOU!!!\nAmbos os Pókemons estão fora de combate!\nRival: Grrr! Agora vou batalhar serio!!.";
    }
  
document.getElementById("resultado").innerText = resultado;
mostrarTela("tela2"); }
    