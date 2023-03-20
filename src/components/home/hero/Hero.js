import React from "react"
import Heading from "../../common/Heading";
import "./hero.css"

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-container container">
                    <Heading title="Search for Next Home" subtitle="Find new and featured property located in you local city"/>
                    <form className="flex form-flex">
                        <div className="box">
                            <span>City/Street</span>
                            <input type="text" placeholder="Location"/>
                        </div>
                        <div className="box">
                            <span>Property Type</span>
                            <input type="text" placeholder="Property Type"/>
                        </div>
                        <div className="box">
                            <span>Price Range</span>
                            <input type="text" placeholder="Price Range"/>
                        </div>
                        <div className="box">
                            <span>Advance Filter</span>                         
                        </div>
                        <button className="btn-search cross-logo " type="submit">
                           <i className='fa fa-search'></i>
                        </button>  
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Hero