import React from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import {apiUrl, filterData} from './data';
import {useState, useEffect} from 'react'
import {toast} from 'react-toastify';


const App = () => {
const [courses, setCourses] = useState(null);
const [loading, setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);

async function fetchData() {
  setLoading(true);// data show hone se phle loading show hogi ese

  try{
    let response = await fetch(apiUrl);
    let output = await response.json();
    //output -> 
    setCourses(output.data);
  }
  catch(error){
    toast.error("Network m kuch dikkt h");
  }
  setLoading(false);// data fetch hone k bad loading false hojaegi
}

useEffect( () => {
  fetchData()
}, []);

// useEffect ( () => {
//    const fetchData = async() => {
//     try{
//       const res = await fetch(apiUrl);
//       const output = await res.json();
//       //save dta into a variable
//       setCourses(output.data);

//     }
//     catch(error){
//       toast.error("Something went wrong");
//     }
//    }
//    fetchData();
// }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
      <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <div>
        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
        </div>
      </div>

            

      
    </div>
  );
};

export default App;
