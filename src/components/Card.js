import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {

  render() { 
    console.log(this)
    return (
        <div className="card">
          <Link to={'/details/' + this.props.id}>
            <img className="cardImage" src={this.props.photo}/>
          </Link>
        </div>
    );
  }
}
export default Card;