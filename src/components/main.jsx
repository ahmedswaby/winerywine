import React from 'react'
// Import Swiper React components
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// wine images 
import Pescaito from '../assets/imgs/pescaito.png'
import Hauts from '../assets/imgs/hauts.png'
import SousLaMer from '../assets/imgs/sousLaMer.png'
import Vespertine from '../assets/imgs/vespertine.png'
import Vinum from '../assets/imgs/vinum.png'

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
const Main = () => {

    const swiperSlideData = [
        {
        shortDesc: 'Spanish white with a school of ripe fruit',
        name: 'El Pescaito Vino',
        BoldTextinName: 'Blanco',
        taste: 'Bright floral aromas surface immediately when you uncork El Pescaito White Blend.',
        flavourNote: 'Nectorine, Wild berries, Spice',
        img: Pescaito,
        price: '$19.99',
        variletal: 'White Blend',
        },
        {
        shortDesc: 'A ruby red, medium-bodied organic blend A ruby red, medium-bodied organic blend',
        name: 'Les Hauts Bacchus',
        BoldTextinName:'Rouge',
        taste: 'Pour it and enjoy a nose of red fruits, a supple and fruity palate, and the way its lively character mingles.',
        flavourNote: 'Red cherries, Plum, Black currant',
        img: Hauts,
        price: '$19.99',
        variletal: 'Red Blend',
        },
        {
        shortDesc: 'Fruit-forward Zin softened with Tempranillo',
        name: 'Vespertine Hauts',
        BoldTextinName:'Zinfandel',
        taste: 'Typical of Zinfandel, the finish evokes sweet leather and layers of vanilla and coconut.',
        flavourNote: 'Blackberry, Spicy Cherry, Coconut',
        img: Vespertine,
        price: '$19.99',
        variletal: 'Zinfandel',
        },
        {
        shortDesc: 'A Floral and Citrusy California Rosé',
        name: 'Sous La Mer Vino',
        BoldTextinName:'Rosé',
        taste: 'A French Rosé through and through, this fruity, floral Rosé will hold its own in nearly any situation.',
        flavourNote: 'Nectorine, Wild berries, Spice',
        img: SousLaMer,
        price: '$19.99',
        variletal: '100% Grenache Blend',
        },
        {
        shortDesc: 'A Floral and Citrusy California Rosé',
        name: 'Vinum Hauts Chenin',
        BoldTextinName:'Blanc',
        taste: 'Chenin Blanc is a prime example of this palate-pleasing balance of rich fruit notes smoke.',
        flavourNote: 'Peach, Apple, Spice, Pineapple',
        img: Vinum, 
        price: '$19.99',
        variletal: '100% Chenin Blanc',
        }
    
    ]
    return (
        <main>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {swiperSlideData.map(item => (
                    <SwiperSlide>
                        <section>
                            <div className="container custom-container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="info">
                                            <h2 className="text-dark">{item.shortDesc}</h2>
                                            <h2 className="h1">{item.name} <b>{item.BoldTextinName}</b></h2>
                                            <div>
                                                <b>taste:</b>
                                                <p> {item.taste} </p>
                                            </div>
                                            <div>
                                                <b>Flavor Notes :</b>
                                                <p>
                                                    {item.flavourNote}
                                                </p>
                                            </div>
                                            <div>
                                                <b>VariIetal  :</b>
                                                <p>{item.variletal}</p>
                                            </div>
                                            <a href="#" className="btn btn-dark mt-3">SHOP NOW - {item.price}</a>
                                        </div>
                                    </div>
                                    <div className="col-md-5 offset-md-1">
                                        <img src={item.img} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="social-media">
                <a href="#">facebook</a>
                <span> - </span>
                <a href="#">Instagram</a>
                <span> - </span>
                <a href="#">twitter</a>
                <span> - </span>
                <a href="#">youtube</a>

            </div>
        </main>
    )
}

export default Main;
