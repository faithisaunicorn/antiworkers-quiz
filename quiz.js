const QUIZ_PAGE_BACKGROUNDS = [
    "#e6e1fc", "#fff4c6", "#b9e6fc", "#e4ffc5", "#bbdefb", "#fef0d4", "#e0f7fa", "#ffe9c6", "#c8e6c9", "#b3e5fc", "#ffedf7"
];

function setQuizBackground(index) {
  document.body.style.background = `linear-gradient(180deg, ${QUIZ_PAGE_BACKGROUNDS[index]} 0%, #YOUR_COLOR2 100%)` || "linear-gradient(180deg, #e6e1fc 0%, #b9e6fc 100%)";
}

const QUESTIONS = [
  {
    text: "You open your inbox. There are 972 unread emails. What do you do?",
    options: [
      { value: "A", text: "Mark all as read. If it’s important, they’ll call." },
      { value: "B", text: "Start colour-coding by urgency, sender, and emotional damage." },
      { value: "C", text: "Crawl under the desk and practice shallow breathing." }
    ]
  },
  {
    text: "You’re put in charge of a meeting titled “Optimising the Optimisation Strategy.” How do you survive?",
    options: [
      { value: "A", text: "Make 12 slides that say the same thing in different fonts." },
      { value: "B", text: "Bribe attendees with snacks and end early." },
      { value: "C", text: "Start with a philosophical quote to confuse everyone." }
    ]
  },
  {
    text: "An intern gives you a spreadsheet titled “Emotions_Quarterly_FINALv7.xlsx.” How do you respond?",
    options: [
      { value: "A", text: "Cry a little. Rename it “Feelings_2025_FINAL_FINAL2”." },
      { value: "B", text: "Add a pie chart titled “Regret”." },
      { value: "C", text: "Set conditional formatting to turn everything red." }
    ]
  },
  {
    text: "You’re tired from staring at spreadsheets all day. A coworker invites you to “coffee and vibes” in the break room. What do you bring?",
    options: [
      { value: "A", text: "Your trauma journal, annotated." },
      { value: "B", text: "A homemade juice labeled “Productivity Potion.”" },
      { value: "C", text: "Nothing. You *are* the vibe." }
    ]
  },
  {
    text: "In the break room, the microwave starts to tremble. With a low hum and the smell of burnt popcorn, it shifts aside to reveal a swirling portal pulsing with a purple glow. It’s….a gateway to?",
    options: [
      { value: "A", text: "A sacred sourdough shrine." },
      { value: "B", text: "A wizened talking frog wearing a mysterious cape." },
      { value: "C", text: "A coffee dimension where time stops but work continues." }
    ]
  }
];

const BRANCH_QUESTIONS = {
  A: {
    text: "The scent of fermentation is oddly comforting. You find yourself in a warm, glowing bakery where loaves levitate and hum Gregorian chants in gluten. A sourdough starter bubbles in a crystal chalice. What do you ask the sourdough?",
    options: [
      { value: "A", text: "“Am I rising, or just fermenting?”" },
      { value: "B", text: "“Do you think I should quit?”" },
      { value: "C", text: "“Can I nap here while you proof?”" }
    ]
  },
  B: {
    text: "You land in a floating conference room made of lily pads. A single frog sits at the head of the table, donning a velvet cape and the aura of someone who’s read too much Nietzsche. He adjusts his monocle. What do you say?",
    options: [
      { value: "A", text: "“I knew therapy was just vibes.”" },
      { value: "B", text: "“Is this part of orientation?”" },
      { value: "C", text: "“What happens if I leave it empty forever?”" }
    ]
  },
  C: {
    text: "You emerge into a cave that smells stronger than a Starbucks. Espresso pours from waterfalls, and everything smells like ambition and late nights. The Coffee Oracle floats toward you, robes made of recycled receipts. What do you do with the cup it offers?",
    options: [
      { value: "A", text: "Hurl it into the time void – lukewarm coffee should be illegal." },
      { value: "B", text: "Finish the whole cup in one big gulp because you’re thirsty." },
      { value: "C", text: "Ask if it’s deductible as a business expense." }
    ]
  }
};

