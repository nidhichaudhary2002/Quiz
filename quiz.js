const questionObj = {
  category: 'Food & Drink',
  id: 'qa-1',
  option: 'Three',
  answers: ['Two', 'Three', 'Four', 'Five'],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { option, answers, question } = questionObj;
console.log(option);

let ques = document.getElementById('question');
let options = document.getElementById('options');
let score = document.getElementById('score');

ques.textContent = question;
let points = 0;
score.textContent = `Score ${points}`;

for (let i = answers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [answers[i], answers[j]] = [answers[j], answers[i]];
}

answers.forEach((opt) => {
  let btn = document.createElement('button');
  btn.className = 'button';

  btn.textContent = opt;
  options.appendChild(btn);

  btn.addEventListener('click', () => {
    {
      if (opt === option) {
        points = points + 1;
      } else {
        points = points - 0.25;
      }
      score.textContent = `Score : ${points}`;

      options.remove();
      ques.textContent = 'Quiz Completed';
    }
  });
});

