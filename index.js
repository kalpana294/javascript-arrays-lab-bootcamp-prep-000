const app = "I don't do much."

var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(kittens){
  kittens.shift("Ralph")
  return kittens
}