import React from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map(flat => {
      return (<Flat
        name={flat.name}
        imageUrl={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        lat={flat.lat}
        lng= {flat.lng}
        key={flat.name}
        />
      );
    });
  };


    return (
      <div className="flat-list">
        {renderList()}
      </div>
    );

};

export default FlatList;
