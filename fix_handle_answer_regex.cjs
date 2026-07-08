const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 6; i++) {
  const file = path.join('src', 'pages', `Room${i}.tsx`);
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  const nextRoom = i === 7 ? '/final' : `/room${i+1}`;

  const regex = /  const handleAnswer = \(index: number\) => {\s+if \(!question\) return;\s+const isCorrect = index === question\.correctAnswerIndex;\s+answerQuestion\(isCorrect, question\.id, '\/room\d+'\);\s+if \(isCorrect\) {\s+navigate\('([^']+)'\);\s+}\s+};/m;

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

  content = content.replace(regex, newHandleAnswer);
  fs.writeFileSync(file, content);
}
console.log('Fixed handleAnswer in Room1-Room6 using regex');
