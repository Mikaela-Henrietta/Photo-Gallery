import React from 'react';
import Card from './Card';
import { getPhotosAction } from '../redux/actions';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    }
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.moveHome = this.moveHome.bind(this);
  }
  componentDidMount() {
    this.props.getPhotosAction()
  }
  currentPage() {
    const pageSize = 24
    let start = pageSize * this.state.page - pageSize
    let end = pageSize * this.state.page 
    return this.props.photos.slice(start, end)
  }
  nextPage() {
    this.setState({page: this.state.page + 1})
  }
  previousPage() {
    if (this.state.page > 1) {
      this.setState({page: this.state.page - 1})
    }
  }
  moveHome() {
   this.setState({page:1})
  }

  render() {
    return (
      <div>
        <div className="galleryHeadingContainer">
          <h1 className="heading">Photo Gallery</h1>
          <div className="navigationButtonContainer">
            <button className="navigationButton" onClick={this.previousPage}>PREVIOUS</button>
            <button className="navigationButton" onClick={this.nextPage}>NEXT</button>
            <FontAwesomeIcon className="homeIcon" onClick={this.moveHome} icon={faHome}/>
          </div>
        </div>
        <div className="cardsContainer">
          {this.currentPage().map((photo, index) => {
            return <Card photo={photo.thumbnailUrl} id={photo.id} key={index}></Card>
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPhotosAction: () => dispatch(getPhotosAction()),
});

export default connect(mapStateToProps, mapDispatchToProps) (App);