const REST_QUESTIONS = [
  {
    text: "As you journey through the realm, the air thickens with meaning (or possibly toner fumes). Suddenly, a glowing scroll materializes in your hands. It's The Corporate Prophecy, edged in gold and slightly passive-aggressive. What does it say?",
    options: [
      { value: "A", text: "“Again? I just want a nap.”" },
      { value: "B", text: "“Time to unionise the multiverse.”" },
      { value: "C", text: "“I’ll think this through and get back to you.”" }
    ]
  },
  {
    text: "Your surroundings blur like a corrupted Zoom background. You jolt awake at your desk, head stuck to a post-it that says “circle back later.”<br><br>Your inbox is still overflowing. Your manager appears and asks if you finished the onboarding. What do you say?",
    options: [
      { value: "A", text: "“Haha yeah I was just stretching! For 20 minutes. On the floor.”" },
      { value: "B", text: "“No, but continue.”" },
      { value: "C", text: "Panic. Say “You too!” and disappear into the stairwell." }
    ]
  },
  {
    text: "You’ve been promoted...perhaps The Corporate Prophecy had something to do with it. Your new title is “Chief Vibes Officer.” With great power comes great responsibility, so what now?",
    options: [
      { value: "A", text: "Rearrange the furniture and declare it feng shui." },
      { value: "B", text: "Host a team nap. HR says nothing." },
      { value: "C", text: "Start a Slack channel called #radicalrest" }
    ]
  },
  {
    text: "The HR Fax Machine starts glowing. It’s calling you to the fourth floor – a floor that doesn’t exist. What now?",
    options: [
      { value: "A", text: "Put on your good hoodie. It’s time." },
      { value: "B", text: "Email yourself a resignation letter “just in case.”" },
      { value: "C", text: "Jump in. You’ve been training for this since your first group project." }
    ]
  }
];

// App logic

let answers = [];
let branch = null;
let qIndex = 0;

function renderIntro() {
  setQuizBackground(0);
  document.getElementById('app').innerHTML = `
    <div class="container">
      <h1>Which Antiworker Are You?</h1>
      <p>Welcome to The Jobiverse™, a dimension where capitalism has gone rogue and HR is a sentient fax machine.</p>
      <img src="images/antiworkers.png" alt="The Antiworkers" class="cover-image">
      <p align="center">
        <button class="btn-glow" onclick="renderSecondIntro()">Let's Go!</button>
      </p>
    </div>
  `;
  answers = [];
  branch = null;
  qIndex = 0;
}

function renderSecondIntro() {
  const container = document.getElementById('app');
  setQuizBackground(0);
  container.innerHTML = `
    <div class="container">
      <h2>Where am I?</h2>
      <p>You’ve just woken up at your desk with no memory of how you got here, but you do have an employee badge with your name misspelled and a mysterious onboarding letter (in Comic Sans, font size 64).</p>
      <img src="images/mysteriousletter.png" alt="The Antiworkers" class="cover-image">
      <p>✨Ready to find out which exhausted, adorable Antiworker lives inside you?</p>
      <button class="btn-glow" style="display:block; margin: 0 auto;" onclick="startQuiz()">Start Quiz</button>
    </div>
  `;
}

function startQuiz() {
  answers = [];
  branch = null;
  qIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  if (qIndex < 5) {
    setQuizBackground(qIndex + 1); // Q1-Q5
    const q = QUESTIONS[qIndex];
    renderQuestionUI(q, qIndex + 1, QUESTIONS.length + 5);
  } else if (qIndex === 5) {
    setQuizBackground(6); // Branch Q6
    branch = answers[4];
    renderBranchQuestion();
  } else if (qIndex === 6) {
    setQuizBackground(7); // Q7
    renderQuestionUI(REST_QUESTIONS[0], 7, QUESTIONS.length + 5);
  } else if (qIndex === 7) {
    setQuizBackground(8); // Q8
    renderQuestionUI(REST_QUESTIONS[1], 8, QUESTIONS.length + 5);
  } else if (qIndex === 8) {
    setQuizBackground(9); // Q9
    renderQuestionUI(REST_QUESTIONS[2], 9, QUESTIONS.length + 5);
  } else if (qIndex === 9) {
    setQuizBackground(10); // Q10
    renderQuestionUI(REST_QUESTIONS[3], 10, QUESTIONS.length + 5);
  } else if (qIndex === 10) {
    renderEnd();
  }
}

function renderQuestionUI(q, number, total) {
  const bgColor = QUIZ_PAGE_BACKGROUNDS[qIndex + 1] || "#e6e1fc";
  document.getElementById('app').innerHTML = `
    <form id="quizForm">
      <h2>${q.text}</h2>
      <ul>
        ${q.options.map(opt => `
          <li>
            <button type="button"
              class="btn-fixed"
              style="background:${bgColor}; color:#222; border:none;"
              onclick="submitAnswer('${opt.value}')"
            >${opt.text}</button>
          </li>
        `).join("")}
      </ul>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${Math.round((number / total) * 100)}%;"></div>
      </div>
    </form>
  `;
}

