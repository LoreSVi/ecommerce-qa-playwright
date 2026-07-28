import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-card">
        <div className="product-detail-image">
          <img src={productSelected.img} alt={productSelected.title} />
        </div>

        <div className="product-detail-info">
          <div className="product-detail-header">
            <div>
              <h2>{productSelected.title}</h2>
              <p className="product-detail-category">
                Categoría: {productSelected.category}
              </p>
            </div>
            <span className="product-detail-price">
              ${productSelected.price}.-
            </span>
          </div>

          <p className="product-detail-description">
            {productSelected.description}
          </p>
          <p className="product-detail-stock">
            {productSelected.stock > 0
              ? `Stock disponible: ${productSelected.stock}`
              : "No hay stock"}
          </p>

          {productSelected.stock > 0 && (
            <div className="product-detail-actions">
              <ItemCount
                stock={productSelected.stock}
                onAdd={onAdd}
                initial={cantidad}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
