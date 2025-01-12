// Initial freelancerList array
const freelancerList = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "Teacher", price: 50}
]

// Select a random name from the given name array
function generateRandomName() {
  let nameArr = ["Shauna", "Elexis", "Lorraine", "Kala", "Mattie", 
    "Brock", "Tina", "Hunter", "Adrian", "Augustine", "Bridget"];
  let randomName = nameArr[Math.floor(Math.random()*nameArr.length)];
  return randomName;
}

// Select a random number from 1 to 100 for the price
function generateRandomPrice() {
  let randomPrice = Math.floor(Math.random() * 100) + 1;
  return randomPrice;
}

// Select a random occupation from the given job array
function generateRandomOccupation() {
  let jobArr = ["Writer", "Teacher", "Engineer", "Driver", 
    "Nurse", "Farmer", "Gardener", "Librarian"];
  let randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
  return randomJob;
}

// Add a new freelancer object to the freelancerList array
function addFreelancer() {
  let randName = generateRandomName();
  let randJob = generateRandomOccupation();
  let randPrice = generateRandomPrice();

  freelancerList.push({name: randName, occupation: randJob, price: randPrice});
}

// Calculates average starting price, given all prices in the freelancerList array
function getAvgStartingPrice(freelancerList) {
  let sum = 0;
  for (let i=0; i<freelancerList.length; i++) {
    sum = sum + freelancerList[i].price;
  }  
  return Math.floor(sum/freelancerList.length);
}

// Update the DOM to reflect the current freelancerList and avg starting price
function renderFreelancers(freelancerList) {
  const list = document.querySelector("#root");
  const freelancerElements = freelancerList.map((freelancer) => {
    const freelancerElement = document.createElement("li");
    freelancerElement.innerText = `Name: ${freelancer.name}; Occupation: ${freelancer.occupation}; Price: $${freelancer.price}`;
    return freelancerElement;
  });
  list.replaceChildren(...freelancerElements);

  renderAvgStartingPrice(freelancerList);
}

// Render the average starting price of all freelancers in freelancerList array
function renderAvgStartingPrice(freelancerList) {
  let avg = getAvgStartingPrice(freelancerList);
  const h2 = document.querySelector("#avg");
  h2.textContent = "The average starting price is $" + avg;
}

// Use 'setInterval()' to call the callback function every 1000 milliseconds (1 second)
// Calling `clearInterval(addFreelancerInterval)` will stop the interval once the list reaches 25.
const addFreelancerInterval = setInterval(() => {
  addFreelancer();
  renderFreelancers(freelancerList);

  if (freelancerList.length === 25) {
    clearInterval(addFreelancerInterval);
  }
}, 1000);

renderFreelancers(freelancerList);