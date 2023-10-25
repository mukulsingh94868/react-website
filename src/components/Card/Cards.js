import React from 'react'
import CardItem from './CardItem';
import './cards.css';
import Image9 from '../../assets/image9.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import Image4 from '../../assets/image4.jpg';
import Image8 from '../../assets/image8.jpg';

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Image9}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={Image2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={Image3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={Image4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={Image8}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;