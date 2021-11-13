//variable declarations
const saveButton = $("#saveButton");
//diplay current date at the top of the calendar
const today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// function setBlockColor() {
//   const hourData = $("#hour").data("hour", []);
// }

// setBlockColor();

const allTimeBlock = document.querySelectorAll(".row.time-block");

const currentTime = today.hour();
allTimeBlock.forEach((timeblock) => {
  const hour = parseInt(timeblock.getAttribute("data-hour"));
  const textarea = timeblock.querySelector(".hour");

  if (currentTime > hour) {
    textarea.classList.add("past");
  } else if (currentTime === hour) {
    textarea.classList.add("present");
  } else if (currentTime < hour) {
    textarea.classList.add("future");
  }

  timeblock.querySelector(".saveBtn").addEventListener("click", (event) => {
    // get the old data
    const allData = JSON.parse(localStorage.getItem("data")) || [];
    // get the input values hour# and texrt value
    // make data entry obj
    const userDataEntry = {
      hour: hour,
      event: textarea.querySelector("textarea").value,
    };

    // add the new entry to old data
    allData.push(userDataEntry);
    // set the data
    localStorage.setItem("data", JSON.stringify(allData));
  });
});

const allData = JSON.parse(localStorage.getItem("data")) || [];

allData.forEach((datum) => {
  const qstr = `[data-hour='${datum.hour}']`;
  document.querySelector(qstr).querySelector(".hour textarea").value =
    datum.event;
});

// var currentHour24 = 13;
// var currentHour12 = 1;
// var currentHour24 = moment().format("H");
// var currentHour12 = moment().format("h");

// console.log(currentHour12);
// console.log(currentHour24);

//functions

//event listeners

//pseudo code

//list of timeblocks for standard business hours.

//timeblocks are color coded based on if they are past/present/future
//if else statement to change the class of the timeblocks based on current time.

//upon clicking on a timeblock, i can enter an event.
//create an eventlistener for text value to display save button.
//create an event listener for click on savebutton to store to local memory.
//run function to display local memory to its assigned element
//add some form of text area in your timeblock (is text area the best? what else could you use?)

// when the page is refreshed, the saved events persist.
