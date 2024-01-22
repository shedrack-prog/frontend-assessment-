const getSingleProduct = async (productId: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    console.log('success');
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default getSingleProduct;
