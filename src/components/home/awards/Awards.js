import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./award.css"
const Awards = () => {
    return (
        <div>
           <section className="awards padding">
           <Heading title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards' />
           <div className="content grid4 mtop">
            {awards.map((value,i) => (
                  <div className="box" key={i}>
                  <div className="award-icon icon-logo">
                    <span>{value.icon}</span>
                  </div>
                  <h1>{value.num}</h1>
                  <p>{value.name}</p>
              </div>
            ))}
           </div>
           </section>
        </div>
    )
}
export default Awards 