import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return (
    <section>
      <h2 className="title">Our Tours</h2>
      <div className="underline"></div>
    <div>
      {
      tours.map((tour)=>{
        return <Tour key={tour.id} removeTour={removeTour} {...tour}></Tour>
      })
      }
    </div>
    </section>
  );};

export default Tours;
