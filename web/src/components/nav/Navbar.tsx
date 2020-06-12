import React from "react";

const Navbar = () => (
    <section className="hero is-dark is-medium">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            <b className="is-size-4">FoodTrucking</b>
                        </a>
                        <span
                            className="navbar-burger burger"
                            data-target="navbarMenuHeroA"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item is-active">Home</a>
                            <a
                                className="navbar-item"
                                href="https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data"
                            >
                                DatSF
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">Local Food Trucks</h1>
                <h2 className="subtitle">Let's get something to eat</h2>
            </div>
        </div>

        <div className="hero-foot"></div>
    </section>
);

export default Navbar;
