/* The PasswordGenerator class is a class that generates a random password based on the parameters
passed in */
class PasswordGenerator {
  capitalize: string;
  lowercase: string;
  numbers: string;
  symbols: string;

  constructor() {
    this.capitalize = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.lowercase = 'abcdefghijklmnopqrstuvwxyz';
    this.numbers = '0123456789';
    this.symbols = '!@#$%^&*_-+=';
  }

  randomNumber(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  createBaseData(
    hasCapitalize: boolean,
    hasLowercase: boolean,
    hasNumber: boolean,
    hasSymbols: boolean
  ): (string | undefined)[] {
    return [
      hasCapitalize ? this.capitalize : '',
      hasLowercase ? this.lowercase : '',
      hasNumber ? this.numbers : '',
      hasSymbols ? this.symbols : '',
    ].filter(Boolean);
  }

  generate(
    hasCapitalize: boolean,
    hasLowercase: boolean,
    hasNumber: boolean,
    hasSymbols: boolean,
    length: number
  ) {
    const characters = this.createBaseData(
      hasCapitalize,
      hasLowercase,
      hasNumber,
      hasSymbols
    );

    let password = '';

    for (let i = 0; i < length; i++) {
      const arrayData = characters[this.randomNumber(characters.length)];
      if (!arrayData) return null;

      password += arrayData.charAt(this.randomNumber(arrayData.length));
    }

    return password;
  }
}

export default PasswordGenerator;
