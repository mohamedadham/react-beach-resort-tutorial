import React, {useContext} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import {RoomContext} from '../Context'
import Loading from '../components/Loading'

const RoomContainer = () => {
const room = useContext(RoomContext)

const {loading, sortedRooms,rooms}=room.passingValues
if(loading){
    return <Loading />
}
    return (
        <div>
           
            <RoomsFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms} />

        </div>
    )
}

export default RoomContainer
