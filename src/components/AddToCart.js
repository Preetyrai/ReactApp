import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = (product) => {
 const {AddToCart} = useCartContext()
  const { id, colors, stock } = product.product;
  const [mainColor, setmainColor] = useState(colors[0]);
  const [amount, setamount] = useState(1);
  const Increase = () => {
    setamount((oldamount) => {
      let temp = oldamount + 1;
      if (stock < temp) {
        temp = stock;
      }
      return temp;
    });
  };
  const Decrease = () => {
    setamount((oldamount) => {
      let temp = oldamount - 1;
      if (temp < 1) {
        temp = 1;
      }
      return temp;
    });
  };
  return (
    <Wrapper>
      <div class="colors">
        <span>colors :</span>
        <div>
          {colors.map((color, index) => (
            <button
              key={index}
              className={`${
                mainColor === color ? "color-btn active" : "color-btn"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setmainColor(color)}
            >
              {mainColor === color ? <FaCheck /> : null}
            </button>
          ))}
        </div>
      </div>
      <AmountButtons amount={amount} Increase={Increase} Decrease={Decrease} />
      <Link to="/cart" className="btn" onClick={()=>AddToCart(id,mainColor,amount,product)}>
        Add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
