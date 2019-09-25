import React, {useState, useContext} from 'react'
import {RoomContext} from '../Context' 
import defBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'

const SingleRoom = ({match}) => {

    const [id,setId]=useState(match.params.id)
    const [defBcg,setDefBcg]=useState()
    const context = useContext(RoomContext)
    
    const passingValues=context.passingValues
    console.log(passingValues.getRoom)
  const getRoom= context.passingValues.getRoom

  const room =getRoom(id)
 
  if(!room){
      return <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
              Return back to rooms
          </Link>
      </div>
  }
  const {name, description, capacity, size, price, extras,
breakfast, pets , images}=room
const[mainImg,...imgs]=images
       return (
<>
        <StyledHero img={mainImg}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {imgs.map((image,index) =>{
                 return   <img key={index} src={image} alt="" />
                })}
            </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>Price : ${price}</h6>
                        <h6>Size: {size} SQFT</h6>

                        <h6>Max Capacity : {capacity >1? `${capacity} people`:`${capacity} person` }</h6>
                        {pets?<h6>Pets are allowed</h6>:<h6>No pets are allowed</h6> }
                        <h6>{breakfast&&"free breakfast included"}</h6>
                    </article>

                </div>
                    <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                    {extras.map((item,index)=>{
                       return <li key={index}> {item}</li>
                    })
}
                    </ul>
                    </section>
        </section>
</>
    );
}

export default SingleRoom;