const getAllProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  return response.json();
};
export default getAllProducts;
