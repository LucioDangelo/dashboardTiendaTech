import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

function ContentRowProducts(){

    // Estados
	const [ products, setProducts ] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [ users, setUsers ] = useState([]);
	const [ categories, setCategories ] = useState(0);

    // Lo que vendria a reemplazar a componentDidMount()
	useEffect( () => {
		console.log("%cme monté", "color: green");
        console.log(process.env)
		fetch(`https://grupo-8-digital-tech.herokuapp.com/api/products`)
			.then(response => response.json())
			.then(products => {
				setProducts(products.count);
				setCategories(products.categories);
			})
			.catch(error => {
				console.error();
			})
         fetch("https://grupo-8-digital-tech.herokuapp.com/api/users")
	 	.then(response => response.json())
	 	.then(users => {
	 		setUsers(users.count);			
	 	})
     	.catch(error => {
 		console.error();
	 	})
         fetch(`https://grupo-8-digital-tech.herokuapp.com/api/products/categories`)
			.then(response => response.json())
			.then(categories => {
				setCategories(categories.count);
			})
			.catch(error => {
				console.error();
			})
	 }, []);

    /* <!-- Movies in DB --> */

    let productsInDB = {
        title: 'Cantidad de Productos en DB',
        color: 'primary', 
        quantity: products,
        icon: 'fas fa-cart-plus'
    }
    

    /* <!-- Total awards --> */

    let usersInDb = {
        title:'Cantidad de Usuarios en DB', 
        color:'primary', 
        quantity: users,
        icon:'fas fa-id-card'
    }

    /* <!-- Actors quantity --> */

    let categoriesInDB = {
        title: 'Cantidad de Categorías en DB' ,
        color: 'primary',
        quantity: categories,
        icon: 'fas fa-list'
    }

    let cartProps = [productsInDB, usersInDb, categoriesInDB];

    return (
    
        <div className="row">
            
            {cartProps.map( (prop, i) => {

                return <SmallCard {...prop} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;