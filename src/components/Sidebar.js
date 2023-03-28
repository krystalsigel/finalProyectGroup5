import React, { useContext } from "react";

import MyContext from "../MyContext";


const Sidebar = () => {
  const { setChangeState, products, setPriceFilter, minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(MyContext)

  const FalseEstado = () => {
    const valorFalse = false;
    setChangeState(valorFalse)
  };    
  
  const handleSearch = () => {
    const cardsGalery = products.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    setPriceFilter(cardsGalery)
 
    if( (minPrice === 0 && maxPrice === 0) ) {
      alert("Ingresa un rango de precios válido")
    }
    if( minPrice === 0 && maxPrice !== 0 ) {
      FalseEstado()
    }
    if( minPrice !== 0 && maxPrice !== 0 ) {
      FalseEstado()
    }
  };

  return (
    <div className="price-range">
      <h6>Precio</h6>
      <div>
        <label htmlFor="min-price">Desde</label>
        <br/>
        <input
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value || 0) }/>
      </div>
      <div>
        <label htmlFor="max-price">Hasta </label>
        <br/>
        <input
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || 0)}/>
      </div>
      <button onClick={() => handleSearch()}>BUSCAR</button>    
    </div>
  );
}


export default Sidebar;