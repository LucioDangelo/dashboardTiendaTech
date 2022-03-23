import React from 'react';

const pulsar = (res,req) => {
    alert('Gracias por reportar el error. Lo resolveremos a la brevedad.')
};


function Errors(){
    return (    
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="empleado@digitaltech.com.ar"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">El error proviene de:</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Productos</option>
                            <option>Usuarios</option>
                            <option>Estatus</option>
                            <option>Categorias</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Describa el error</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <button type="button" class="btn btn-outline-dark" onClick={()=> {pulsar()}}>Enviar</button>
                </form>
                // <tr>
                //     <td>Hola</td>
                    
                // </tr>
            )
    }
    
        

export default Errors;