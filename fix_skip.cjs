const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 7; i++) {
  const file = path.join('src', 'pages', `Room${i}.tsx`);
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');

  const regex = /  const handleSkip = \(\) => {[\s\S]*?};\n/m;

  const newHandleSkip = `  const handleSkip = () => {
    const allWc = questionBank.filter(q => q.isWorldCup);
    const availableWc = allWc.filter(q => !state.usedQuestions.includes(q.id));
    const pool = availableWc.length > 0 ? availableWc : allWc;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setQuestion(pool[randomIndex]);
    setHiddenOptions([]);
  };\n`;

  if (content.match(regex)) {
    content = content.replace(regex, newHandleSkip);
    fs.writeFileSync(file, content);
  }
}

// Also check FinalRoom.tsx
const finalFile = path.join('src', 'pages', 'FinalRoom.tsx');
if (fs.existsSync(finalFile)) {
  let finalContent = fs.readFileSync(finalFile, 'utf8');
  const regex = /  const handleSkip = \(\) => {[\s\S]*?};\n/m;
  if (finalContent.match(regex)) {
    finalContent = finalContent.replace(regex, `  const handleSkip = () => {
    const allWc = questionBank.filter(q => q.isWorldCup);
    const availableWc = allWc.filter(q => !state.usedQuestions.includes(q.id));
    const pool = availableWc.length > 0 ? availableWc : allWc;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setQuestion(pool[randomIndex]);
    setHiddenOptions([]);
  };\n`);
    fs.writeFileSync(finalFile, finalContent);
  }
}

console.log('Fixed handleSkip');
