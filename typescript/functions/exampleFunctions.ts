class ExampleFunctions {
  msg: string = 'Hello Swiat';

  showMsg(): void {
    console.log(this.msg);
  }

  hello(): string {
    return 'Hello World, funkcja hello';
  }

  hello2(message: string) {
    console.log(message);
  }

  hello3(message: string, message2?: string) {
    console.log(message + '  ' + message2);
  }

  hello4(message: string, message2 = 'hello4') {
    console.log(message + '  ' + message2);
  }

  hello5 = message =>
    console.log('witaj swiecie funkcja anonimowa/fat arrow' + message)

  hello6 = () => console.log('witaj swiecie funkcja 6 ()=> ');

  hello7 = (message: string): string => {
    return 'witaj swiecie funkcja7 ' + message;
  }
}

let example = new ExampleFunctions();
example.showMsg();
example.hello();
console.log(example.hello());
example.hello2('Witaj hello2');
example.hello3('Witaj hello3');
example.hello4('Witaj hello4');
example.hello5('Witaj hello5');
example.hello6();
console.log(example.hello7(' clg hello7'));

// tsc exampleFunctions.ts compile
// node exampleFunctions.js zwraca wartosc w konsoli
