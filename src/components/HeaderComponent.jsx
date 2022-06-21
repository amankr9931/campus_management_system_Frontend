import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		// this.redirectToAdminLogin = this.redirectToAdminLogin.bind(this);
	}

	// redirectToAdminLogin = (e) => {
	// 	e.preventDefault();
	// 	this.props.history.push('/admin');
	// };
	// about = (e) => {
	// 	e.preventDefault();
	// 	this.props.history.push('/add-feedback');
	// };

	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark">
						<img
							id="logo"
							src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
							width="25"
							height="25"
							alt="brand"
						/>
						<div>
							<a href="/" className="navbar-brand" style={{ marginRight: 520, paddingBottom: 10 }}>
								Campus Buddy
							</a>
						</div>

						<div className="controls bar">
							
							<Link to="/" >
								
								<button
									className="btn btn-secondary m-1"
									onClick={this.redirectToHome}
								>
									Home
								</button>
							</Link>
							<Link to="/contact-us" >
							
								<button
									className="btn btn-secondary m-1"
									onClick={this.redirectToContact}
								>
									Contact
								</button>
							</Link>
							<Link to="/notice" >
								
								<button
									className="btn btn-secondary m-1"
									onClick={this.redirectToNotices}
								>
									Notices
								</button>
							</Link>
							<Link to="/login-admin" >
								
								<button
									className="btn btn-secondary btn-outline-warning m-1"
									onClick={this.redirectToAdminLogin}
								>
									Admin
								</button>
							</Link>
							{/* <button className="btn btn-secondary m-1">Home</button>							
							<button className="btn btn-secondary m-1">Contact</button>
							<button className="btn btn-secondary m-1">Notices</button> */}
							
						</div>
					</nav>
				</header>
			</div>
		);
	}
}

export default HeaderComponent;
