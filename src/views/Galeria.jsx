import React, { useContext }from 'react';

import MyContext from "../MyContext";

//Importación de componentes
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';



const Galeria = () => {
  const { products,  priceFilter, changeState, searchConcept, handlerSearching} = useContext(MyContext);

  if( changeState === true ) {
    return (    
      <div>
         <aside>
            < Sidebar />
          </aside>    
        {products.map(product =>
        <main>       
          < Cards
            key = {product.id_producto}          
            img = {product.img} 
            name = {product.name}
            price = {product.price}
          />
          </main>
        )}
      </div>
    )
  }
  if( changeState === false && searchConcept !== "" && handlerSearching !== [] ) {
    return (    
      <div>
         <aside>
            < Sidebar />
          </aside>    
        {handlerSearching.map(produ =>
        <main>       
          < Cards
            key = {produ.id_producto}                         
            img = {produ.img} 
            name = {produ.name} 
            price = {produ.price}
          />
        </main>
        )}
      </div>
    )
  } 
  if( changeState === false ) {
    return (
      <div>
        <aside>
          < Sidebar />
        </aside>    
        {priceFilter.map(p =>
        <main >
          < Cards
            key = {p.id_producto}                        
            img = {p.img} 
            name = {p.name} 
            price = {p.price}
          />
        </main>
        )}
      </div>       
    )
  }
};

export default Galeria;