import { NavLink } from "react-router-dom"

export const Error =()=>{
    return (
        <>
        <section id ="error-page">
            <div className="content">
                <h2 className="header"> 404 </h2>
                <h2> sorry! page not found </h2>

                <div className="btns">
                    <NavLink to="/"> Return Home</NavLink>
                    <NavLink to="/contact"> Report problem</NavLink>
                </div>
            </div>
        </section>
        </>
    );
};

//import { NavLink } from "react-router-dom"
//NavLink to redirect page on click