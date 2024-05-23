import React, { useState } from 'react';
import { Testinomials_card } from './Testinomials_card';
// import {boy}  from "../../assets/images/boy.png"
const Testinomails = () => {    
    const testinomials = [
        {
            avatar : "https://media.themoviedb.org/t/p/w235_and_h235_face/zhjIyqpk5bsYgxsh5bSeS6VZtHm.jpg",
            // source : "Photo by Italo Melo: https://www.pexels.com/photo/portrait-photo-of-smiling-man-with-his-arms-crossed-standing-in-front-of-a-wall-2379004/",
            alt : "Boy",
            desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            name : "Lucifer MorningStar",
            role : "Student"
        },
        {
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjHZ_GDyWez4oT7zZqVGQZxtr-YJTtYlqlNPeTi8x1w&s",
            alt : "Boy",
            desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            name : "God The Creator",
            role : "Professor"
        },
        {
            avatar : "https://netstorage-tuko.akamaized.net/images/c1b5590945d4be86.jpg?imwidth=900",
            alt : "Girl",
            desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            name : "Chloe Decker",
            role : "Student"
        },
    ]    
    return (
        <>
      <div>
        <div className="">
          <div className="mx-auto lg:p-16 p-4">
            <div className=' text-center'>
            <h1 className="lg:text-4xl text-2xl text lg:mb-12 mb-6 font-normal lora-500 text-subheading">Here's what people are saying</h1>
            </div>
            <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              {testinomials.map(({ avatar, alt ,desc ,name , role }) => (
                <li key={name} className="hover:scale-[1.02] mb-4 transition-all duration-200">
                  <Testinomials_card avatar = {avatar} alt = {alt} desc = {desc} name = {name} role = {role}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
    )
}
export default Testinomails;