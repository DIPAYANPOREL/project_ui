import React from 'react';
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>
                        DIPAYAN POREL
                    </h1>
                    <p>
                        Simple and easy designs that is clean.
                    </p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        everyday. We are leading tech company whose aim is to increase the problem solving
                        ability in children.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>
                        Who we are?
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel suscipit nulla ipsum
                        nihil officia minima numquam. Dolorem ipsum sint ea! Repellendus, ab, iure ex maxime ipsum
                        officiis fugit ipsam sapiente quos quo error, nam natus veniam repudiandae nihil eos molestias
                        officia. Veniam tempora eveniet nobis suscipit, blanditiis ab. Totam ratione eos, labore
                        voluptatibus rem ipsam accusamus quos voluptate dolor dolore sunt dignissimos autem minus
                        eligendi facere eaque. Quos, iste.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolore magnam unde?
                        Adipisci laudantium enim perferendis voluptatem, sapiente accusamus dolorum voluptates
                        ad amet nam mollitia. Ad, quisquam? Excepturi doloribus ipsa error. 
                    </p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>
                        Brands
                    </h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>
                                Google
                            </p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>
                                Amazon
                            </p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillInstagram />
                            <p>
                                Instagram
                            </p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillYoutube />
                            <p>
                                Youtube
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home