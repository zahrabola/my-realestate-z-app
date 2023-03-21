import React from "react"
import Heading from "../../common/Heading"
import RecentCard from "./RecentCard"
import "./recent.css"
const Recent = () => {
    return (
        <div>
            <section className="recent padding">
                <div className="container">
                    <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet,recent property .'/>
                    <RecentCard/>
                </div>
            </section>
        </div>
    )
 }

 export default Recent