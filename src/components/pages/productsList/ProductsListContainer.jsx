import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { products as productsMock } from "../../../productsMock";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => ({
          ...elemento.data(),
          id: elemento.id,
        }));

        if (products.length > 0) {
          setItems(products);
        } else {
          const fallback = categoryName
            ? productsMock.filter(
                (product) => product.category === categoryName,
              )
            : productsMock;
          setItems(fallback);
        }
      })
      .catch((err) => {
        console.error(err);
        const fallback = categoryName
          ? productsMock.filter((product) => product.category === categoryName)
          : productsMock;
        setItems(fallback);
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <HashLoader color="#36d7b7" />
        </div>
      ) : items.length > 0 ? (
        <ProductsListPresentacional items={items} />
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1rem",
            color: "#475569",
          }}
        >
          <h3>No hay productos disponibles en esta categoría.</h3>
        </div>
      )}
    </div>
  );
};

export default ProductsListContainer;
