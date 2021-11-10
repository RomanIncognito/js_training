function persistence(num) {
    while(~~(num/10) > 0){
      num = num.toString().split("").reduce((x,y)=>x*y)
      console.log(num)
    }
  }

persistence(27)
