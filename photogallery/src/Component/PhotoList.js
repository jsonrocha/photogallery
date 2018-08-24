import React, { Component } from 'react'
import hobbies from '../Data/hobbies.json'
import {Link} from 'react-router-dom';

 class PhotoList extends Component {
  render() {
      if (!hobbies[this.props.match.params.category]){
          return <h3>Nothing was found...</h3>
      } else {
        return (
            <div>
              <header>{hobbies[this.props.match.params.category].title}</header>
              <p>{hobbies[this.props.match.params.category].description}</p>
              <section>
                  {
                      hobbies[this.props.match.params.category].photos.map((photo, i) => {
                          return <Link to={`/${this.props.match.params.category}/${i}`}>
                          <img src={photo.imageURL} alt={photo.title} />
                          </Link>
                      })
                  }
                  </section>
            </div>
          );
      }
  }
}

export default PhotoList;
