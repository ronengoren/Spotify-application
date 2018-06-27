// import React, {Component} from 'react';
// import {Link} from 'react-router'; 
// import axios from 'axios';
// import {Router, browserHistory} from 'react-router'; 
// import MusixMatchAPIService from '../services/MusixMatchAPIService'
// import SongList from './SongList';
// import SongDisplay from './SongDisplay';
// import SongSearch from './SongSearch';
// import {connect} from 'react-redux';
// import ReactDOM from 'react-dom';
// import SongQuery from './SongQuery';

// var release_date_min = "2018" + "05" + "13";
// var release_date_max = "2018" + "05" + "13";


// class Musix extends React.Component {
//   constructor(props)  {
//     super(props);
//     this.state = { songs: [] };
//     // var min = year - 90
//     // var randomYear = Math.floor(Math.random() * (year - min + 1)) + min;

//     axios.get('http://api.musixmatch.com/ws/1.1/track.search', {
//         params: {
//           apikey: "d2534efb46fbe28c49449d58f2018e9d",
//           f_track_release_group_first_release_date_min: release_date_min,
//           f_track_release_group_first_release_date_max: release_date_max,
//           format: "JSON"

//         }
//       })
//       .then((res) => {
//         const albums = "Album Title: " + res.data.message.body.track_list[2].track.album_name + " Artist: " + res.data.message.body.track_list[2].track.artist_name + " Track Name: " + res.data.message.body.track_list[2].track.track_name + " First release date: " + res.data.message.body.track_list[2].track.first_release_date
//         this.setState({albums});
//         console.log(res.data.message.body.track_list)
//         console.log(albums)
//       })
//       .catch((error) => {
//         // console.log(error);
//     });

//   }

//   render() {
//     return (
//       <div>
//        {/* <div className="header">This Song was realeased today 90 years ago:</div> */}
//       <p>{this.state.albums}</p> 

//       {/* <div className="spotifyLink">Listen to this song on Spotify!</div> */}

//     </div>
//     );
//   }
// }


//   export default Musix;




