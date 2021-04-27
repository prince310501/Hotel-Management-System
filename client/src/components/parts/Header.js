import React from 'react'
import Navbar from './Navbar'
import Static from './Static'


const Header = () => {
    return (
		<>
        <div id="fh5co-header">
			<header id="fh5co-header-section">
				<div className="container">
					<Navbar/>
				</div>
			</header>
		</div>
		<Static/>
		</>
    )
}

export default Header
