const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 6; i++) {
  const file = path.join('src', 'pages', `Room${i}.tsx`);
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  const nextRoom = i === 7 ? '/final' : `/room${i+1}`;

  const oldHandleAnswer = `  const handleAnswer = (index: number) => {
    if (!question) return;
    const isCorrect = index === question.correctAnswerIndex;
    answerQuestion(isCorrect, question.id, '${nextRoom}');
    if (isCorrect) {
       navigate('${nextRoom}');
    }
  };`;

  const newHandleAnswer = `  const handleAnswer = (index: number) => {
    if (!question || feedback) return;
    const isCorrect = index === question.correctAnswerIndex;
    
    if (isCorrect) {
      setFeedback('correct');
      setTimeout(() => {
        answerQuestion(true, question.id, '${nextRoom}');
        navigate('${nextRoom}');
      }, 2000);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback(null);
        answerQuestion(false, question.id, '${nextRoom}');
      }, 3000);
    }
  };`;

  content = content.replace(oldHandleAnswer, newHandleAnswer);
  fs.writeFileSync(file, content);
}
console.log('Fixed handleAnswer in Room1-Room6');
