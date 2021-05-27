const getSleepHours = day =>{
    if (day === 'Monday')
    {
      return 8
    }
  else if (day === 'Tuesday')
  {
      return 7
    }
  
  else if (day === 'Wednesday')
  {
      return 8
    }
    else if (day === 'Thursday')
  {
      return 9
    }
     else if (day === 'Friday')
  {
      return 8
    }
     else if (day === 'Saturday')
  {
      return 12
    }
     else if (day === 'Sunday')
  {
      return 10
    }
  }
  // Test the function by calling it multiple times and printing the results to the console.
  console.log(getSleepHours('Tuesday'))
  console.log(getSleepHours('Sunday'))
  console.log(getSleepHours('Monday'))
  console.log(getSleepHours('Thursday'))
  
  const getActualSleepHours = () => 
     getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') +  getSleepHours('Saturday') + getSleepHours('Sunday') 
  
   /* 
  To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters*/
  
  const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours*7
  }
  /* Test your two new functions by calling them and printing the results to the consol*/
   console.log('This is Actual sleep hours', getActualSleepHours())
  console.log('This is Ideal sleep hours', getIdealSleepHours())
  
  const calculateSleepDebt = () =>
  {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours === idealSleepHours)
    {
    console.log ('You got ' + (actualSleepHours) + 'the perfect amount of sleep.')
     }
    else if (actualSleepHours > idealSleepHours ){
      console.log ('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed.')
    }
    else if (actualSleepHours < idealSleepHours ){
      console.log ('You should get some rest.')
       }
  }
  calculateSleepDebt()
  
  