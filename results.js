window.ANTIWORKER_RESULTS = [
  {
    title: "Yuni Kon",
    character: "Yuni",
    img: "images/yuni.png",
    mbti: ["INFJ"],
    url: "https://theantiworkers.com/2025/05/29/yuni-kon/"
  },
  {
    title: "Kerry Onn",
    character: "Kerry",
    img: "images/kerry.png",
    mbti: ["INTJ"],
    url: "https://theantiworkers.com/2025/06/05/kerry-onn/"
  },
  {
    title: "Dr Phrog, PhD",
    character: "Phrog",
    img: "images/phrog.png",
    mbti: ["INTP"],
    url: "https://theantiworkers.com/2025/06/06/dr-phrog/"
  },
  {
    title: "Schrodinger",
    character: "Schrodinger",
    img: "images/schrodinger.png",
    mbti: ["INFP"],
    url: "https://theantiworkers.com/2025/06/02/schrodinger/"
  },
  {
    title: "Tang Ping Win",
    character: "Ping Win",
    img: "images/pingwin.png",
    mbti: ["ISTP", "ISFP"],
    url: "https://theantiworkers.com/2025/05/30/tang-ping-win/"
  },
  {
    title: "Lao Hong",
    character: "Lao Hong",
    img: "images/laohong.png",
    mbti: ["ISTJ", "ISFJ"],
    url: "https://theantiworkers.com/2025/06/09/lao-hong/"
  },
  {
    title: "Fernando Greenfield",
    character: "Fernando",
    img: "images/fernando.png",
    mbti: ["ESFJ"],
    url: "https://theantiworkers.com/2025/05/31/fernando/"
  },
  {
    title: "Shane Finnerton",
    character: "Shane",
    img: "images/shane.png",
    mbti: ["ESFP", "ESTP"],
    url: "https://theantiworkers.com/2025/06/04/shane/"
  },
  {
    title: "Henry Huffington III",
    character: "Henry",
    img: "images/henry.png",
    mbti: ["ESTJ"],
    url: "https://theantiworkers.com/2025/06/07/henry-huffington/"
  },
  {
    title: "Basil Lee",
    character: "Basil",
    img: "images/basil.png",
    mbti: ["ENFJ"],
    url: "https://theantiworkers.com/2025/06/01/basil/"
  },
  {
    title: "Mr Moneypenne",
    character: "Moneypenne",
    img: "images/moneypenne.png",
    mbti: ["ENTJ"],
    url: "https://theantiworkers.com/2025/06/03/moneypenne/"
  },
  {
    title: "Barkley Goldstein",
    character: "Barkley",
    img: "images/barkley.png",
    mbti: ["ENFP", "ENTP"],
    url: "https://theantiworkers.com/2025/06/08/barkley/"
  }
];

// Display the result with clickable image
function displayResult(mbtiType) {
  const result = ANTIWORKER_RESULTS.find(r => r.mbti.includes(mbtiType));
  if (!result) return;
  
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="result">
      <h1>You are ${result.title}!</h1>
      <a href="${result.url}" target="_blank">
        <img src="${result.img}" alt="${result.title}" class="result-image">
      </a>
      <!-- Add any additional result information here -->
    </div>
  `;
}