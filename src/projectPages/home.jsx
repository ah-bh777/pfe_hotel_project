import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "./itemComp"
import ChambreInfos from "./chambreSwiper"
import ServiceInfos from "./serviceSwiper"

export default function CarouselPics() {
    var items = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];

    return (
        <>
                <Carousel>
                    {items.map((item) => <Item item={item} />)}
                </Carousel>
      
            <br />
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
           
                <p style={{ fontFamily: 'serif', fontSize: '1.2rem', textAlign: 'center', fontStyle: 'italic' }}>Découvrez nos chambres luxueuses</p>
                <ChambreInfos />
                </div>
            <br />
            
                <p style={{ fontFamily: 'serif', fontSize: '1.2rem', textAlign: 'center', fontStyle: 'italic' }}>Découvrez nos services luxueux</p>
                <ServiceInfos />
           
        </>
    );
}
