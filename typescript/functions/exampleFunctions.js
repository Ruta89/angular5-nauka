var ExampleFunctions = (function () {
    function ExampleFunctions() {
        this.msg = 'Hello Swiat';
        this.hello5 = function (message) {
            return console.log('witaj swiecie funkcja anonimowa/fat arrow' + message);
        };
        this.hello6 = function () { return console.log('witaj swiecie funkcja 6 ()=> '); };
        this.hello7 = function (message) {
            return 'witaj swiecie funkcja7 ' + message;
        };
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Hello World, funkcja hello';
    };
    ExampleFunctions.prototype.hello2 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello3 = function (message, message2) {
        console.log(message + '  ' + message2);
    };
    ExampleFunctions.prototype.hello4 = function (message, message2) {
        if (message2 === void 0) { message2 = 'hello4'; }
        console.log(message + '  ' + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
example.hello();
example.hello2('Witaj hello2');
example.hello3('Witaj hello3');
example.hello4('Witaj hello4');
example.hello5('Witaj hello5');
example.hello6();
console.log(example.hello7(' clg hello7'));
// tsc exampleFunctions.ts compile
// node exampleFunctions.js zwraca wartosc w konsoli
