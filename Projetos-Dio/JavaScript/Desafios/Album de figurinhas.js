const numTotal = parseInt(gets())
const numFigCompradas = parseInt(gets())
const setFig = new Set()

for(let i=0; i < numFigCompradas; i++ ){
  setFig.add(parseInt(gets(i)))
}

print(numTotal - setFig.size )