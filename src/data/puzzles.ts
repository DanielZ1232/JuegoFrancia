export const puzzles = {
  room1: {
    description: "Te encuentras en el imponente Hall Principal del Louvre. Las estatuas de mármol parecen observarte en la penumbra. Buscas la llave dorada escondida en algún lugar.",
    objects: [
      { id: 'statue', name: 'Estatua de la Victoria Alada', hasKey: false, message: 'Admiras la majestuosa estatua, pero no hay nada escondido en ella.' },
      { id: 'painting', name: 'Cuadro Misterioso', hasKey: false, message: 'El marco es hermoso, pero detrás solo hay polvo y telarañas.' },
      { id: 'clock', name: 'Reloj de pie antiguo', hasKey: false, message: 'El reloj marca las 3:00 AM. Aún tienes tiempo, pero no hay llaves aquí.' },
      { id: 'book', name: 'Libro Antiguo sobre un pedestal', hasKey: true, message: '¡Al abrir el libro, encuentras un compartimento secreto! Has hallado la llave dorada.' },
      { id: 'vase', name: 'Jarrón de porcelana', hasKey: false, message: 'Está vacío. Cuidado de no romperlo.' }
    ]
  },
  room2: {
    description: "Has entrado a la Gran Galería. Varios cuadros famosos están expuestos. Debes demostrar tu conocimiento sobre Francia para continuar.",
    questions: [
      {
        question: '¿Dónde se encuentra actualmente la Mona Lisa (La Gioconda)?',
        options: ['Museo d\'Orsay', 'Museo del Louvre', 'Palacio de Versalles', 'Centro Pompidou'],
        correct: 1
      },
      {
        question: '¿Qué monumento parisino fue construido para la Exposición Universal de 1889?',
        options: ['Arco del Triunfo', 'Catedral de Notre Dame', 'Torre Eiffel', 'Panteón'],
        correct: 2
      },
      {
        question: '¿Cuál fue el rey de Francia conocido como el "Rey Sol"?',
        options: ['Luis XIV', 'Luis XVI', 'Enrique IV', 'Napoleón Bonaparte'],
        correct: 0
      }
    ]
  },
  room3: {
    description: "Estás en la Biblioteca secreta. Hay miles de tomos antiguos, pero en el centro de la sala descansa una pesada caja fuerte con un candado de combinación de 4 dígitos.",
    clue: "Un nota antigua sobre la mesa dice: 'El año de la Revolución Francesa es la clave para la libertad'.",
    correctCode: "1789"
  },
  room4: {
    description: "El oscuro sótano está iluminado apenas por unas antorchas de luz LED. Frente a ti, una pesada puerta de acero bloquea el camino hacia el exterior. Para abrirla, debes activar tres interruptores antiguos en el orden correcto.",
    switches: [
      { id: 'switch1', name: 'Interruptor del Rey' },
      { id: 'switch2', name: 'Interruptor del Pueblo' },
      { id: 'switch3', name: 'Interruptor del Clero' }
    ],
    correctSequence: ['switch2', 'switch3', 'switch1'],
    clue: "La historia nos enseña el orden: Primero el pueblo se levanta, luego la fe intercede, y finalmente el rey cae."
  }
};
