import React from 'react'
import EachBlog from './EachBlog'

const Blogs = () => {
    return (
        <div id="fh5co-blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <h2>Our Memories</h2>
                            <a href="/AllBlogs">See All Memories</a>
                        </div>
                    </div> 
                </div>
                <div className="row">
                    <EachBlog/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title text-center">
                            <a href="/MyBlogs">View Your Memories</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Blogs
