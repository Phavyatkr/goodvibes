
function greet(firstName)
{
  
return `Hello ${firstName}`

}

function logger(name)
{
console.log(greet(name))
}
function greetAndLog(friend)
{
  logger(friend)
}
greetAndLog("Ada")


function day2(weekName)
{
  return `Today is ${weekName}`
 
}
function whatDay(Weekname)
{
  console.log(day2(weekName))
}
 function dayLog(weekName)
 {
   day2(weekName)
   whatDay(weekName)
 }
dayLog("Monday")

dayLog("Tuesday")

function add(a, b)
{
  console.log(a+b)

}
add(1,2)
add(3,4)
add("f", "s")

//NEED TO CHECK WITH MADHAV 

function day2(name)
{
  return `Today is ${name}`
 
}


function whatDay(name)
{
  console.log(day2(name))
}
 day2('Wednesday')

whatDay("Monday")

whatDay("Tuesday")


