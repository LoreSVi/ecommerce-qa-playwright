import { Button } from "@mui/material";
import { useCount } from "../hooks/useCount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="item-count-container">
      <div className="count-controls">
        <Button variant="contained" color="primary" onClick={decrement}>
          -
        </Button>
        <span className="count-value">{count}</span>
        <Button variant="contained" color="primary" onClick={increment}>
          +
        </Button>
      </div>

      <div className="count-action-button">
        {isAdd ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/carrito")}
            fullWidth
          >
            Ir al carrito
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onAdd(count);
              setIsAdd(true);
            }}
            fullWidth
          >
            Agregar al carrito
          </Button>
        )}
      </div>

      <div className="stock-info">Stock: {stock}</div>
    </div>
  );
};
