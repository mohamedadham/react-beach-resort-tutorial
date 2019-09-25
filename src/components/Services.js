import React, {useState} from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
const Services = () => {
    const [services, setServices]=useState(
        [
            {
            icon:<FaCocktail/>,
            title:"Free Cocktails",
            info:`In ipsum Lorem occaecat ex amet consectetur magna ipsum. Labore et laborum duis velit ea minim deserunt labore voluptate tempor ad elit adipisicing. Qui velit commodo mollit reprehenderit qui cillum eu nisi. Occaecat elit consectetur aliqua amet culpa quis nulla deserunt laboris.
            Culpa culpa velit in excepteur.`
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:`In ipsum Lorem occaecat ex amet consectetur magna ipsum. Labore et laborum duis velit ea minim deserunt labore voluptate tempor ad elit adipisicing. Qui velit commodo mollit reprehenderit qui cillum eu nisi. Occaecat elit consectetur aliqua amet culpa quis nulla deserunt laboris.
            Culpa culpa velit in excepteur.`
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:`In ipsum Lorem occaecat ex amet consectetur magna ipsum. Labore et laborum duis velit ea minim deserunt labore voluptate tempor ad elit adipisicing. Qui velit commodo mollit reprehenderit qui cillum eu nisi. Occaecat elit consectetur aliqua amet culpa quis nulla deserunt laboris.
            Culpa culpa velit in excepteur.`
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:`In ipsum Lorem occaecat ex amet consectetur magna ipsum. Labore et laborum duis velit ea minim deserunt labore voluptate tempor ad elit adipisicing. Qui velit commodo mollit reprehenderit qui cillum eu nisi. Occaecat elit consectetur aliqua amet culpa quis nulla deserunt laboris.
            Culpa culpa velit in excepteur.`
        },
    ])
    return (
        <section className="services">
        <Title title="services" /> 
        <div className="services-center">
            {services.map((item,index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
        </section>
    );
}

export default Services;

