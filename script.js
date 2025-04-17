const questions = [
  {
    question: "Какая страна имеет наибольшее количество часовых поясов?",
    options: ["Россия", "США", "Франция", "Канада"],
    answer: "Франция"
  },
  {
    question: "Какая река самая длинная в мире?",
    options: ["Амазонка", "Янцзы", "Нил", "Миссисипи"],
    answer: "Нил"
  },
  {
    question: "Столица Канады?",
    options: ["Торонто", "Оттава", "Монреаль", "Ванкувер"],
    answer: "Оттава"
  },
  {
    question: "Самое солёное море в мире?",
    options: ["Красное", "Мёртвое", "Каспийское", "Аравийское"],
    answer: "Мёртвое"
  },
  {
    question: "Самая высокая точка Европы?",
    options: ["Монблан", "Эльбрус", "Маттерхорн", "Гросглокнер"],
    answer: "Эльбрус"
  },
  {
    question: "Какая страна полностью расположена в Альпах?",
    options: ["Швейцария", "Австрия", "Лихтенштейн", "Словения"],
    answer: "Лихтенштейн"
  },
  {
    question: "Какой океан самый глубокий?",
    options: ["Тихий", "Индийский", "Атлантический", "Северный Ледовитый"],
    answer: "Тихий"
  },
  {
    question: "Какая страна не имеет выхода к морю?",
    options: ["Греция", "Польша", "Украина", "Швейцария"],
    answer: "Швейцария"
  },
  {
    question: "Столица Новой Зеландии?",
    options: ["Окленд", "Веллингтон", "Крайстчерч", "Гамильтон"],
    answer: "Веллингтон"
  },
  {
    question: "Самое большое озеро по площади?",
    options: ["Байкал", "Каспийское море", "Виктория", "Верхнее"],
    answer: "Каспийское море"
  },
  {
    question: "Где находится пустыня Сахара?",
    options: ["Африка", "Азия", "Австралия", "Южная Америка"],
    answer: "Африка"
  },
  {
    question: "Какой остров считается самым большим?",
    options: ["Борнео", "Гренландия", "Новая Гвинея", "Мадагаскар"],
    answer: "Гренландия"
  },
  {
    question: "Какая страна находится в двух полушариях?",
    options: ["Бразилия", "Индонезия", "Россия", "Кения"],
    answer: "Индонезия"
  },
  {
    question: "Река, протекающая через Париж?",
    options: ["Сена", "Темза", "Дунай", "Рейн"],
    answer: "Сена"
  },
  {
    question: "Какая страна окружена Южно-Китайским морем?",
    options: ["Монголия", "Казахстан", "Япония", "Вьетнам"],
    answer: "Вьетнам"
  }
];

let currentQuestion = 0;
let score = 0;
const startTime = Date.now();

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultContainer = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${q.question}`;

  optionsContainer.innerHTML = "";
  q.options.sort(() => Math.random() - 0.5); // Перемешать варианты

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) score++;

  Array.from(document.getElementsByClassName("option")).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.backgroundColor = "green";
    else if (btn.textContent === selected) btn.style.backgroundColor = "red";
  });

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  const totalTime = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  questionElement.style.display = "none";
  optionsContainer.style.display = "none";

  resultContainer.classList.remove("hidden");
  resultContainer.innerHTML = `
    <p>Вы прошли викторину!</p>
    <p>Результат: ${score} из ${questions.length}</p>
    <p>Время прохождения: ${minutes} мин ${seconds} сек</p>
    <p style="margin-top:30px;">Main developer: <strong>Nurmat Kamal</strong></p>
  `;
}

showQuestion();

  