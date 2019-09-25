import React, {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

//get all unique values
const getUniqueValues=(items,value) =>{
    return [...new Set(items.map(item=>{
        return  item[value]}))]
}

const RoomsFilter = ({rooms}) => {
   const context = useContext(RoomContext)
   const {passingValues}=context
   const {
       type,
       capacity,
       price,
       minPrice,
       maxPrice,
       minSize,
       maxSize,
       breakfast,
       pets
   }=passingValues.values
   console.log(breakfast)
   //getUnique types
   let types=getUniqueValues(rooms,'type')
   //add all
   types=['all',...types]
   //map to jsx
   types=types.map((value,index)=>{
       return <option value={value} key={index}>{value}</option>

   })

   let people=getUniqueValues(rooms,'capacity')

   people=people.map((item,index)=>{
       return <option value={item} key={index}>{item}</option>
   })
    return (
      <section className="filter-container">
          <Title title="search rooms"/>
          <form className="filter-form">
            {/* {select type} */}

            <div className="form-group">
                <label htmlFor="type" >room type</label>
                <select
                 name="type"
                 value={type}
                 id="type"
                 onChange={passingValues.handleChange}
                className="form-control"
                >

                    {types}
                </select>
            </div>
{/* end select type */}
       {/* {guests number} */}

       <div className="form-group">
                <label htmlFor="capacity" >Guests</label>
                <select
                 name="capacity"
                 value={capacity}
                 id="capacity"
                 onChange={passingValues.handleChange}
                className="form-control"
                >

                    {people}
                </select>
            </div>
{/* end guests number */}

{/* room price */}
<div className="form-group">
        <label htmlFor="price">
            room price ${price}
            
            </label> 

            <input
             type="range"
              name="price"
              min={minPrice}
            max={maxPrice}
             id="price" 
            value={price}
            onChange={passingValues.handleChange}
            className="form-control"
            />

</div>

{/* end of room price */}
{/* size */}
<div className="form-group">
        <label htmlFor="size">
            room size
        </label>
        <input 
        type="number"
        id="size"
        name='minSize'
        value={minSize}
        onChange={passingValues.handleChange}
        className="size-input"
        />
        <input 
        type="number"
        id="size"
        name='maxSize'
        value={maxSize}
        onChange={passingValues.handleChange}
        className="size-input"
        />


</div>
{/* end of size */}
{/* extras */}
<div className="form-group">
<div className="single-extra">
    <input
    type="checkbox"
    onChange={passingValues.handleChange}
    name="breakfast"
    id="breakfast"
    checked={breakfast}
    />
    <label htmlFor="breakfast" >Breakfast</label>

    <input
    type="checkbox"
    onChange={passingValues.handleChange}
    name="pets"
    id="pets"
    checked={pets}
    />
    <label htmlFor="pets" >pets</label>
</div>
</div>

{/* end of extras */}
          </form>

      </section>
    )
}

export default RoomsFilter