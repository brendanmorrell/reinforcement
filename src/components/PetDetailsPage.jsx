import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';

import Thumbnail from './Thumbnail.jsx';
import { addFavorite } from '../redux/actions/userDataActions.js';

class PetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {
      description: { $t: description },
      age: { $t: age },
      name: { $t: name },
      size: { $t: size },
      sex: { $t: sex },
      animal: { $t: animal },
      id: { $t: id },
      options: { option },
      mix: { $t: mix },
      breeds: { breed },
      contact: {
        phone: { $t: phone },
        state: { $t: state },
        email: { $t: email },
        city: { $t: city },
        zip: { $t: zip },
        fax: { $t: fax },
        address1: { $t: address1 },
      },
      shelterId: { $t: shelterId },
      shelterPetId: { $t: shelterPetId },
    } = this.props.petInfo;
    if (breed) {
      if (breed.constructor.name === 'Object') breed = Object.values(breed);
      breed = breed
        .map(x => (x.constructor.name === 'Object' ? x['$t'] : x))
        .map((x, i, arr) => (i < arr.length - 1 ? x + ', ' : x));
    }
    if (option) {
      if (option.constructor.name === 'Object') option = Object.values(option);
      option = option.map(x => x['$t']).map((x, i, arr) => (i < arr.length - 1 ? x + ', ' : x));
    }
    let petInfo = Object.assign(
      {
        description,
        age,
        name,
        size,
        sex,
        animal,
        id,
        option,
        mix,
        breed,
        phone,
        state,
        email,
        city,
        zip,
        fax,
        address1,
        shelterId,
        shelterPetId,
      },
      { petID: null }
    );
    let thumbnails = this.props.petInfo.media.photos.photo
      .filter(x => x['@size'] === 'x')
      .map((x, i) => {
        if (i === 0) petInfo.petID = x['$t'];
        return (
          <div>
            <Thumbnail src={x['$t']} />
            <h1 onClick={() => this.props.addFavorite(petInfo)}>click</h1>
          </div>
        );
      });
    return (
      <div>
        <Carousel framePadding={'0px'} dragging={true} initialSlideHeight={300} autoplay={true}>
          {thumbnails}
        </Carousel>
        {description && <p>{description}</p>}
        <ul>
          {name && <li>{`name: ${name}`}</li>}
          {animal && <li>{`animal: ${animal}`}</li>}
          {breed &&
            breed.length && (
              <li>
                {`breed:`} {breed}
              </li>
            )}
          {mix && <li>{`mix: ${mix}`}</li>}
          {size && <li>{`size: ${size}`}</li>}
          {age && <li>{`age: ${age}`}</li>}
          {sex && <li>{`sex: ${sex}`}</li>}
          {option &&
            option.length && (
              <li>
                {`Additonal info:`} {option}
              </li>
            )}
          <li>
            <div>
              <ul>
                {phone && <li>{`Phone: ${phone}`}</li>}
                {email && <li>{`Email: ${email}`}</li>}
                {fax && <li>{`Fax: ${fax}`}</li>}
                {(address1 || city || stae || zip) && (
                  <li>
                    {`Address: ${address1} ${city}, ${state} ${zip}`.replace(/undefined\,/, '')}
                  </li>
                )}
                {shelterId && <li>Shelter ID: {shelterId}</li>}
                {shelterPetId && <li>Animal ID: {shelterPetId}</li>}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = ({ petSearch }, ownProps) => {
  return {
    petInfo: petSearch.searchResults.filter(x => x.id['$t'] === ownProps.match.params.id)[0],
  };
};
export default connect(
  mapStateToProps,
  { addFavorite }
)(PetDetails);
