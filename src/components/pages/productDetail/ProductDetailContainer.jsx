import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";
import { products as productsMock } from "../../../productsMock";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});
  const [loading, setLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();
  const idString = id?.toString();

  const cantidad = getTotalQuantityById(idString);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  useEffect(() => {
    setLoading(true);

    const getProduct = async () => {
      const fallback = productsMock.find(
        (product) => product.id.toString() === idString,
      );

      try {
        let itemCollection = collection(db, "products");
        let refDoc = doc(itemCollection, idString);
        const res = await getDoc(refDoc);
        const data = res.data();

        if (data) {
          setProductSelect({ ...data, id: res.id });
        } else if (fallback) {
          setProductSelect(fallback);
        }
      } catch (error) {
        if (fallback) {
          setProductSelect(fallback);
        }
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [idString]);

  return (
    <div>
      {loading ? (
        <h1>Cargando...</h1>
      ) : productSelected.id ? (
        <ProductDetail
          cantidad={cantidad}
          productSelected={productSelected}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
        <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
          <h2>Producto no encontrado</h2>
        </div>
      )}
    </div>
  );
};

export default ProductDetailContainer;
