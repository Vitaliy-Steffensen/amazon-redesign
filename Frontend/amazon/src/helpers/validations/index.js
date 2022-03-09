export default class Validations {
  static EmailValidation(email) {
    return email.includes("@" && ".");
  }
}
