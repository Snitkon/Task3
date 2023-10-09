const process = require('process');
const crypto = require('crypto')
const readline = require('readline')

const params = process.argv
params.splice(0, 2)


function check(arr) {
  const verifiedArr = new Set(arr)
  return verifiedArr.size != arr.length
}

if ((params.length < 3) || (params.length % 2 === 0) || (check(params))) {
  console.error('Quantity of parameters less than required or duplication parameters')
  console.error('You must use more than three parameters and they not to identical. Example: stone, scissors, paper')
  process.exit(1)
}

const key = crypto.randomBytes(32)
const hexKey = key.toString('hex')

console.log(`HMAC: ${hexKey}`)
console.log('Available moves:')

for (let i = 0; i < params.length; i++) {
  console.log(`${i+1} - ${params[i]}`)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Your move: ', (yourChoice) => {
  rl.close()
  if (yourChoice > params.length) {
    console.error('Error')
    process.exit(1)
  }
  const computerChoice = process.argv[Math.floor(Math.random() * (process.argv.length - 2)) + 2];
  const userChoice = params[yourChoice-1]

  console.log(`Your choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);

  const hmac = crypto.createHmac('sha3-256', hexKey).update(userChoice).digest('hex')
  console.log(hmac)

  if (userChoice === computerChoice) console.log('It\'s a draw!')
})
