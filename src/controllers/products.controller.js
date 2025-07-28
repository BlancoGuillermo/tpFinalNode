import * as Service from "../services/products.service.js";

export const getAllProducts = async (req, res) =>{
   const products = await Service.getAllProducts()
   res.json(products);
};

export const getProductById = async(req,res)=>{
   const {id} = req.params;
   const product = await Service.getProductById(id);
   if(product){
      res.json(product);
   }else{
      res.status(404).json({message: "Product not found"});
   }
};

export const createProduct = async (newProduct) => {
  try {
    const docRef = await addDoc(productsCollection, newProduct);
    return { id: docRef.id, ...newProduct };
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, updatedProductData) => {
  try {
    const docRef = doc(productsCollection, id);
    await setDoc(docRef, updatedProductData, { merge: true });
    return { id, ...updatedProductData };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const docRef = doc(productsCollection, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

