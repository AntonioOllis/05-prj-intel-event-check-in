//get all needed DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//arrays for each team
const waterTeam = [];
const netTeam = [];
const renewTeam = [];

//track attendance
let count = 0;
const maxCount = 50;

//handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  //big if to wrap around everything else
  if (count < 50) {
    //increment the count and log it
    count++;
    console.log("Total check ins: ", count);

    //update progress bar
    const percentage = Math.round((count / maxCount) * 100) + "%";
    console.log(`Progress: ${percentage}`);

    //update total counter
    const totalCounter = document.getElementById("attendeeCount");
    totalCounter.textContent = count;

    //update progress bar width
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage;

    //update team counter
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

    //show welcome message
    const message = `Welcome, ${name} from ${teamName} `;
    console.log(message);
    const greeting = document.getElementById("greeting");
    greeting.textContent = message;
    greeting.style.display = "block";

    setTimeout(function () {
      greeting.style.display = "none";
    }, 3000);
  } else {
    const celebrate = document.getElementById("celebrationMessage");

    //getting largest team name
    const waterCount = parseInt(
      document.getElementById("waterCount").textContent,
    );
    const netCount = parseInt(document.getElementById("zeroCount").textContent);
    const renewCount = parseInt(
      document.getElementById("powerCount").textContent,
    );

    let largestTeam = "";

    if (waterCount >= netCount && waterCount >= renewCount) {
      largestTeam = "Water Wise";
    } else if (netCount >= renewCount) {
      largestTeam = "Net Zero";
    } else {
      largestTeam = "Renewables";
    }

    //display celebration message
    celebrate.textContent = `🎉 Maximum check-ins reached! 🎉 Team ${largestTeam} has the most attendees!`;
    celebrate.style.display = "block";

    setTimeout(function () {
      celebrate.style.display = "none";
    }, 5000);
  }

  form.reset();
});
