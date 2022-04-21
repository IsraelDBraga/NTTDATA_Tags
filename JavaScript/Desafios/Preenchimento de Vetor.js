const input = gets();
let a = input;

for (let cont = 0; cont<10 ; cont++ ) {
  print(`N[${cont}] = ${a}`);
  a = a * 2 ;
}