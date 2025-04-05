const btn = document.querySelector("#btn");
const audioId = "myAudio"; // ID do elemento de áudio
const telaId = "tela1"; // ID da tela que você quer mostrar
const telaId2 = "tela2"; // ID da tela que você quer que pare a musica
const audio = document.getElementById(audioId); // Obtém o elemento de áudio

const btn2 = document.querySelector("#btn2");
    const audioId2 = "click";
const telaId3 = "tela2" ; // ID da tela que você quer mostrar
  const telaId4 = "tela0" // ID da tela que você quer que pare a musica
  const audio2 = document.getElementById(audioId2); // Obtém o elemento de áudio




function myAudio(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.loop = true;
    // Define o loop como verdadeiro
    audio.play();
  } else {
    console.error("Audio element with id '" + id + "' not found.");
  }
}

function click(id) {
    const audio2 = document.getElementById(id);
    if (audio2) {
        audio2.currentTime = 0.4677
      audio2.play();
    } else {
      console.error("Audio element with id '" + id + "' not found.");
    }
  }

function mostrarTela(id) {
  document
    .querySelectorAll(".tela")
    .forEach((tela) => tela.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
    if (id === telaId2) {
        audio.pause();
        audio.currentTime = 0; // Reseta o áudio para o início
    }
}

// Adiciona o evento de clique ao botão
btn.addEventListener("click", function() {
  myAudio(audioId);
  mostrarTela(telaId);
  
});

btn2.addEventListener("click", function() {
    click(audioId2);
    mostrarTela(tela0);
    
  });
  

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
  
    if (fraquezas[escolhaJogador] && fraquezas[escolhaJogador].includes(rival)) {
      resultado += `\nVOCÊ PERDEU!\nO ${rival} do Rival foi super efetivo contra o seu ${escolhaJogador}!\nRival: Hahahaha isso é tudo que tem? Levante-se e lute!!`;
      
    } else if (fraquezas[rival] && fraquezas[rival].includes(escolhaJogador)) {
      resultado += `\nVOCÊ VENCEU!\nO seu ${escolhaJogador} foi super efetivo contra o ${rival} do Rival!\nRival: Não fique se achando porque teve sorte, vamos novamente!`;
      
    } else {
      resultado += "\nEMPATOU!!!\nAmbos os Pókemons estão fora de combate!\nRival: Grrr! Agora vou batalhar serio!!.";
     
    }


    document.getElementById("resultado").innerText = resultado;
    mostrarTela("tela2"); }

