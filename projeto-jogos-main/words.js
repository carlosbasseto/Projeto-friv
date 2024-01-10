const words = [
  { word: "abacaxi", clue: "Fruta" },
  { word: "elefante", clue: "Animal" },
  { word: "computador", clue: "Eletrônico" },
  { word: "chocolate", clue: "Doce" },
  { word: "piano", clue: "Instrumento musical" },
  { word: "tigre", clue: " Animal" },
  { word: "carro", clue: "Meio de trasporte" },
  { word: "Celular", clue: "Eletrônico" },
  { word: "sorvete", clue: "Doce" },
  { word: "bicicleta", clue: "Eletrônico" },
  { word: "avião", clue: "Meio de transporte" },
  { word: "macaco", clue: "Animal" },
  { word: "Lanterna", clue: "Iluminação" },
  { word: "Cachorro ", clue: "Criaturas Animal" },
  { word: "Futebol  ", clue: " Esporte" },
  { word: "Guitarra  ", clue: "Instrumento musical" },
  { word: "Banana  ", clue: "Fruta" },
  { word: "Brasil  ", clue: "País" },
  { word: "Girafa  ", clue: "Animal" },
  { word: "Abóbora  ", clue: "fruta" },
];

export default function getWord() {
  const forca = Math.floor(Math.random() * words.length);
  return words[forca];
}