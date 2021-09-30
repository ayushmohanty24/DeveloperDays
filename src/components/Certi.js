import React from 'react'

export default function Certi() {
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
               <b> CERTIFICATES</b>
              </h3>
            </div>
          <div className="row">
          {state.map((user) =>(
            <div className="col-md-4 col-12">
            <img className="photos shadow-lg p-3 mb-5 bg-white rounded" alt="imag" src={user.link} />
            </div>
          ))};
          </div>
        </div>
      </section>
        </>
    )
}
