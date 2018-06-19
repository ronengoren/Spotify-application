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
            htmlContent += "<li class='daysactive' id=" + nextMonth + '-' + counter + '-' + year + " onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' " +
                "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'><button type='button' id=" + nextMonth + '-' + counter + '-' + year + " class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Open Modal</button>" + "<br>" + counter + "</li>";

        } else {
            htmlContent += "<li class='alldays' id=" + nextMonth + '-' + counter + '-' + year + " onMouseOver='this.style.background=\"#FF0000\"'" +
                " onMouseOut='this.style.background=\"#FFFFFF\"'><button id=" + nextMonth + '-' + counter + '-' + year + " type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Open Modal</button>" + "<br>" + counter + "</li>";
        }
        weekdays2++;
        counter++;
    }

    $(document).ready(function() {
            $("button").click(function(e) {
                e.preventDefault()
                var eventDate = this.id.replace(/-/g, '/');
                console.log(eventDate)
                $("#start_date").val(this.id.replace(/-/g, '/'));
                var min = year - 90
                var randomYear = Math.floor(Math.random() * (year - min + 1)) + min;
                // console.log(randomYear)
                $(function() {
                    $.ajax({
                        type: "GET",
                        data: {
                            apikey: "d2534efb46fbe28c49449d58f2018e9d",
                            f_track_release_group_first_release_date_min: randomYear + nextMonth + counter,
                            f_track_release_group_first_release_date_max: year + nextMonth + counter,
                            format: "jsonp",
                            callback: "jsonp_callback"
                        },
                        url: "https://api.musixmatch.com/ws/1.1/track.search",
                        dataType: "jsonp",
                        jsonpCallback: 'jsonp_callback',
                        contentType: 'application/json',
                        success: function(data) {
                            var artist = "By: " + data.message.body.track_list[2].track.artist_name
                            var album = "Album: " + data.message.body.track_list[2].track.album_name
                            var track = data.message.body.track_list[2].track.track_name

                            $(".artist").append("<p>" + "<a href=#>" + track + "</a>" + "</p>");
                            $(".artist").append("<p>" + "<a href=#>" + artist + "</a>" + "</p>");
                            $(".artist").append("<p>" + "<a href=#>" + album + "</a>" + "</p>");

                            console.log(data);
                            console.log(data.message.body.track_list[2].track);
                            console.log(data.message.body.track_list[2].track.track_name);
                            console.log("Album Name: " + data.message.body.track_list[2].track.album_name);
                            console.log("By: " + data.message.body.track_list[2].track.artist_name);


                            console.log(artist)
                            console.log("you did it")
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log(jqXHR);
                            console.log(textStatus);
                            console.log(errorThrown);
                        }
                    });
                    $("#submitEvent").on("click", function() {
                        var val = $('.span11').map(function() {
                            return $(this).val();
                        })
                        console.log(val);
                        var text1 = $('input').text();
                        var text = $("input").val(text)
                            // alert(str)
                        var ididididi = this.id
                        $("form").submit(function(event) {
                            event.preventDefault();
                            alert(text)
                        });
                        $("#musix").remove();
                        // var target = $(this).attr("href");
                        // console.log(target)
                        // $("#myModal .modal-body").load(target, function() {
                        //     $("#myModal").modal("show");
                        // });
                        console.log('close btn click on fail modal')
                    })
                });


                // $.ajax({
                //     url: "/calendars/heartbeat/" + eventDate,
                //     type: "post",
                //     data: eventDate,
                //     success: function() {
                //         alert('Saved Successfully');
                //     },
                //     error: function() {
                //         alert('Error');
                //     }
                // });
            });
        })
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