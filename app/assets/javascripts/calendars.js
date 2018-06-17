// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


console.log("lets see")



function displayCalendar() {


    var htmlContent = "";
    var FebNumberOfDays = "";
    var counter = 1;


    var dateNow = new Date();
    var month = dateNow.getMonth();

    var nextMonth = month + 1; //+1; //Used to match up the current month with the correct start date.
    var prevMonth = month - 1;
    var day = dateNow.getDate();
    var year = dateNow.getFullYear();


    //Determing if February (28,or 29)  
    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            FebNumberOfDays = 29;
        } else {
            FebNumberOfDays = 28;
        }
    }


    // names of months and week days.
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]


    // days in previous month and next one , and day of week.
    var nextDate = new Date(nextMonth + ' 1 ,' + year);
    var weekdays = nextDate.getDay();
    var weekdays2 = weekdays
    var numOfDays = dayPerMonth[month];




    // this leave a white space for days of pervious month.
    while (weekdays > 0) {
        htmlContent += "<li class='days'></li>";

        // used in next loop.
        weekdays--;
    }

    // loop to build the calander body.
    while (counter <= numOfDays) {

        // When to start new line.
        if (weekdays2 > 6) {
            weekdays2 = 0;
            htmlContent += "</span><span>";
        }



        // if counter is current day.
        // highlight current day using the CSS defined in header.
        if (counter == day) {
            htmlContent += "<li class='days' onclick='alert(\"work!\")' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>" + nextMonth + "/" + counter + "/" + year + "</li>";
        } else {
            htmlContent += "<li class='days' onclick='alert(\"work!\")' onMouseOver='this.style.background=\"#FF0000\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"'>" + nextMonth + "/" + counter + "/" + year + "</li>";

        }

        weekdays2++;
        counter++;
    }



    // building the calendar html body.
    var calendarBody = " <ul class='calendar'><li class='month'><div colspan='7'>" +
        monthNames[month] + " " + year + "</li></ul>";
    calendarBody += "<ul class='weekdays'>  <li>Sun</li>  <li>Mon</li> <li>Tues</li>" +
        "<li>Wed</li> <li>Thurs</li> <li>Fri</li> <li>Sat</li> </ul>";
    calendarBody += "<ul class=\"days\">";
    calendarBody += htmlContent;
    calendarBody += "</ul></ul>";
    // set the content of div .
    document.getElementById("calendargrid").innerHTML = calendarBody;

    function modalPopup() {
        $('td').on('click', function(e) {
            $('#myModal').on('show.bs.modal', function(e) {
                if (!data)
                    return e.preventDefault() // stops modal from being shown
            })
        })
    }

    // var clickCount = 0
    // var clickCountMax = 2;

    // function clickEvent() {
    // $('.monthNow').on('click', function(e) {
    // getDescription()
    // e.preventDefault();
    // $(this).find('.card').toggleClass('flipped');
    // click.push($(this).find('img').attr('src'))
    // clickCount++
    // console.log(clickCount)
    // if (clickCount == 2) {
    //     $('.flip').off('click');
    //     e.preventDefault();
    //     check();
    //     // game over; code to handle that
    // }

    // });

}

// }

// function getDescription() {
//     //wrap in prompt box
//     eventDescription = prompt("ENTER A DESCRIPTION OF YOUR EVENT:");

//     if (eventDescription != null) {
//         //get date from context click 
//         date = $(this).getAttribute("id");
//         date = +date;
//         console.log(date); //testing
//         //write the description to the DOM
//         console.log(eventDescription); //testing
//         (function() { //pass in date as variable
//             document.getElementById(date).innerHTML = date + "&emsp;" + eventDescription;
//             //add class when selected
//             document.getElementById(date).className = "calendarCellSelected";
//         })(); //this will always execute when parent function called
//     };
// }

// function displayDescription(entryId) {
//     //writes description to correct ID in DOM
//     //refactored as IIFE in getDescription() above
// }