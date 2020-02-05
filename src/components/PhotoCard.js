import React from 'react'

const PhotoCard = (props) => {
  // console.log(props.handleFavs)
  let handleClick=()=>{
    // console.log(props.photo);
    props.handleFavs(props.photo)
  }

  let handleRemove=()=>{
      props.removeFav(props.photo)
  }

// console.log(props.clickedFav);

    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img src={props.photo.download_url}/>
                </div>
                <div className="content">
                    <div className="header">{props.photo.author}</div>
                    <button disabled={props.clickedFav} onClick={handleClick} className="ui button blue">{props.clickedFav? "already Favorite" : "Add To Favorites"}</button>
                    { props.clickedFav ? <button onClick={handleRemove} className="ui button pink" >remove</button> : null}
                </div>
            </div>
        </div>
    )
}

export default PhotoCard
