import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate(); //to redirect to login page
    const {storeTokenInLS} = useAuth(); 

  
    // handle for field
    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        // udate value dynamically
        setUser({
            ...user,
            [name]: value,
        });
    };

    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {  // to connect with Frontend with backend
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            console.log("res from server", res_data.extraDetails);

            if (response.ok) {              
                // store token in local storage
                storeTokenInLS(res_data.token);      
                setUser({username: "",email: "",phone: "",password: "",})
                toast.success("Registration Successful");
                navigate("/login");
            } 
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("Registration :", error)
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img src="/images/register.png"
                                    alt="a nurse with a cute look"
                                    width="400"
                                    height="500" />
                            </div>
                            {/* our main registration code  */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registration form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={user.username}
                                            onChange={handleInput}
                                            placeholder="username" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            placeholder="Enter email" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleInput}
                                            placeholder="Enter phone no." />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInput}
                                            placeholder="Enter password" />
                                    </div>

                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Register Now
                                    </button>

                                </form>
                            </div> {/*form div */}

                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

// to connect front end withh backend
// we need to mention all like postman

// const response = await fetch("http://localhost:3000/api/auth/register", {
//     method: "POST",
//     headers:{
//         "Content-Type" : "application/json",
//     },
//     body:JSON.stringify(user),
// });

// make sure both front end and server is running
// bcoz of this we get CORS policy error
//
// CORS policy error : restrict webpage from making request to a different domain than that one
// server running on 3000 and frontend running on 5173
// so our FE And BE not runniing on same server
// server conflict
//

//if(response.ok) if data sended
// using useNavigate we can navigate to login and cleare registration data