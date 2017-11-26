var BasicType = (function () {
    function BasicType() {
        this.name = 'Spajki';
        this.age = 5;
        this.colors = ['czarny', 'biały'];
        this.dates = [new Date(), new Date()];
        this.pair = ['Poniedzialek', 1]; // typ Tuple
        this.xyz = 222;
    }
    return BasicType;
}());
