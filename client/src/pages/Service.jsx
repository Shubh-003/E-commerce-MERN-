import { useAuth } from "../store/auth";

export const Service=()=>{

    const {services} = useAuth();
    console.log(services);

    return (
        <section className="section-services">
          <div className="constainer">
            <h1 className="main-heading">Services </h1>
            </div>

            <div className="container grid grid-three-cols">

                {
                    services.map((curElem,index) => {
                        // const {price, description, provider,service } = curElem;
                        return ( <div className="card" key={index}>
                    <div className="card-img">
                        <img src="/images/design.png" alt="services info" width={200} />
                    </div>

                    <div className="card-deatils">
                        <div className="grid grid-two-cols">
                            <p>{curElem.provider}</p>
                            <p>{curElem.price} </p>
                        </div>
                        <center><h2>{curElem.service} </h2> </center> 
                        <p>{curElem.description} </p>
                    </div>
                </div> 
                );
                    })
                }

                
            </div> 
        </section>
    );
};


// <div className="grid grid-two-cols"> for 