import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Rooms" >

                <Link to='/' className="btn-primary">
                    Return to home
                </Link>
            </Banner>
            </Hero>
            <RoomContainer />
        </>
    );
}

export default Rooms;