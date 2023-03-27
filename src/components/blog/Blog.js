import React from "react"
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import img4 from "../images/4.jpg";

const Blog = () => {
  return (
    <div>
      <section className="blog-out mb">
        <Back name="Services" title="Services -All Services" cover={img4} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </div>
  );
};
export default Blog;