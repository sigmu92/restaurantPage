function loadContact(){
  const content = document.querySelector('#contactContent')

  console.log("hi")
  const phone = document.createElement("div")
  phone.textContent = "Call us at 777-777-7777"
  content.appendChild(phone);

  const email = document.createElement("div")
  email.textContent = "fake.email@gmail.com"
 
  content.appendChild(email);
}

export default loadContact