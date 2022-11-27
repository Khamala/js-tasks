//Напиши класс Клієнт, який створює об'єкт
//з властивостями login і email для входу
//Оголоси приватні властивостей #login #email (або _login _email),
//доступ до читання і зміни яких зроблено через геттер і сеттер

class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const Mango = new Client("Mango", "mango@gmail.com");
console.log(Mango);

Mango.email = "Poly@mail.com";
console.log(Mango);

console.log(Mango.login);
