import React from "react"
import FeaturedCard from "./FeaturedCard"
import "./featured.css"
import Heading from "../../common/Heading"
const Featured = () => {
    return (
        <div>
            <section className="featured background">
            <div className="container">
            <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
            <FeaturedCard />
            </div>
           
            </section>

          
        </div>
    )
}
export default Featured