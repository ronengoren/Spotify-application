import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form'; 

import dateFns from "date-fns";
import {connect} from 'react-redux';
import {getEvents} from '../actions/index'; 
import {getEvent, deleteEvent} from '../actions/index'; 
import {createEvent} from '../actions/index'; 
import NewEvent from './NewEvent';
import EventsHome from './EventsHome'
import {Link} from 'react-router'; 
import ReactDOM from 'react-dom';
// import Musix from './Musix'
import axios from 'axios';

import "../../scss/style.scss";


var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Month(year, month, dates){
	this.date          = new Date(year,month,0);
	this.numberofdays  = this.date.getDate();
	this.numberofmonth = this.date.getMonth();
	this.nameofmonth   = MonthNames[this.date.getMonth()];
	this.firstday      = 1;
	this.year          = this.date.getFullYear();
	this.calendar      = generateCalendar(this.numberofdays, year, month-1, this.firstday, dates);
}

function Date2Day(year, month, day){
	return (new Date(year,month,day)).getDay();
}

function generateCalendar(numberofdays, year, month, day, dates){
	var WEEKDAY = daysOfWeek[Date2Day(year,month,day)];
	if(WEEKDAY in dates){
		dates[WEEKDAY].push(day);
	}else{
		dates[WEEKDAY] = [day];
	}
	day++;
	return day > numberofdays ? dates : generateCalendar(numberofdays, year, month, day, dates);
}

