import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => setProductList([...data]))
      .then(setisLoading(false));
  }, []);

	return (
    <>
    <h1>Hello</h1>
   
{productList.map((item,i) => <li key={i}>{item.id +'--'+ item.title}</li>)}

      {isLoading ? (
        <div className='spinner-border text-primary' role='status'>
          {' '}
          <span className='sr-only'>Loading...</span>{' '}
        </div>
      ) : (
				Object.keys(productList).map(product => {
							// <p key={productList[product].id}>{productList[product].name}</p>
              <p key={productList.id}>{productList.title}</p>
				})
      )}
    </>
  );
};
export default ProductsPage;

