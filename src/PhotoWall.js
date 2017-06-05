import React, { Component } from 'react';
import './PhotoWall.css';

const images = [
  'https://goo.gl/f0G7EG',
  'https://goo.gl/2IEGIY',
  'https://goo.gl/2weLSz',
  'https://goo.gl/jfkjAT',
  'https://goo.gl/6URmEv',
  'https://goo.gl/28gGiJ',
  'https://goo.gl/BEL4u7',
  'https://goo.gl/NGuhtC',
  'https://goo.gl/MbNDNf',
  'https://goo.gl/5jj0Ap',
  'https://goo.gl/3561SH',
  'https://goo.gl/V6dSg1',
  // 'https://unsplash.it/200/200/?random&sig=1',
  // 'https://unsplash.it/200/200/?random&sig=2',
  // 'https://unsplash.it/200/200/?random&sig=3',
  // 'https://unsplash.it/200/200/?random&sig=4',
];

export default class PhotoWall extends Component {
  render() {
    return (
      <div id="photoWall">
        {
          images.map(image =>
            <div className="photo">
              <img src={image} alt="image"/>
            </div>
          )
        }
      </div>
    );
  }
}