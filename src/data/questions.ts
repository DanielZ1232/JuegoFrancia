import type { Question } from '../types';

export const questionBank: Question[] = [
  // --- LEVEL 1: Very Easy ---
  {
    id: 'l1_1',
    text: '¿Quién pintó la Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
    correctAnswerIndex: 1,
    level: 1,
  },
  {
    id: 'l1_2',
    text: '¿Qué planeta del sistema solar es conocido como el "Planeta Rojo"?',
    options: ['Venus', 'Marte', 'Júpiter', 'Saturno'],
    correctAnswerIndex: 1,
    level: 1,
  },
  {
    id: 'l1_3',
    text: '¿Cuál es el océano más grande del mundo?',
    options: ['Atlántico', 'Índico', 'Ártico', 'Pacífico'],
    correctAnswerIndex: 3,
    level: 1,
  },
  {
    id: 'l1_4',
    text: '¿De qué colores es la bandera de Francia?',
    options: ['Verde, Blanco, Rojo', 'Azul, Blanco, Rojo', 'Negro, Rojo, Oro', 'Blanco, Azul, Rojo'],
    correctAnswerIndex: 1,
    level: 1,
  },
  
  // --- LEVEL 2: Easy ---
  {
    id: 'l2_1',
    text: '¿En qué año llegó el hombre a la Luna?',
    options: ['1965', '1969', '1971', '1959'],
    correctAnswerIndex: 1,
    level: 2,
  },
  {
    id: 'l2_2',
    text: '¿Quién escribió "Don Quijote de la Mancha"?',
    options: ['Gabriel García Márquez', 'Miguel de Cervantes', 'Lope de Vega', 'Jorge Luis Borges'],
    correctAnswerIndex: 1,
    level: 2,
  },
  {
    id: 'l2_3',
    text: '¿Qué ciudad es conocida como "La ciudad que nunca duerme"?',
    options: ['Londres', 'Nueva York', 'Tokio', 'París'],
    correctAnswerIndex: 1,
    level: 2,
  },
  {
    id: 'l2_4',
    text: '¿Cuál es el río más largo del mundo?',
    options: ['Amazonas', 'Nilo', 'Yangtsé', 'Misisipi'],
    correctAnswerIndex: 0,
    level: 2,
  },

  // --- LEVEL 3: Medium ---
  {
    id: 'l3_1',
    text: '¿Qué país donó la Estatua de la Libertad a los Estados Unidos?',
    options: ['Reino Unido', 'Francia', 'España', 'Italia'],
    correctAnswerIndex: 1,
    level: 3,
  },
  {
    id: 'l3_2',
    text: '¿En qué país se encuentra la antigua ciudad de Petra?',
    options: ['Egipto', 'Jordania', 'Israel', 'Irak'],
    correctAnswerIndex: 1,
    level: 3,
  },
  {
    id: 'l3_3',
    text: '¿Cuál es el elemento químico más abundante en el universo?',
    options: ['Oxígeno', 'Carbono', 'Helio', 'Hidrógeno'],
    correctAnswerIndex: 3,
    level: 3,
  },
  {
    id: 'l3_4',
    text: '¿Quién compuso la ópera "La flauta mágica"?',
    options: ['Beethoven', 'Bach', 'Mozart', 'Wagner'],
    correctAnswerIndex: 2,
    level: 3,
  },

  // --- LEVEL 4: Hard ---
  {
    id: 'l4_1',
    text: '¿Quién fue el primer ser vivo en viajar al espacio exterior?',
    options: ['Yuri Gagarin', 'Laika', 'Albert II', 'Tereshkova'],
    correctAnswerIndex: 1,
    level: 4,
  },
  {
    id: 'l4_2',
    text: 'En física, ¿qué partícula subatómica fue descubierta por J.J. Thomson en 1897?',
    options: ['Protón', 'Neutrón', 'Electrón', 'Positrón'],
    correctAnswerIndex: 2,
    level: 4,
  },
  {
    id: 'l4_3',
    text: '¿En qué batalla fue derrotado definitivamente Napoleón Bonaparte?',
    options: ['Austerlitz', 'Waterloo', 'Trafalgar', 'Leipzig'],
    correctAnswerIndex: 1,
    level: 4,
  },
  {
    id: 'l4_4',
    text: '¿Qué emperador romano legalizó el cristianismo mediante el Edicto de Milán?',
    options: ['Nerón', 'Julio César', 'Constantino I', 'Augusto'],
    correctAnswerIndex: 2,
    level: 4,
  },

  // --- LEVEL 5: Very Hard ---
  {
    id: 'l5_1',
    text: '¿En qué año cayó el Imperio Romano de Occidente?',
    options: ['476 d.C.', '1453 d.C.', '395 d.C.', '1492 d.C.'],
    correctAnswerIndex: 0,
    level: 5,
  },
  {
    id: 'l5_2',
    text: '¿Cuál es la obra literaria más antigua que se conserva casi completa?',
    options: ['El Libro de los Muertos', 'El Poema de Gilgamesh', 'La Ilíada', 'El Código de Hammurabi'],
    correctAnswerIndex: 1,
    level: 5,
  },
  {
    id: 'l5_3',
    text: '¿Quién pintó "El jardín de las delicias"?',
    options: ['Sandro Botticelli', 'El Bosco', 'Diego Velázquez', 'Jan van Eyck'],
    correctAnswerIndex: 1,
    level: 5,
  },
  {
    id: 'l5_4',
    text: '¿Qué filósofo escribió "Crítica de la razón pura"?',
    options: ['Friedrich Nietzsche', 'Immanuel Kant', 'René Descartes', 'Arthur Schopenhauer'],
    correctAnswerIndex: 1,
    level: 5,
  },

  // --- LEVEL 6: Expert ---
  {
    id: 'l6_1',
    text: '¿En qué país actual se desarrolló la civilización de Elam?',
    options: ['Irán', 'Irak', 'Turquía', 'Egipto'],
    correctAnswerIndex: 0,
    level: 6,
  },
  {
    id: 'l6_2',
    text: '¿Qué instrumento astronómico inventó Hiparco de Nicea?',
    options: ['Telescopio', 'Astrolabio', 'Brújula', 'Sextante'],
    correctAnswerIndex: 1,
    level: 6,
  },
  {
    id: 'l6_3',
    text: '¿Cuál es la capital de Kazajistán (nombre actual)?',
    options: ['Almatý', 'Astaná', 'Taskent', 'Asjabad'],
    correctAnswerIndex: 1,
    level: 6,
  },
  {
    id: 'l6_4',
    text: '¿Cuál es el único mamífero capaz de volar activamente?',
    options: ['Ardilla voladora', 'Murciélago', 'Colugo', 'Petauro del azúcar'],
    correctAnswerIndex: 1,
    level: 6,
  },

  // --- LEVEL 7: Master ---
  {
    id: 'l7_1',
    text: '¿Qué dinastía gobernaba China durante la construcción de la Ciudad Prohibida?',
    options: ['Dinastía Qing', 'Dinastía Han', 'Dinastía Ming', 'Dinastía Tang'],
    correctAnswerIndex: 2,
    level: 7,
  },
  {
    id: 'l7_2',
    text: '¿Quién fue el arquitecto principal de la Basílica de San Pedro en sus primeras fases?',
    options: ['Miguel Ángel', 'Donato Bramante', 'Gian Lorenzo Bernini', 'Rafael Sanzio'],
    correctAnswerIndex: 1,
    level: 7,
  },
  {
    id: 'l7_3',
    text: 'En la mitología nórdica, ¿cómo se llama el lobo gigante que devora a Odín en el Ragnarök?',
    options: ['Jörmungandr', 'Fenrir', 'Sleipnir', 'Garmr'],
    correctAnswerIndex: 1,
    level: 7,
  },
  {
    id: 'l7_4',
    text: '¿Cuál es el elemento con número atómico 79 en la tabla periódica?',
    options: ['Plata', 'Platino', 'Mercurio', 'Oro'],
    correctAnswerIndex: 3,
    level: 7,
  },


  // --- World Cup Questions (Jokers) ---
  {
    id: 'wc1',
    text: '¿Qué país ganó el primer Mundial de Fútbol en 1930?',
    options: ['Brasil', 'Argentina', 'Uruguay', 'Alemania'],
    correctAnswerIndex: 2,
    isWorldCup: true,
  },
  {
    id: 'wc2',
    text: '¿Quién es el máximo goleador histórico de los Mundiales?',
    options: ['Miroslav Klose', 'Pelé', 'Ronaldo Nazário', 'Lionel Messi'],
    correctAnswerIndex: 0,
    isWorldCup: true,
  },
  {
    id: 'wc3',
    text: '¿Qué país ha ganado la mayor cantidad de Copas del Mundo?',
    options: ['Italia', 'Alemania', 'Argentina', 'Brasil'],
    correctAnswerIndex: 3,
    isWorldCup: true,
  },
  {
    id: 'wc4',
    text: '¿En qué año ganó España su primer Mundial?',
    options: ['2006', '2010', '2014', '1998'],
    correctAnswerIndex: 1,
    isWorldCup: true,
  },
  {
    id: 'wc5',
    text: '¿Qué jugador famoso hizo el gol de "La Mano de Dios"?',
    options: ['Pelé', 'Zinedine Zidane', 'Diego Maradona', 'Johan Cruyff'],
    correctAnswerIndex: 2,
    isWorldCup: true,
  },
  {
    id: 'wc6',
    text: '¿Dónde se celebró el Mundial de 2022?',
    options: ['Rusia', 'Sudáfrica', 'Qatar', 'Brasil'],
    correctAnswerIndex: 2,
    isWorldCup: true,
  },
  {
    id: 'wc7',
    text: '¿Quién ganó el premio al Mejor Jugador (Balón de Oro) en el Mundial 2022?',
    options: ['Kylian Mbappé', 'Lionel Messi', 'Luka Modric', 'Emiliano Martínez'],
    correctAnswerIndex: 1,
    isWorldCup: true,
  },
  {
    id: 'wc8',
    text: '¿Qué país eliminó a Brasil en el Mundial de 2014 con un histórico 7-1?',
    options: ['Argentina', 'Francia', 'Holanda', 'Alemania'],
    correctAnswerIndex: 3,
    isWorldCup: true,
  },
  {
    id: 'wc9',
    text: '¿Quién levantó la copa como capitán de Argentina en Qatar 2022?',
    options: ['Ángel Di María', 'Nicolás Otamendi', 'Lionel Messi', 'Emiliano Martínez'],
    correctAnswerIndex: 2,
    isWorldCup: true,
  },
  {
    id: 'wc10',
    text: '¿Qué país organizó el Mundial de Fútbol en 1998?',
    options: ['Italia', 'Francia', 'Corea y Japón', 'Estados Unidos'],
    correctAnswerIndex: 1,
    isWorldCup: true,
  }
];
