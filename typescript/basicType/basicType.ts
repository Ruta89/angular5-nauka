class BasicType {
  name: string = 'Spajki';
  age: number = 5;
  colors: string[] = ['czarny', 'biały'];
  dates: Array<Date> = [new Date(), new Date()];
  pair: [string, number] = ['Poniedzialek', 1];      // typ Tuple
  xyz: any = 222;
}
