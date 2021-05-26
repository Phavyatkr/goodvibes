let raceNumbers = Math.floor(Math.random()*1000)
console.log(`Generated race number is : ${raceNumbers}`)
let registeredEarly = true
let runnersAge = 18
if (runnersAge > 18 && registeredEarly === true)
{
  console.log('This runner is an Adult!')
  raceNumbers += 1000
  console.log(`This Adults Racenumber is : ${raceNumbers}`)

}
if (runnersAge > 18 && registeredEarly === true)
{
  console.log (`You will run at 9:30 am and your race number is ${raceNumbers}` )
}
else if (runnersAge > 18 && registeredEarly === false)
{
  console.log (`You will run at 11:00 am and your race number is ${raceNumbers}` )
}
else if (runnersAge < 18)
{
  console.log (`You will run at 12:30 pm and your race number is ${raceNumbers}` )
}
else
{
  console.log (`Sorry for the Inconvienence! Please see the registration desk.` )
}