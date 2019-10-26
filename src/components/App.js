import React from 'react';
import Card from './Card';
import { getPhotosAction } from '../redux/actions';
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.nextPage = this.nextPage.bind(this);
  }
  componentDidMount() {
    this.props.getPhotosAction()
  }
  currentPage() {
    const pageSize = 12
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

  render() {
    const { photos } = this.props
    return (
      <div>
        <h1 className="heading">Photo Gallery</h1>
        <button onClick={this.nextPage}>next</button>
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