function renderBranchQuestion() {
  const bq = BRANCH_QUESTIONS[branch];
  const bgColor = QUIZ_PAGE_BACKGROUNDS[6] || "#e6e1fc";
  document.getElementById('app').innerHTML = `
    <form id="quizForm">
      <h2>${bq.text}</h2>
      <ul>
        ${bq.options.map(opt => `
          <li>
            <button type="button"
              class="btn-fixed"
              style="background:${bgColor}; color:#222; border:none;"
              onclick="submitBranchAnswer('${opt.value}')"
            >${opt.text}</button>
          </li>
        `).join("")}
      </ul>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: 60%;"></div>
      </div>
    </form>
  `;
}

function submitAnswer(val) {
  answers.push(val);
  qIndex++;
  renderQuestion();
}

function submitBranchAnswer(val) {
  answers.push(val);
  qIndex++;
  renderQuestion();
}

function renderEnd() {
  setQuizBackground(11)
  document.getElementById('app').innerHTML = `
    <div class="end-page">
      <p>
        The HR Fax Machine begins to whir with divine purpose.<br>
        The fax sparks, hums a victory jingle, and bursts into confetti made of recycled leave applications.
      </p>
      <button class="btn-glow" onclick="renderResult()">VIEW MY RESULTS</button>
    </div>
  `;
}

function renderResult() {
  setQuizBackground(11);
  const mbti = calculateMBTI(answers, branch);
  const result = findResult(mbti);
  document.getElementById('app').innerHTML = `
    <h2>You are: ${result.character}</h2>
    <img class="character" src="${result.img}" alt="${result.character}">
    <button id="download-img-btn" class="save-btn">Save your results</button>
    <div>
      <div class="cta-share">
        <p><strong>If you had fun taking this quiz, send it to your friends or colleagues </strong>– after all, the more spam, the merrier!</p>
        <p>
          Where burnout and nihilism meet cuteness. Scroll your stress away, follow  
          <a href="https://www.instagram.com/theantiworkers/" target="_blank">@theantiworkers</a> on IG/FB for weekly anti-work & self-care cartoons.
        </p>
      </div>
    </div>
    <form action="https://formspree.io/f/xrbkyrjd" method="POST" target="_blank" class="subscribe-form">
      <label for="email">Subscribe for more of The Antiworker's antics (and future merch drops)! </label><br>
      <input type="email" name="email" id="email" placeholder="your@email.com" required>
      <button type="submit">Subscribe</button>
    </form>
    <div class="result-actions">
        <button type="button" class="result-action-btn" onclick="renderIntro()">Restart / Retry Quiz</button>
        <button class="result-action-btn" onclick="window.open('https://theantiworkers.com/quiz-results/', '_blank')">
          See all results
        </button>
      </div>
    </div>
  `;
  document.getElementById('download-img-btn').onclick = function() {
    const img = document.querySelector('.character');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = `${result.character}-antiworker.png`;
    link.click();
  };
}

function calculateMBTI(answers, branch) {
  const traits = { E:0, I:0, S:0, N:0, F:0, T:0, J:0, P:0 };
  const mapping = window.MBTI_SCORES;
  let ans_map = {};
  let idx = 0;
  for (let i=1; i<=5; i++) {
    ans_map[i] = answers[idx];
    idx++;
  }
  let q6key = "6"+branch;
  ans_map[q6key] = answers[idx];
  idx++;
  for (let i=7; i<=10; i++) {
    ans_map[i] = answers[idx];
    idx++;
  }
  for (const [q, a] of Object.entries(ans_map)) {
    const sd = mapping[q];
    if (sd && sd[a]) {
      for (const [trait, val] of Object.entries(sd[a])) {
        traits[trait] += val;
      }
    }
  }
  let mbti = "";
  mbti += traits.E >= traits.I ? "E" : "I";
  mbti += traits.S >= traits.N ? "S" : "N";
  mbti += traits.F >= traits.T ? "F" : "T";
  mbti += traits.J >= traits.P ? "J" : "P";
  return mbti;
}

function findResult(mbti) {
  const results = window.ANTIWORKER_RESULTS;
  for (const res of results) {
    if (res.mbti.includes(mbti)) return res;
  }
  return results[0];
}

renderIntro();