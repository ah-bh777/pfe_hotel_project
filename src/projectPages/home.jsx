import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "./itemComp"
import Responsive from "./chambreSwiper"

export default function CarouselPics() {
    var items = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];

    return (
        <>
            <Carousel>
                {items.map((item) => <Item item={item} />)}
            </Carousel>
            <br />
            <p style={{ fontFamily: 'serif', fontSize: '1.2rem', textAlign: 'center', fontStyle: 'italic' }}>Découvrez nos chambres luxueuses</p>
            <Responsive />
        </>
    );
}
