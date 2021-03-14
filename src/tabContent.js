function loadContact(){
  const content = document.querySelector('#contactContent')
  while (content.hasChildNodes()) {
    content.removeChild(content.childNodes[0])
  }
  const phone = document.createElement("div")
  phone.textContent = "Call us at 777-777-7777"
  content.appendChild(phone);

  const email = document.createElement("div")
  email.textContent = "fake.email@gmail.com"
 
  content.appendChild(email);
}

function loadMenu(){
  const content = document.querySelector('#menuContent')
  while (content.hasChildNodes()) {
    content.removeChild(content.childNodes[0])
  }
  const menu1 = document.createElement("div")
  menu1.textContent = "Here would be a ton of menu items but I'm too lazy to add them"
  content.appendChild(menu1);

  const menu2 = document.createElement("div")
  menu2.textContent = "I'm sure I could hook this all up so that it's a loop of some sort"
 
  content.appendChild(menu2);
}

export {loadContact, loadMenu}