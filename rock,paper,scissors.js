/* The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.*/
const getUserChoice =  userInput => {
    userInput = userInput.toLowerCase() 
  
  /*When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.*/
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'Scissors' || userInput === 'bomb')
    {
      return userInput;
    }
      else {
      console.log('Oh No! Please enter any one of the three inputs below "rock", "paper", "scissors"')
      }
  }
  /*Test the function by calling it with valid and invalid input, and printing the results to the console.*/
  console.log(getUserChoice('rock'))
  console.log(getUserChoice('ROCK'))
  console.log(getUserChoice('rocki')) //Print Undefined
  
  /* Now we need to have the computer make a choice.*/  
  
  const getComputerChoice = () =>
  {
   const randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber) {
    case 0:
    return  'rock'
    case 1:
    return 'paper'
    case 2:
    return 'scissors'
  }
  }
  /*Test the function by calling it multiple times and printing the results to the console. */
  console.log(getComputerChoice())
  console.log(getComputerChoice())
  /*console.log(getComputerChoice())
  console.log(getComputerChoice())*/
  
  /*Now it’s time to determine a winner.*/
  
  function determineWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice){
      return 'The game was a tie :('
    }
    /* If the game is not a tie, you’ll need to determine a winner.*/
    else if (userChoice === 'rock' )  {
      if (computerChoice === 'paper')
    {
      return 'Computer won!'
    }
    else {
       return 'You won!'
    }
    }
  else if (userChoice === 'paper'){
    if (computerChoice === 'scissors')
    {
      return 'Computer Won!'
    }
    else 
  {
    return 'You won'
  }
  }
  /*the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.*/
  
  else if (userChoice === 'scissors'){
    if (computerChoice === 'rock')
    {
      return 'Computer Won!'
    }
    else 
  {
    return 'You won'
  }
  }
  else if (userChoice === 'bomb'){
   return 'You won'
  } 
  }
  /*Checking whether logic is working*/
  console.log(determineWinner('paper', 'paper'))
  console.log(determineWinner('scissors', 'rock'))
  console.log(determineWinner('paper', 'rock'))
  
  /* Everything is set up. Now you need to start the game and log the results.*/
  
  const playGame = () => {
    let  userChoice = getUserChoice('bomb')
    let  computerChoice = getComputerChoice()
    console.log(`Your choice was : ${userChoice}`)
    console.log(`Computer choice was : ${computerChoice}`)
    console.log(determineWinner(userChoice,computerChoice ))
  }
  
  /*Finally, let’s determine who won*/
  
  playGame()
  
  