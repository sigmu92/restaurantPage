function pageLoad() {

  const content = document.querySelector('#mainContent')

  const logo = document.createElement('img')
  logo.src = "Restaurant_Logo.png"
  content.appendChild(logo)

  const title = document.createElement("div")
  title.textContent = "Grill Kings Rules!"
  title.classList.add("headline");
  content.appendChild(title);

  const text = document.createElement("div")
  text.textContent = "Made up text about the restaurant goes here!"
  text.classList.add("descript");
  content.appendChild(text);
}

export default pageLoad()