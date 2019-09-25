import React, { useState, useEffect} from 'react'
import items from './data'
import Client from './contentful'
import { get } from 'https'


 const RoomContext=React.createContext()
const RoomProvider = ({children}) => {
  
   const [rooms,setRooms]  =useState([])
   const [sortedRooms,setSortedRooms]  =useState([])
   const [featuredRooms,setFeaturedRooms]  =useState([])
   const [loading,setLoading]  =useState(true)


const[values,setValues]=useState({
   type:'all',
   capacity:1,
   price:0,
   minPrice:0,
   maxPrice:0,
   minPrice:0,
   maxSize:0,
   minSize:0,
   breakfast:false,
   pets:false


});


const getData=async ()=>{
    try{
        let response= await Client.getEntries({
            content_type:"reactresortroom",
            order:"sys.createdAt"
        })
        console.log(response.items)
        let rooms = formatData(items||response.items)
    let featuredRooms=rooms.filter((room)=>
    room.featured===true)
    let maxPrice= Math.max(...rooms.map(item =>{
        return item.price
    }))

    let maxSize= Math.max(...rooms.map(item =>{
        return item.size
    }))


    setRooms(rooms)
    setSortedRooms(rooms)
    setFeaturedRooms(featuredRooms)
    setLoading(false)
    setValues(values => ({...values,price:maxPrice, maxPrice:maxPrice, maxSize:maxSize}))
    }
    catch(error){
        console.log(error)
    }
}
 
useEffect(() => {
    getData()
   
}, [])
  const formatData =(items)=>{
    let tempItems= items.map(item =>{
        let id=item.sys.id
        let images= item.fields.images.map((image)=>{
            return image.fields.file.url
        })
        let room={...item.fields, id,images, id:id}
        return room
    })
    return tempItems
  }
  
  const handleChange=event=>{
      const {type,name}=event.target
      const value= type==='checkbox'?
      event.target.checked:event.target.value
      console.log(value)
   setValues(values =>({...values, [name]:value}))
   
  }


useEffect(() => {
    return  filterRooms()
     
  }, [values])

  //filter function
  const filterRooms=()=>{
    let {type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=values
    capacity=parseInt(capacity)
    price=parseInt(price)
    let roomss=rooms
    let tempRooms=[...roomss]
    
    if(type !=='all'){
        tempRooms=tempRooms.filter(room=>{
            return room.type===type
        })
    }
    if(capacity >1){
        tempRooms=tempRooms.filter(room=>{
            return room.capacity===capacity
        })
    }

  
        tempRooms=tempRooms.filter(room=>{
            return room.price<=price
        })
    
        tempRooms=tempRooms.filter(room=>{
            return room.size>=minSize && room.size<=maxSize
        })

        if(breakfast){
            tempRooms=tempRooms.filter(room=>{
                return room.breakfast===true
            })
        }
        if(pets){
            tempRooms=tempRooms.filter(room=>{
                return room.pets===true
            })
        }

    setSortedRooms(tempRooms)
  }

const getRoom=(id)=>{
    let tempRooms=[...rooms]
    const room= tempRooms.find(room=> room.slug===id)
    return room
}
const passingValues={
    rooms,
    sortedRooms,
    featuredRooms,
    loading,
    getRoom,
    handleChange,
    values
}


    return (
        <RoomContext.Provider value={{passingValues}}>

            {children}
        </RoomContext.Provider>
    );
}

export {RoomContext,RoomProvider};
