import { featured } from "../../data/Data"
import React from "react"



const FeaturedCard = () => {
    return(
        <div>
          <div className='content grid5 mtop'>
         {featured.map((items, index) => (
             
          <div className='box' key={index}>
             <div className="icon icon-logo">
                            {items.icon}
            </div>
            <h4>{items.name}</h4>
            <label>{items.total}</label>
 
          </div>
        ))}
      </div>
        </div>
    )
}

export default FeaturedCard
 