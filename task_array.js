// method setArray
let dataArray = [];
function setArray(value){
    dataArray.push(value) 
}
function getArray(){
    setArray("INDEX 0 : Barcelona")
    setArray("INDEX 1 : Real Madrid")
    setArray("INDEX 2 : Atlethico Madrid")
    console.log(dataArray[0])
    console.log(dataArray[1])
    console.log(dataArray[2])
    return dataArray
}
function putArray(){
    dataArray[0] = "INDEX 0 : Arsenal"
    dataArray[1] = "INDEX 1 : Man. City"
    dataArray[2] = "INDEX 2 : Man. Utd"
    console.log(dataArray[0])
    console.log(dataArray[1])
    console.log(dataArray[2])
}
console.log("GET ARRAY SEBELUM DATA INDEX NYA DIRUBAH")
getArray()
console.log(dataArray)
console.log("GET ARRAY SESUDAH DATA INDEX NYA DIRUBAH")
putArray()
console.log(dataArray)