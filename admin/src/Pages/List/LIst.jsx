import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import "./List.css"
const LIst = ({url}) => {
    // const url="http://localhost:4000"
    const [list,setList] = useState([]);
    const fatchList = async () =>{
        const response = await axios.get(`${url}/api/food/LIst`)
        // console.log(response.data)
        if(response.data.success){
            setList(response.data.data)
        }else{
            toast.error("Error List Data");
        }
    }
//Remove food
    const removeFood = async(foodId)=>{
        // console.log(foodId)
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
        await fatchList();
        if(response.data.success)
        {
            toast.success(response.data.message)
        }else{
            toast.error("Remove Item error");
        }
    }


    useEffect(()=>{
        fatchList();
    },[])
  return (
    <div className='list add flex-col'>
        <p>All Foods List</p>
        <div className="list-table">
            <div className="list-table-formet title">
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b>Action</b>
            </div>
            {list.map((item,index)=>{
                return(
                    <div key={index} className='list-table-formet'>
                        <img src={`${url}/images/`+item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <p className='cursor' onClick={()=>removeFood(item._id)}>x</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default LIst
