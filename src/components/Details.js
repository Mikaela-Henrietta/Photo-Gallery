import React from 'react';
import { Link } from 'react-router-dom';
import { getPhotoAction,clearPhotoAction } from '../redux/actions';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageStatus: 'loading'
    }
  }
  componentWillMount() {
    this.props.getPhotoAction(this.props.match.params.id);
  }
  componentWillUnmount(){
    this.props.clearPhotoAction();
  }
  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }
  render() {
    if (this.props.photo && this.props.photo.url) {
      return (
        <div className={"detailsContainer"}>
          <div className={"headingContainer"}>
            <Link to={'/'}>
              <FontAwesomeIcon className={"arrowLeft"} icon={faAngleLeft}/>
            </Link>
            <h1>Details</h1>
          </div>
          <div className={"photoContainer"}>
            <img className={"bigImage " + this.state.imageStatus} 
              onLoad={this.handleImageLoaded.bind(this)} 
              src={this.props.photo.url}/>
            <div className={"infoContainer"}>
              <h3 className={"h2"}>Title:</h3>
              <div className={"titleContainer"}>
                <h2>{this.props.photo.title.toUpperCase()}</h2>
                 <Link to={'/'} className={"backButton"}>BACK</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
    <div className={"detailsContainer"}>
      <div className={"headingContainer"}>
        <Link to={'/'}>
          <FontAwesomeIcon className={"arrowLeft"} icon={faAngleLeft}/>
        </Link>
      </div>
    </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    photo: state.photo
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPhotoAction: (id) => dispatch(getPhotoAction(id)),
  clearPhotoAction: () => dispatch(clearPhotoAction())
});

export default connect(mapStateToProps, mapDispatchToProps) (Details);
