interface Props {
  name: string;
  email: string;
  age: number;
}

export class User {
  name: string;
  email: string;
  age: number;

  constructor({ name, email, age }: Props) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  getName() {
    return this.name;
  }
}
