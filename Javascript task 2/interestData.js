let arr = [
  { "principal": 2500, "time": 1.8 },
  { "principal": 1000, "time": 5 },
  { "principal": 3000, "time": 1 },
  { "principal": 2000, "time": 3 }
]

function interestCalculator(array) {

  for (let i = 0; i < array.length; i++) {
    array.map(function (rate, interest) {
      const element = array[i];
      console.log('element :', element);
      if (array[i].principal >= 2500 && array[i].time > 1 && array[i].time < 3) {
        rate = 3
        interest = (array[i].principal * array[i].time * rate) / 100
        console.log('interest :', interest);
      }

      else if (array[i].principal >= 2500 && array[i].time >= 3) {
        rate = 4
        interest = (array[i].principal * array[i].time * rate) / 100
        console.log('interest :', interest);
      }

      else if (array[i].principal < 2500 || array[i].time <= 1) {
        rate = 2
        interest = (array[i].principal * array[i].time * rate) / 100
        console.log('interest :', interest);
      }

      else {
        rate = 1
        interest = (array[i].principal * array[i].time * rate) / 100
        console.log('interest :', interest);
      }
      array[i].rate = rate
      array[i].interest = interest
      let interestData = [array]
      console.log('interestData :', interestData);
      return interestData
    })
  }
}

interestCalculator(arr)1