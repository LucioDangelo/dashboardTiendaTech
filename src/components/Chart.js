import React, { useEffect, useState } from 'react';
import ChartRow from './ChartRow';
//import ChartRow2 from './ChartRow2';

function Chart (){

    const [ productsInDB , setProductsInDB ] = useState([]);
    //const [ usersInDB , setUsersInDB ] = useState([]);
    
    useEffect(() => {
         fetch("https://grupo-8-digital-tech.herokuapp.com/api/products")
             .then(response => response.json())
             .then(products => {
                 setProductsInDB(products.products);
             })
     },[]);

    //  useEffect(() => {
    //     fetch("https://grupo-8-digital-tech.herokuapp.com/api/users")
    //         .then(response => response.json())
    //         .then(users => {
    //             setUsersInDB(users.users);
    //         })
    // },[]);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <h5 className="mb-10 font-weight-bold text-gray-800">Lista de Productos</h5>
                    <table className="table table-bordered " id="dataTable" width="100%" cellSpacing="0">                        
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>PRECIO</th>
                                <th>CATEGORIA</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productsInDB.map( ( product , i) => {
                                return <ChartRow { ...product} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;