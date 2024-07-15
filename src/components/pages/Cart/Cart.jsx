import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addItemToCart,
//   removeItemFromCart,
// } from "../../features/user/userSlice";

import { removeCart, addToCard } from "../../redux/userSlice";

import styles from "./cart.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import GoBackButton from "../../goBackBtn/GoBackButton";

export const Cart = () => {
     const dispatch = useDispatch();
     const cart = useSelector(state => state.user.card);
     let total = 0;


  return (
    <>
    
    <div className="container">
   
      <section className={styles.cart}>
        <GoBackButton />
        <h2 className={styles.title}>Your cart</h2>

        {!cart.length ? (
          <div className={styles.empty}>Here is empty</div>
        ) : (
          <>
            <div className={styles.list}>
              {cart.map((product) => {
                const { title, category, images, price, id, quantity } = product;

                return (
                  <div className={styles.item} key={id}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${images[0]})` }}
                    />
                    <div className={styles.info}>
                      <h3 className={styles.name}>{title}</h3>
                      <div className={styles.category}>{category.name}</div>
                    </div>

                    <div className={styles.price}>{price}$</div>

                    <div className={styles.quantity}>
                      <div
                        className={styles.minus}
                        onClick={() => quantity !== 1 ? dispatch(addToCard(  {product, orders: -1}  )): null}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </div>

                      <span>{quantity}</span>

                      <div
                        className={styles.plus}
                        onClick={() => dispatch(addToCard(  {product, orders: 1}  ))}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>

                    <div className={styles.total}>{quantity * price}$</div>

                    <div
                      className={styles.close}
                      onClick={() => dispatch(removeCart(id))}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                  </div>
                );
                })} 
            </div>

            <div className={styles.actions}>
          
              <div className={styles.total}>
                TOTAL PRICE:{" "}
                <span>
                  {cart.reduce((acc, product) => acc + product.quantity * product.price, 0)}$
                </span>
              </div>

              <button className={styles.proceed}>Proceed to checkout</button>
            </div>
          </>
          )}
      </section>
    </div>
    </>
  );
 
};