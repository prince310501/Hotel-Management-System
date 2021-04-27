import React from 'react'

const Static = () => {
    return (
        <div className="fh5co-parallax" style={{backgroundImage: "url(images/header.jpg)"}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                        <div className="fh5co-intro fh5co-table-cell">
                            <h1 className="text-center">JALSA VACATIONS</h1>
                            <p>We ensure you have JALSA in your Vacations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Static
