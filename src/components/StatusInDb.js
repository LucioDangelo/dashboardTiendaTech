import React, {useEffect, useState} from "react";

function StatusInDb() {

  const [ status, setStatus ] = useState([]);

  useEffect(() => {

     fetch("https://grupo-8-digital-tech.herokuapp.com/api/products/status")
       .then(response => response.json())
       .then(products => {
         setStatus(products.status);
       })

  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos x Status
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {status &&

status.map((status, i) => {
                return(
                  <div className="col-lg-6 mb-4" key={i}>
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{`${status.name}: ${status.id}`}</div>
                    </div>
                  </div>
                )
              })
            
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusInDb;