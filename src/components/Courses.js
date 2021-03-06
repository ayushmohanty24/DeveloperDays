import React from 'react'

export default function Courses() {
    const [state] = React.useState(
        [
            {
                "link":"https://github.com/ayushmohanty24/Portfoliod/blob/master/devscript/Coursera%20DU5ACFKSU4VM_1.jpg?raw=true"
            },
            {
                "link":"https://github.com/ayushmohanty24/Portfoliod/blob/master/devscript/25ea0ae7-86cd-41a2-8c2f-c784b6fefe54.jpg?raw=true"

            }
        ]);
    return (
        <>
        
        <section id="certificate pb-5 pt-5" >
        
        <div className="container pb-5" >
           
          <div>
              <h3 className="text-center mt-4 mb-5">
               <b> COURSES</b>
              </h3>
            </div>
          <div className="row">
           
          {state.map((user) =>(
             <div className="col-md-4">
            <div className="card" >
            <img src={user.link} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </div>
          ))};
          </div>
          
        </div>
      </section>
        </>
    )
}
