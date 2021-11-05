var animals = [ 'dog',
  'goat',
  'spider',
  'cow',
  'fly',
  'goat',
  'horse',
  'cat',
  'cat',
  'bird',
  'bird',
  'bird',
  'horse' ]
var BreakException = {};

var oldLadySwallows = function(animals) {
  animals.forEach((animal, index, the_array)=>{
  try {
    let beEaten = false
    if (animal === "fly"){
      for (let i=0; i < index; i += 1){
        if (the_array[i] === "spider"){
          delete the_array[index]
          break
        }
      }
    } else if (animal === "spider"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "fly"){
          delete the_array[i]
        }else if (the_array[i] === "bird"){
          beEaten = true
        }
      }
      if (beEaten) delete the_array[index]
    } else if (animal === "bird"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "spider"){
          delete the_array[i]
        }else if (the_array[i] === "cat"){
          beEaten = true
        }
      }
      if (beEaten) delete the_array[index]
    } else if (animal === "cat"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "bird"){
          delete the_array[i]
        }else if (the_array[i] === "dog"){
          beEaten = true
        }
      }
      if (beEaten) delete the_array[index]
    } else if (animal === "dog"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "cat"){
          delete the_array[i]
        }else if (the_array[i] === "goat"){
          beEaten = true
        }
      }
      if (beEaten) delete the_array[index]
    } else if (animal === "goat"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "dog"){
          delete the_array[i]
        }else if (the_array[i] === "cow"){
          beEaten = true
        }
      }
      if (beEaten) delete the_array[index]
    } else if (animal === "cow"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "goat"){
          delete the_array[i]
        }else if (the_array[i] === "horse"){
          beEaten = true
        }
      }
      if (beEaten) delete the_array[index]
    } else if (animal === "horse"){
      for (let i = 0; i < index; i+= 1){
        if (the_array[i] === "cow"){
          delete the_array[i]
        }
      }
      throw BreakException
    }
  } catch(e){
    if (e === BreakException ){
      console.log(`stoped at index ${index}`)
      the_array.splice(index+1, the_array.length - index - 1)
    }
  }
  })
  
  return animals.filter(x=>x?true:false)
}

console.log(oldLadySwallows(animals))

