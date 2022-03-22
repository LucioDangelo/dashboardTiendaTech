import React, { useEffect, useState } from 'react';
import ChartRow2 from './ChartRow2';

function Chart (){

    const [ usersInDB , setUsersInDB ] = useState([]);


     useEffect(() => {
        fetch("https://la-guarida-del-dragon.herokuapp.com/api/users")
            .then(response => response.json())
            .then(users => {
                setUsersInDB(users.users);
            })
    },[]);

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <h5 className="mb-10 font-weight-bold text-gray-800">Lista de Usuarios</h5>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">                        
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Usuario</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            usersInDB.map( ( user , i) => {
                                return <ChartRow2 { ...user} key={i}/>
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