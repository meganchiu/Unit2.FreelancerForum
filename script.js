const freelancerList = [
  {name: "Alice", occupation: "writer", price: 30},
  {name: "Bob", occupation: "teacher", price: 50}
]

function generateRandomName() {
  let nameArr = ["Shauna", "Elexis", "Lorraine", "Kala", "Mattie", 
    "Brock", "Tina", "Hunter", "Adrian", "Augustine", "Bridget"];
  let randomName = nameArr[Math.floor(Math.random()*nameArr.length)];
  return randomName;
}

function generateRandomPrice() {
  let randomPrice = Math.floor(Math.random() * 100) + 1;
  return randomPrice;
}

function generateRandomOccupation() {
  let jobArr = ["writer", "teacher", "engineer", "driver", 
    "nurse", "farmer", "gardener", "librarian"];
  let randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
  return randomJob;
}

function addFreelancer() {
  let randName = generateRandomName();
  let randJob = generateRandomOccupation();
  let randPrice = generateRandomPrice();

  freelancerList.push({name: randName, occupation: randJob, price: randPrice});

  return freelancerList;
}

function getAvgStartingPrice(freelancerList) {
  let sum = 0;
  for (let i=0; i<freelancerList.length; i++) {
    sum = sum + freelancerList[i].price;
  }  
  return sum/freelancerList.length;
}


