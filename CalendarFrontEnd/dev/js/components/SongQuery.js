import React from 'react';
import { connect } from "react-redux";
import Musix from './Musix';


const SongQuery = (props) => {
return (
  <div className="Card">
    <h1>{props.songs}</h1>
  </div>
  );
}

export default SongQuery;