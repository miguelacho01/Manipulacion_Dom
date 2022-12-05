const api = "https://jsonplaceholder.typicode.com/users";

const nodo = document.querySelector(".app");

nodo.addEventListener("click", (event) => {
  if (event.target.nodeName === "P") {
    alert("hola");
  }
});

fetch(api)
  .then((response) => response.json())
  //   .then((response) => console.log(response))
  // const nodo = document
  //   .querySelector(".app")

  .then((datos) => {
    const todosLosItems = [];
    datos.forEach((element) => {
      console.log(element);

      const name = document.createElement("p");
      name.textContent = element.name;
      name.className = "nombre";

      const username = document.createElement("p");
      username.textContent = element.username;
      username.className = "username";

      const email = document.createElement("p");
      email.textContent = element.email;
      email.className = "email";
      //   email.addEventListener("click", () => {
      //     alert("tu email es:");
      //   });

      const container = document.createElement("div");
      container.className;
      container.append(name, username, email);

      todosLosItems.push(container);
    });

    nodo.append(...todosLosItems);
  });

const abrir = document.querySelector(".email");
