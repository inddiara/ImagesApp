import React from 'react';

const ImageDetail = (props) => {
  return (
    <li className="media lst-group-item">
      <div className="media-left">
        <img src={props.image.link} />
        {props.image.title}
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
      </div>
    </li>
  );
};

export default ImageDetail;
