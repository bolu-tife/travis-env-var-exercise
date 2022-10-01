
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const randomVariable = process.env.RANDOM_VARIABLE;
    console.log(`My random variable is ${randomVariable}`);
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
