import React from 'react';
import Card from './Card';
import { getPhotosAction } from '../redux/actions';
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.getPhotosAction()
  }
  render() {
    const { photos } = this.props
    return (
      <div>
        <h1 className="heading">Photo Gallery</h1>
        <div className="cardsContainer">
          {photos.map((photo, index) => {
            return <Card photo={photo.thumbnailUrl} id={photo.id} key={index}></Card>
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    photos: state.photos.slice(0,12)
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPhotosAction: () => dispatch(getPhotosAction()),
});

export default connect(mapStateToProps, mapDispatchToProps) (App);