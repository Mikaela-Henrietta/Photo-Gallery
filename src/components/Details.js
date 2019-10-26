import React from 'react';
import { Link } from 'react-router-dom';
import { getPhotoAction } from '../redux/actions';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class Details extends React.Component {
  componentDidMount() {
    console.log('details', this)
    this.props.getPhotoAction(this.props.match.params.id)
  }
  render() {
    return (
      <div className={"detailsContainer"}>
        <div className={"headingContainer"}>
          <Link to={'/'}>
            <FontAwesomeIcon className={"arrowLeft"} icon={faAngleLeft}/>
          </Link>
          <h1>Details</h1>
        </div>
        <div className={"photoContainer"}>
          <img  className={"bigImage"} src={this.props.photo.url}/>
          <h3 className={"h2"}>Title:</h3>
          <div className={"titleContainer"}>
            <h2>{this.props.photo.title}</h2>
            <Link to={'/'} className={"linkButton"}>BACK</Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    photo: state.photo
  }
}
const mapDispatchToProps = (dispatch) => ({
  getPhotoAction: (id) => dispatch(getPhotoAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Details);
