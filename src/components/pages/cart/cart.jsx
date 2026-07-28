import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, limpiar, removeById, total, totalItems }) => {
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <div className="container-items">
          <h2 className="cart-section-title">Productos en tu carrito</h2>
          {cart.length === 0 ? (
            <div className="empty-cart-message">
              <p>No hay productos en el carrito aún.</p>
            </div>
          ) : (
            cart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="cart-item-info">
                    <div>
                      <h4>{item.name}</h4>
                      <p>Precio unitario: ${item.price}.-</p>
                      <p>Cantidad: {item.quantity}</p>
                    </div>
                    <div className="cart-item-actions">
                      <p className="cart-item-subtotal">
                        Subtotal: ${item.price * item.quantity}
                      </p>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: "none" }}
                        onClick={() => removeById(item.id)}
                      >
                        Quitar
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="cart-info">
          <h3>Resumen del pedido</h3>
          <div className="cart-summary-row">
            <span>Total de unidades:</span>
            <strong>{totalItems}</strong>
          </div>
          <div className="cart-summary-row">
            <span>Precio total:</span>
            <strong>${total}</strong>
          </div>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button
                onClick={limpiar}
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                Vaciar carrito
              </Button>
              <Link to="/checkout" className="cart-link-button">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Finalizar compra
                </Button>
              </Link>
              <Link to="/" className="cart-link-button">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Seguir comprando
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/" className="cart-link-button">
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                Agrega productos
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
