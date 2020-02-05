import React from 'react';
import './App.css';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'
import FavoritePhotosContainer from './components/FavoritePhotosContainer'
import AddNewPhotoForm from './components/AddNewPhotoForm'

class App extends React.Component{

  state={
    photos: [],
    favPhotos:[],
    clickedFav: false,
    formButton: false,
    allPhotoButton: true
  }

  componentDidMount() {
    fetch(`http://localhost:3000/photos`)
    .then(r => r.json())
    .then((photos) => {
      this.setState({
        photos
      })
    })
  }

//here we are getting the Object on Click
//then we push it to the favPhotos and set the state
  handleFavs=(photoObj)=>{
    // console.log(photoObj);
    if (!this.state.favPhotos.includes(photoObj)){
      let photoArr = [...this.state.favPhotos, photoObj]
      this.setState({
        favPhotos: photoArr
      })
    }
  }

  handleFavClick=(evt)=>{
    this.setState({
      clickedFav: true,
      formButton: false,
      allPhotoButton: false,
    })
  }

  handleFormClick=(evt)=>{
    this.setState({
      formButton: true,
      clickedFav: false,
      allPhotoButton: false,
    })
  }

  handleAllPhotoClick=(evt)=>{
    this.setState({
      allPhotoButton: true,
      formButton: false,
      clickedFav: false,
    })
  }

  addNewPhoto=(newPhotoObj)=>{
    console.log(newPhotoObj);
    let newId = this.state.photos.length + 1
    let newPhoto = {... newPhotoObj, id: newId}
    let newPhotoArray = [...this.state.photos, newPhoto]
    this.setState({
      photos: newPhotoArray
    })

  }

  removeFav=(photoObj)=>{
    console.log(photoObj);
    let filteredFav = this.state.favPhotos.filter(photo=>{
      return photo.id !== photoObj.id
    })
    this.setState({
      favPhotos: filteredFav
    })
  }


  render(){
    // console.log(this.state.favPhotos);
    // console.log(this.state.photos);
    return (
      <div className="App">
          <Header handleAllPhotoClick={this.handleAllPhotoClick} handleFormClick={this.handleFormClick} handleFavClick={this.handleFavClick}/>
          {/* Only one of the components in the bottom should render */}
          {/* How can we manage that? */}
          { this.state.formButton ? <AddNewPhotoForm addNewPhoto={this.addNewPhoto}/> : null}
          { this.state.allPhotoButton ? <PhotoContainer handleFavs={this.handleFavs} photos={this.state.photos}/> : null}
          { this.state.clickedFav ? <FavoritePhotosContainer removeFav={this.removeFav} favPhotos={this.state.favPhotos} clickedFav={this.state.clickedFav}/> : null}
      </div>
    )
  }
}

export default App;
