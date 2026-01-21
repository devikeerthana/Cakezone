import React, {useContext} from 'react'
import CartContext from './CartContext'
import cake1 from '../assets/cake-1.jpg';
import cake2 from '../assets/cake-2.jpg';
import cake3 from '../assets/cake-3.jpg';
import cake4 from '../assets/cake-1.jpg';
import cake5 from '../assets/cake-2.jpg';
import cake6 from '../assets/cake-3.jpg';


const Product = () => {
    const {addToCart} = useContext(CartContext);

    const productList =[
        { id: 1, name: 'Classic Chocolate Cake', price: 700, image: cake1 },
        { id: 2, name: 'Vanilla Dream Cake', price: 650, image: cake2 },
        { id: 3, name: 'Strawberry Delight', price: 750, image: cake3},
        { id: 4, name: 'Red Velvet Special', price: 800, image: cake4},
        { id: 5, name: 'Butterscotch Bliss', price: 680, image: cake5 },
        { id: 5, name: 'Butterscotch Bliss', price: 680, image: cake6 },
    ];
  return (
    <>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>CakeZone Products</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {productList.map((p) => (
          <div key={p.id} style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
            <img src={p.image} alt={p.name} width="100%" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


export default Product