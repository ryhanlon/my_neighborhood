import React, { Component } from 'react';
import './SideBarDrawer.css';

class SideBarDrawer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
    return (
      <div className="App">

		  <header className="site-header" aria-label="site-navigation">
				  <h1 className="site-name">My Neighborhood</h1>

                 {/*hamburger for project information*/}
				  <a id="menu" className="header-menu proj-list">
					  <div className="menu-container" onClick={this.menuClick}>
						  <div className="bar1"></div>
						  <div className="bar2"></div>
						  <div className="bar3"></div>
					  </div>
				  </a>

				  <nav id="drawer" className="nav site-navigation">
					  <ul className="nav-list">
						  <li className="nav-item"><a href="https://github.com/ryhanlon/Capstone_PDXCodeGuild"
													  target="_blank">Django Project: Interactive Storybook</a></li>
						  <li className="nav-item"><a
							  href="https://github.com/ryhanlon/Website-UIs/tree/master/capstone_wareHouse"
							  target="_blank">UX Project: Warehouse Online Sales</a></li>
						  <li className="nav-item"><a href="#">Blog: current post</a></li>
						  <li className="nav-item"><a
							  href="https://github.com/ryhanlon/Data_Analysis_Projects/tree/master" target="_blank">Data
							  Analysis: Gun Deaths in the US</a></li>
						  <li className="nav-item"><a
							  href="https://github.com/ryhanlon/JavaScript-CodeAcademy/tree/master/tempconverter"
							  target="_blank">React Project: TempConVert</a></li>
						  <li className="nav-item"><a
							  href="https://github.com/ryhanlon/JavaScript-CodeAcademy/tree/master/proRavenous-1/ravenous_1"
							  target="_blank">React Project: Ravenous Food App</a></li>
					  </ul>
				  </nav>

		  </header>

      </div>
    );
  }
}

export default SideBarDrawer;
