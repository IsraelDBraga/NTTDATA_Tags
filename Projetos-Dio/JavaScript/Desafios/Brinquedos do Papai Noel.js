var participantes = gets();
var criancas;
var array = [];
for(i=0; ;i++){
  criancas = gets().split(' ');
  array.push(          );
}

const meninos = array.filter(                                'M').length;
const meninas = array.filter(                                 'F').length;
print(`${meninos} carrinhos\n${meninas} bonecas`);


/*let criancas = gets();
let meninas = 0;
let meninos = 0;

for (let i = 0; i < criancas; i++) {
  let nameGender = gets().split(" ");
  let name = nameGender[0];
  let gender = nameGender[1];

  if (gender === 'F') {
    meninas++
  } 

  if (gender === 'M') {
    meninos++
  }
}

console.log(meninos + " carrinhos")
console.log(meninas + " bonecas")