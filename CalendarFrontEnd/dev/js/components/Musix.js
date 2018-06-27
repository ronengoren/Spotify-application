import React, {Component} from 'react';
import {Link} from 'react-router'; 
import axios from 'axios';
import {Router, browserHistory} from 'react-router'; 
import MusixMatchAPIService from '../services/MusixMatchAPIService'
import SongList from './SongList';
import SongDisplay from './SongDisplay';
import SongSearch from './SongSearch';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import SongQuery from './SongQuery';





// class Musix extends React.Component {


//   render() {
//           return(
//             <div>Ronen</div>
//           );
//         }
// }
// export default TrackRow;


class Musix extends Component {
  constructor(props)  {
    super(props);

    this.state = { songs: [] };

    axios.get('http://api.musixmatch.com/ws/1.1/track.search?apikey=d2534efb46fbe28c49449d58f2018e9d&f_track_release_group_first_release_date_max=19830803&f_track_release_group_first_release_date_min=19830803', {
        params: {
          format: "JSON"
        }
      })
      .then((res) => {
        const albums = "Album Title: " + res.data.message.body.track_list[3].track.album_name + " Artist: " + res.data.message.body.track_list[3].track.artist_name + " Track Name: " + res.data.message.body.track_list[3].track.track_name + " First release date: " + res.data.message.body.track_list[3].track.first_release_date
        this.setState({albums});
        // console.log(this.state.songs.data.message.body.track_list[9].track.album_name)
        console.log(albums)
      })
      .catch((error) => {
        // console.log(error);
    });

  }

  render() {
    return (
      <div>
       {/* <div className="header">This Song was realeased today 90 years ago:</div> */}
      <p>{this.state.albums}</p> 

      {/* <div className="spotifyLink">Listen to this song on Spotify!</div> */}

    </div>
    );
  }
}
// class Musix extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = { songs: [] };
      
//         Axios.get('http://api.musixmatch.com/ws/1.1/track.search&apikey=d2534efb46fbe28c49449d58f2018e9d&f_track_release_group_first_release_date_max=19830803&f_track_release_group_first_release_date_min=19830803')
      
//         .then(songs) => {
//           this.setState({ songs });
//           console.log(this.state.songs)
//           })
//           .catch((error) => {
//             console.log(error);
//         });
//       }
//       render() {
//         return (
//           <div className="Card">
//             {/* <div className="header">This Song was realeased today 90 years ago:</div> */}
//             <SongDisplay songs={this.state.songs}/>
//             {/* <div className="spotifyLink">Listen to this song on Spotify!</div> */}

//           </div>
//         );
//       }
   
//   }


  export default Musix;




