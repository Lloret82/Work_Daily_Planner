$(document).ready(function () {
    
    var workHours = [
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
    ];

    // displays current day in header
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    // For Loop to create row hours with classes and IDs
    for (i = 0; i < workHours.length; i++) {
        $(`<div class="col-2 btn btn-secondary  time-block"></div>`)
            .text(workHours[i])
            .appendTo(".row");
        $(`<textarea class="col-8 note-input empty hello" id="time-${i}"></textarea>`)
            .attr("placeholder", "What you have to do at this time?")
            .appendTo(".row");
        $(`<button class="col-2 btn btn-secondary saveBtn" id="hour${i}"></button>`)
            .text("save")
            .appendTo(".row");
    }
     // Moment.js to get the current date and time
     var now = new Date().getHours();

     // check if time is past, present, or future and assign differen classes
     if (now > 9) {
         $("#time-0").addClass("past");
     } else if (now >= 9 && now < 10) {
         $("#time-0").addClass("present");
     } else if (now < 9) {
         $("#time-0").addClass("future");
     }
 
     if (now > 10) {
         $("#time-1").addClass("past");
     } else if (now >= 10 && now < 11) {
         $("#time-1").addClass("present");
     } else if (now < 10) {
         $("#time-1").addClass("future");
     }
 
     if (now > 11) {
         $("#time-2").addClass("past");
     } else if (now >= 11 && now < 12) {
         $("#time-2").addClass("present");
     } else if (now < 11) {
         $("#time-2").addClass("future");
     }
 
     if (now > 12) {
         $("#time-3").addClass("past");
     } else if (now >= 12 && now < 13) {
         $("#time-3").addClass("present");
     } else if (now < 12) {
         $("#time-3").addClass("future");
     }
 
     if (now > 13) {
         $("#time-4").addClass("past");
     } else if (now >= 13 && now < 14) {
         $("#time-4").addClass("present");
     } else if (now < 13) {
         $("#time-4").addClass("future");
     }
 
     if (now > 14) {
         $("#time-5").addClass("past");
     } else if (now >= 14 && now < 15) {
         $("#time-5").addClass("present");
     } else if (now < 14) {
         $("#time-5").addClass("future");
     }
 
     if (now > 15) {
         $("#time-6").addClass("past");
     } else if (now >= 15 && now < 16) {
         $("#time-6").addClass("present");
     } else if (now < 15) {
         $("#time-6").addClass("future");
     }
 
     if (now > 16) {
         $("#time-7").addClass("past");
     } else if (now >= 16 && now < 17) {
         $("#time-7").addClass("present");
     } else if (now < 16) {
         $("#time-7").addClass("future");
     }
 
     if (now > 17) {
         $("#time-8").addClass("past");
     } else if (now >= 17 && now < 18) {
         $("#time-8").addClass("present");
     } else if (now < 17) {
         $("#time-8").addClass("future");
     }
 
    // Reset button
    $(`<button class="btn btn-success clear"></button>`)
        .text("Clear Schedule")
        .appendTo(".clear");

    $(".clear").on("click", function () {
        localStorage.clear();       // clear local storage
        location.reload();          // reload the page after clear
    });

   
    // Input user to do list, save to local storage
    

    var row9am = document.querySelector("#time-0");

    row9am.value = localStorage.getItem("#hour0");

    hour0.addEventListener("click", output1);

    function output1() {
        localStorage.setItem("9:00", row9am.value);
        document.getElementById("time-0").value = "";
    }


    var row10am = document.querySelector("#time-1");

    row10am.value = localStorage.getItem("hour1");

    hour1.addEventListener("click", output2);

    function output2() {
        localStorage.setItem("10:00", row10am.value);
        document.getElementById("time-1").value = "";    }


    var row11am = document.querySelector("#time-2");

    row11am.value = localStorage.getItem("hour2");

    hour2.addEventListener("click", output3);

    function output3() {
        localStorage.setItem("11:00", row11am.value);
        document.getElementById("time-2").value = "";
    }


    var row12pm = document.querySelector("#time-3");

    row12pm.value = localStorage.getItem("hour3");

    hour3.addEventListener("click", output4);

    function output4() {
        localStorage.setItem("12:00", row12pm.value);
        document.getElementById("time-3").value = "";
    }


    var row1pm = document.querySelector("#time-4");

    row1pm.value = localStorage.getItem("hour4");

    hour4.addEventListener("click", output5);

    function output5() {
        localStorage.setItem("13:00", row1pm.value);
        document.getElementById("time-4").value = "";
    }

    

    var row2pm = document.querySelector("#time-5");
   
    row2pm.value = localStorage.getItem("hour5");

    hour5.addEventListener("click", output6);

    function output6() {
        localStorage.setItem("14:00", row2pm.value);
        document.querySelector(".note-input").value = "";
        document.getElementById("time-5").value = "";
    }


    var row3pm = document.querySelector("#time-6");
   
    row3pm.value = localStorage.getItem("hour6");

    
    hour6.addEventListener("click", output7);

    function output7() {
        localStorage.setItem("15:00", row3pm.value);
        document.querySelector(".note-input").value = "";
        document.getElementById("time-6").value = "";
    }


    var row4pm = document.querySelector("#time-7");

    row4pm.value = localStorage.getItem("hour7");

    hour7.addEventListener("click", output8);

    function output8() {
        localStorage.setItem("16:00", row4pm.value);
        document.querySelector(".note-input").value = "";
        document.getElementById("time-7").value = "";
    }


    var row5pm = document.querySelector("#time-8");

    row5pm.value = localStorage.getItem("hour8");

    hour8.addEventListener("click", output9);

    function output9() {
        localStorage.setItem("17:00", row5pm.value);
        document.querySelector(".note-input").value = "";
        document.getElementById("time-8").value = "";
    }
});