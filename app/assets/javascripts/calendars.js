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
            htmlContent += "<li class='days' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'><button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Open Modal</button>" + "<br>" + nextMonth + "/" + counter + "/" + year + "</li>";

        } else {
            htmlContent += "<li class='days' onMouseOver='this.style.background=\"#FF0000\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"'><button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Open Modal</button>" + "<br>" + nextMonth + "/" + counter + "/" + year + "</li>";


        }

        weekdays2++;
        counter++;

    }

    function modalPopup() {
        console.log('clickCount')


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





}




$(function() {

    $.ajax({
        type: "GET",
        data: {
            apikey: "d2534efb46fbe28c49449d58f2018e9d",
            f_track_release_group_first_release_date_min: "19860514",
            f_track_release_group_first_release_date_max: "19860514",
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "http://api.musixmatch.com/ws/1.1/track.search",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
            var artist = "By: " + data.message.body.track_list[2].track.artist_name

            $(".inner").append("<p>" + artist + "</p>");
            // console.log(data);
            // console.log(data.message.body.track_list[2].track);
            // console.log(data.message.body.track_list[2].track.track_name);
            // console.log("Album Name: " + data.message.body.track_list[2].track.album_name);
            // console.log("By: " + data.message.body.track_list[2].track.artist_name);


            console.log(artist)
            console.log("you did it")
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
});