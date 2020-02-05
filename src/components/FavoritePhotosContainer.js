import React, { Component } from 'react';
import PhotoCard from './PhotoCard'

export default class FavoritePhotosContainer extends Component {

  render() {

    console.log(this.props.favPhotos);
    let favPhotoArr = this.props.favPhotos.map(photo=> <PhotoCard clickedFav={this.props.clickedFav} removeFav={this.props.removeFav} photo={photo}/>)

    return (
    <div className="ui container">
      <h1>Favorite Photos</h1>
      <div className="ui special cards three column grid">
           {favPhotoArr}
      </div>
    </div>
    );
  }
}
