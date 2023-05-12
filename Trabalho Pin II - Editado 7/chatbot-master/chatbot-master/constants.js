// Options the user could type in
const prompts = [
  ["como tirar print", "print", "foto da tela"],
  ["idiota"],
  ["Eu gosto de quem", "print", "gosto"],
  ["como ativar e desativar wifi", "wifi","internet", "estou sem internet", "como ativar internet", "dados moveis", "como acessar a internet",],
  ["impressora", "instalar impressora", "configuracoes de impressora","Dispositivos"],
  ["colocar senha no computador", "usuarios no computador", "usuarios", "conta de usuario", "login", "senhas","senha"],
  ["cookies", "permicao de cookies", "o que sao cookies", "cache", "memoria cache", ],
  ["oi", "oi", "ola", "bom dia", "boa tarde"],
  ["como vai voce", "como vai a vida", "como vão as coisas", "como vai", "como vai voce", "bom dia" ],
  ["o que voce esta fazendo", "o que esta acontecendo", "o que está acontecendo"],
  ["Quantos anos você tem"],
  ["quem é você", "você é humano", "você é bot", "você é humano ou bot"],
  ["quem te criou", "quem te fez"],
  [
    
"seu nome por favor",
"seu nome",
"posso saber o seu nome",
"qual é o seu nome",
"como se chama"
  ],
  ["Eu amo Você"],
  ["feliz", "bom", "divertido", "maravilhoso", "fantástico", "legal"],
  ["ruim", "entediado", "cansado"],
  ["me ajude", "me conte uma história", "me conte uma piada"],
  ["ah", "sim", "ok", "ok", "legal"],
  ["tchau", "tchau", "tchau", "até logo"],
  ["o que devo comer hoje"],
  ["Mano"],
  ["o que", "por que", "como", "onde", "quando"],
  ["nao","nao tenho certeza","talvez","nao obrigado"],
  [""],
  ["haha","ha","lol","hehe","engraçado","brincadeira"]
  

]

// Possible responses, in corresponding order

const replies = [
  ["Em sistemas IOS Iphoones, apertamos o botao de aumentar volume simultaneamente com botao de desligar. "],
  ["Rodrigo imbecil, vacilao, idiota, burro , retardado "],
  ["Renatinha sempre foi"],
  ["Para ativar a internet, verifique se o WIFI e a Rede Movel esta conectado, entre em configuraçoes, depois em Rede e Internet e verifique Para ativar.  "],
  ["No windows, abra o painel de controle, voce pode digitar na barra do meu iniciar e acesse dispositivos e impressora, lá voce ativar, configurar e controlar todos seus dispotivos do windows.    "],
  ["Para adicionar senha ou otros metodos de seguranca no seu computador, acesse configuracoes no iniciar, acesse contas, e entre em opcoes de entrada."],
  ["Cookies sao pedacos de codigo que dao a um site uma especie de memoria de curto prazo, permitindo que ele se lembre de pequenos pedacos de sua informacoes de navegaçao, como suas informacoes de login e preferencias de navegacao, para oferecer a voce uma experiencia mais personalizada"],
  ["Ola!", "Oi!", "Ei!", "Ola!", "Bom dia"],
  [ "Bem e voce?","Muito bem, como voce esta?",
    "Fantastico, como voce esta?"],
  [
    "Nada de mais",
    "A ponto de dormir",
    "Voce consegue adivinhar?",
    "Eu nao sei na verdade"
  ],
  ["Eu sou infinito"],
  ["Eu sou apenas um bot", "Eu sou um bot. O que você e?"],
  ["O único Deus verdadeiro, JavaScript"],
  ["Me chamo Will, Sou da Sateleti Assistencia", "Eu fui progamado  para a Satelite Assistencia"],
  ["Eu tambem te amo", "Eu tambem"],
  ["Voce já se sentiu mal?", "Fico feliz em ouvir isso"],
  ["Por que?", "Por quq? Voce nao deveria!", "Tente assistir TV"],
  ["E sobre?", "Era uma vez..."],
  ["Conte-me uma história", "Conte-me uma piada", "Conte-me sobre você"],
  ["Tchau", "Adeus", "Ate logo"],
  ["Sushi", "Pizza"],
  ["Irmao!"],
  ["Ótima pergunta"],
  ["Tudo bem","Eu entendo","O que você quer falar?"],
  ["Por favor, diga alguma coisa :("],
  ["Haha!","Boa!"]
]

// Random for any other user input

const alternative = [
  "mesmo",
  "continue",
  "Boa noite",
  "Nao Entendi",
  "Senhor?",
  "Tente Novamente",
  "Estou Ouvindo",
  "Eu nao entendi :/",
]

// Whatever else you want :)

const coronavirus = ["Por favor, fique em casa", "Use máscara", "Felizmente, não tenho COVID", "Estes são tempos incertos"]
const Print = ["Em sistemas ios, apertamos o botão de aumentar volume e em seguida e botão de desligar simultaneamente "]