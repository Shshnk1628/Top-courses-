import Card from './Card'
import React from 'react'
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if(category === "All"){
            let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }

        else{
            // sirf specific category ka data pass krunga
            return courses[category];
        }
        
    }

//     let allCourses =  [];

//     //returns you a list of all courses received from the api response
// const getCourses = () => {
//     Object.values(courses).forEach( (courseCategory) => {
//         courseCategory.forEach((course) => {
//             allCourses.push(course);
//         })// obj.values => b/c we want all cards not of single dept
//     })//but from all dept.
//     return allCourses;
// }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( (course) => {
                   return <Card key={course.id} course={course} likedCourses={likedCourses}
                   setLikedCourses={setLikedCourses}/>
                 })
            }
        </div>
    )  

}
export default Cards;