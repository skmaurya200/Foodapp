import React from 'react'
import "./Exploremenu.css"
import {menu_list} from "../../assets/assets"
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
      At Tomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include
      </p>
      <div className="explore-menu-list">
        {
            menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
