let n = parseInt(gets());

let matricula;
let max = 0.0;

for(i = 0; i < n; i++){
  
  let line = gets().split(' ')
  
  let note = parseFloat(line[1])
  
  if(note > max){
    matricula = line[0]
    max = note
  }
}

if(max >= 8.0 && max <= 10.0) 
 print(matricula)
else
  print("Minimum note not reached")