import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class PhotoContainer extends Component {
  render() {
    // console.log(this.props.handleFavs);
    let photoCard = this.props.photos.map(photo => <PhotoCard handleFavs={this.props.handleFavs} photo={photo}/>)
    return (
    <div className="ui container">
      <h1>All Photos</h1>
      {/* Search Bar ? */}
      <div className="ui special cards three column grid">
          {photoCard}
      </div>
    </div>
    );
  }
}