function addZero(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

function resetColors(){
	var defaultColor = {color:"#2980b9"};
	var color1       = {color:"#DB1B1B"};
	var color2       = {color:"#8BB929"};
	var color3       = {color:"#E4F111"};
	var color4       = {color:"#8129B9"};
	var color5       = {color:"#666666"};
	return {dColor:defaultColor, color1:color1, color2:color2, color3:color3, color4:color4, color5:color5};
}

Date.daysBetween = function( date1, date2 ) {
  var firstDate = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  var secondDate = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  var diference = (secondDate - firstDate) / 86400000;
  return Math.trunc(diference);
}

var Calendar = React.createClass({
	getInitialState: function(){return this.generateCalendar()},
	generateCalendar: function(){
		var today        = new Date();
		var present      = new Date();
		var month        = {};
		var entries      = [];
		var defaultColor = {color:"#2980b9"};
		var color1       = {color:"#DB1B1B"};
		var color2       = {color:"#8BB929"};
		var color3       = {color:"#E4F111"};
		var color4       = {color:"#8129B9"};
		var color5       = {color:"#666666"};
		var file 		 = {};

		month = new Month(today.getFullYear(), today.getMonth() + 1, month);
		return {dates:month, today:today, entry:'+', present:present, entries:entries, dColor:defaultColor, color1:color1, color2:color2, color3:color3, color4:color4, color5:color5, file:file};

	},
  
  update: function(direction){
		var month = {};
		if(direction == "left"){
			month = new Month(this.state.dates.date.getFullYear(), this.state.dates.date.getMonth(), month);
		}else{
			month = new Month(this.state.dates.date.getFullYear(), this.state.dates.date.getMonth() + 2, month);
		}
		this.state.currDay = "";
		this.state.currMonth = "";
		this.state.currYear = "";
		$(".float").removeClass('rotate');
		return this.setState({dates:month});
  },
  selectedDay: function(day){
		this.state.warning = "";
		var selected_day   = new Date();
		selected_day.setDate(day);
		

		var currentMonth   = this.state.dates.nameofmonth;
		var currentMonthN  = this.state.dates.numberofmonth;
		var currentYear    = this.state.dates.date.getFullYear();
		
		console.log("currDay " + selected_day)
		return this.setState({today:selected_day, currDay:day, currMonth:currentMonth, currYear:currentYear, currMonthN:currentMonthN});
		$('#start_date').val(selected_day)
	},
  returnPresent: function(){
		if($(".float").hasClass('rotate')){
			$(".float").removeClass('rotate');
			$("#add_entry").addClass('animated slideOutDown');
			window.setTimeout( function(){
                $("#add_entry").css('display','none');
            }, 400);
			$("#entry_name").val("");
		}
		var month            = {};
		var today            = new Date();
		month                = new Month(today.getFullYear(), today.getMonth() + 1, month);
		this.state.currDay   = "";
		this.state.currMonth = "";
		this.state.currYear  = "";
		$(".float").removeClass('rotate');
		return this.setState({dates:month, today:today});

	},
	addEntry: function(day){
		if(this.state.currDay){
			if($(".float").hasClass('rotate')){
				$(".float").removeClass('rotate');
				$(".entry").css('background', 'none');
				$("#open_entry").addClass('animated slideOutDown');
				$("#add_entry").addClass('animated slideOutDown');
				window.setTimeout( function(){
	                $("#add_entry").css('display','none');
	                $("#open_entry").css('display','none');
	            }, 400);
				$("#entry_name").val("");
				$("#entry_date").val("");
				var resColor = new resetColors();
				return this.setState(resColor);
			}else{
				$(".float").addClass('rotate');
				$("#add_entry").removeClass('animated slideOutDown');
				$("#add_entry").addClass('animated slideInUp');
				$("#add_entry").css('display', 'block');
				window.setTimeout( function(){
	                $("#entry_name").focus();
	            }, 400);

			}
		}else{
			return this.setState({warning:"Pick some dates!"});
		}
	},
	saveEntry: function(year, month, day){
		var entryName = $("#entry_name").val();
		if($.trim(entryName).length > 0){
			var entryTime = new Date();
			var entryDate = {year,month,day};
console.log("hey"+ entryDate)
			var entry = {entryName,entryDate,entryTime};
			this.state.entries.splice(0,0,entry);

			// clean and close entry page
			$(".float").removeClass('rotate');

			$("#add_entry").addClass('animated slideOutDown');
			window.setTimeout( function(){
	            $("#add_entry").css('display','none');
	        }, 400);
			var babe = $("#entry_name").val("");
			console.log(babe)
			$("#entry_date").val("");
			
			// reset entry colors

			return (this.setState({entries: this.state.entries}), this.setState(resColor));
		}
	},
	deleteEntry: function(e){
		this.state.entries.splice(e,1);
		$(".float").removeClass('rotate');
		$("#open_entry").addClass('animated slideOutDown');
		$("#add_entry").addClass('animated slideOutDown');
		window.setTimeout( function(){
            $("#add_entry").css('display','none');
            $("#open_entry").css('display','none');
        }, 400);
        $(".entry").css('background', 'none');
		$("#entry_name").val("");
		$("#entry_date").val("");
		return (this.setState({entries: this.state.entries}), this.setState(resColor));
	},
	openEntry: function(entry, e){
		if($(".float").hasClass('rotate')){
			$(".float").removeClass('rotate');
			$("#open_entry").addClass('animated slideOutDown');
			window.setTimeout( function(){
                $("#open_entry").css('display','none');
            }, 400);
            $(".entry").css('background', 'none');
            $("#"+e).css('background', 'none');
		}else{
			window.setTimeout( function(){
               	$("#open_entry").removeClass('animated slideOutDown');
				$("#open_entry").addClass('animated slideInUp');
				$("#open_entry").css('display', 'block');
            }, 50);
			$(".float").addClass('rotate');
			$("#"+e).css('background', '#F1F1F1');
			return this.setState({openEntry: entry});
		}
	},
	openMenu: function(){
		$("#menu").css('display', 'block');
		$("#menu-content").addClass('animated slideInLeft');
		$("#menu-content").css('display', 'block');
		
	},
	render: function(){
	
		<main>
        {this.props.children}
      </main>
		var calendar = [];
		for(var property in this.state.dates.calendar){
			calendar.push(this.state.dates.calendar[property])
		}
		var weekdays = Object.keys(this.state.dates.calendar);
		var done = false;
		var count = 0;
		var daysBetween = '';
		

		if(this.state.openEntry){
			var selectdDate = new Date(this.state.openEntry.entryDate.year, this.state.openEntry.entryDate.month, this.state.openEntry.entryDate.day);
			if(selectdDate > this.state.present){
				daysBetween = Date.daysBetween(this.state.present, selectdDate);
				if(daysBetween == 1){daysBetween = "Tomorrow"}else{daysBetween = daysBetween + " days to go";}
			}else if(selectdDate < this.state.present){
				daysBetween = Date.daysBetween(selectdDate, this.state.present);
				if(daysBetween == 1){daysBetween = "Yesterday"}else{daysBetween = daysBetween + " days ago";}
			}
			if(this.state.present.getDate() === this.state.openEntry.entryDate.day && this.state.present.getMonth() === this.state.openEntry.entryDate.month && this.state.present.getFullYear() === this.state.openEntry.entryDate.year){
				daysBetween = "Today";

			}
		}
		return(
			<div>
				<div id="calendar">
					<div id="menu">
						<div id="menu-content">
							<div className="madeBy">
								<div className="madeOverlay">
								
								</div>
							</div>
						</div>
						<div id="click-close"></div>
					</div>
					<div id="header">
						<i className="fa fa-bars" aria-hidden="true" onClick={this.openMenu}></i>
						<p>{this.state.dates.nameofmonth} {this.state.dates.year}</p>
						<div><i onClick={this.returnPresent} className="fa fa-calendar-o" aria-hidden="true"><span>{this.state.present.getDate()}</span></i></div>
						<i className="fa fa-search" aria-hidden="true"></i>
					</div>
				
					
					<div id="add_entry">
					
						<div className="enter_entry">
						</div>
						<div className="entry_details">
					<div id="create_form">

							hey
						</div>
							<div>

							</div>
						</div>
					</div>
					{this.state.openEntry ?
						<div id="open_entry">
								<div className="overlay"><div>
									<p>
									</p>
								</div></div>
							<div className="entry openedEntry"><div>
							</div></div>
							<div className="entry openedEntry noteDiv"><div>
								<i className="fa fa-pencil" aria-hidden="true"></i> {this.state.openEntry.entryNote ? <span id="note">{this.state.openEntry.entryNote}</span> : <span>No description</span>}
							</div></div>
						</div>
					: null}
					<div id="arrows">
						<i className="fa fa-arrow-left" aria-hidden="true" onClick={this.update.bind(null,"left")}></i>
						<i className="fa fa-arrow-right" aria-hidden="true" onClick={this.update.bind(null,"right")}></i>
					</div>
					<div id="dates">
						{calendar.map(function(week, i){
							return (
								<div key={i}>
									<p className="weekname">{weekdays[i].substring(0,3)}</p>
									<ul>
										{week.map(function(day, k){
											var existEntry = {};
											{this.state.entries.map(function(entry, e){
												if(entry.entryDate.day == day && entry.entryDate.month == this.state.dates.numberofmonth && entry.entryDate.year == this.state.dates.year){
													existEntry = {borderWidth:"2px", borderStyle:"solid", borderColor:"#8DBEDE"};
													return;
												}
											}.bind(this))}
											
										return <li className={day === this.state.today.getDate() ? "today" : null} key={k} style={existEntry} onClick={this.selectedDay.bind(null, day)}>{day}</li>
										}.bind(this))}
										
									</ul>
								</div>
								
							)
					
						
						}.bind(this))}
					</div>

					{this.state.warning ? 
						<div className="warning">
							{this.state.warning}
						</div>
					: null }
					<div id="ignoreOverflow"><button className="float" onClick={this.addEntry.bind(null, this.state.today.getDate())}>{this.state.entry}</button></div>
				</div>
				{this.state.currDay ? 
					<div id="entries">
						<div className="contain_entries">
							<div id="entries-header">
						
								<p className="entryDay">{this.state.currDay} {this.state.currMonth}</p>
								{this.state.present.getDate() === this.state.currDay && this.state.present.getMonth() === this.state.currMonthN && this.state.present.getFullYear() === this.state.currYear ? <p className="currday">TODAY</p> : null}
							</div>
							
							<div id="musix">
									<Musix />
									<div>
								<EventsHome />		    
									</div>
									</div>
									
							{this.state.entries != '' ?
								<div>

									{this.state.entries.map(function(entry, e){
										count++;
										var entryFromThisDate = (entry.entryDate.day === this.state.currDay && entry.entryDate.month === this.state.currMonthN && entry.entryDate.year === this.state.currYear ? true : false);
										if(entryFromThisDate){
											// prevent the "no-entries" div to appear in the next entries that are not from this day
											done = true;
											var style = {borderLeftColor:entry.entryColor.color, borderLeftWidth:"4px", borderLeftStyle:"solid"};
											return (
												<div className="entry" id={e} key={e}>
													<div style={style}>
														<div className="entry_left" onClick={this.openEntry.bind(null, entry, e)}>
															<p className="entry_event">{entry.entryName}</p>
														</div>
														<div className="delete_entry">
															<i className="fa fa-times" aria-hidden="true" onClick={this.deleteEntry.bind(null,e)}></i>
														</div>
													</div>
												</div>
											)
										}
										if(count === this.state.entries.length){
											if(!done){
												done = true;
												return (
													<div className="no-entries" key={e}>

														<i className="fa fa-calendar-check-o" aria-hidden="true"></i>
														<span>No events planned for today</span>
													</div>
												)
											}
										}
									}.bind(this))}
								</div>
							: 	<div className="no-entries">
									<i className="fa fa-calendar-check-o" aria-hidden="true"></i>
									<span>No events planned for today</span>
								</div>
							}
						</div>
					</div>
				: null}
			</div>
		)
	}
})

ReactDOM.render(<Calendar />, document.getElementById("app"));






function mapStateToProps(state){
  return {events: state.events.all } 
}

var release_date_min = "2018" + "05" + "13";
console.log("hello" + release_date_min)
var release_date_max = "2018" + "05" + "13";

class Musix extends React.Component {
	constructor() {  
        super();
        this.state = {
            songs: []
        }

    }
	componentDidMount()  {
	  // var min = year - 90
	  // var randomYear = Math.floor(Math.random() * (year - min + 1)) + min;

	  axios.get('http://api.musixmatch.com/ws/1.1/track.search', {
		  params: {
			apikey: "d2534efb46fbe28c49449d58f2018e9d",
			f_track_release_group_first_release_date_min: release_date_min,
			f_track_release_group_first_release_date_max: release_date_max,
			format: "JSON"
  
		  }
		})
	
		.then((res) => {
			this.setState(()=>{  
				return {
					todos: res.data
				}
			})
		  const albums = "Album Title: " + res.data.message.body.track_list[5].track.album_name + " Artist: " + res.data.message.body.track_list[5].track.artist_name + " Track Name: " + res.data.message.body.track_list[5].track.track_name + " First release date: " + res.data.message.body.track_list[5].track.first_release_date;
		  this.setState({albums});
		//   console.log(res.data.message.body.track_list)
		  console.log(albums)
		})
		.catch((error) => {
		  // console.log(error);
	  });
  
	}

	render() {
	  return (
		<div className="musix">
		<p>This Song was released today 90 years ago:</p>
		<p>{this.state.albums}</p> 

		<div className="spotifyLink">
		
		Listen to this song on Spotify!
  
	  </div><br/>		
	  <NewEvent />

	  	</div>

	  );
	}
  }


export default Calendar;
