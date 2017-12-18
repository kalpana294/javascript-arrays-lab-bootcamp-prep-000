const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(value){
 kittens.push(value);
 return kittens
  
}
kittens = ["Milo","Otis","Garfield"]
 function destructivelyPrependKitten(value){
   kittens.unshift(value);
   return kittens
 }
 kittens = ["Milo","Otis","Garfield"]
 function destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens
 }
 kittens = ["Milo","Otis","Garfield"]
 function destructivelyRemoveFirstKitten(){
   kittens.shift();
   return kittens
 }
 kittens = ["Milo","Otis","Garfield"]
 function appendKitten(value){
  var kittens1 = kittens.concat(value)
  return kittens1
 }
 
 function prependKitten(value){
   var kittens2 = [value, ...kittens]
   return kittens2
 }