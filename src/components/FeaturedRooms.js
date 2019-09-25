import React, {useContext} from 'react'
import {RoomContext} from '../Context'
import Loading from "./Loading"
import Room from './Room'
import Title from './Title'
const FeaturedRooms = () => {
    const context=useContext(RoomContext)
    console.log(context)
    const {featuredRooms : rooms,loading}=context.passingValues
    
  
    return (
        <section className="featured-rooms">
            
          <Title title="Featured Rooms"/>
          <div className="featured-rooms-center">
              {loading?<Loading/>:
              rooms.map(room =>{
                 return <Room room={room} key={room.id} />
              })
              }
          </div>
      
           
             </section>
      
    );
}

export default FeaturedRooms;