import React, {useState} from 'react';
import style from "./Cart.module.css";
import {getTotalPrice} from "../../utils/productCart";
import {useFormik} from "formik";
import {useContext} from "react";
import {Context} from "../../context";
import ProductService from "../../api/ProductService";
import CartResponse from "./CartResponse";

const CartForm = () => {

    const [load, setLoad] = useState(false)
    const {cartItem, setModal, setCartItem, setModalActive} = useContext(Context)


    const formik = useFormik({
        initialValues: {
            name: 'Igor Tsuker',
            email: 'Igor@gmail.com',
            tel: '+79057777777',
            address: 'Pyatigorsk',

        },
        onSubmit: async values => {
            setLoad(true)
            const response = await ProductService.sendForm(values)
            if (response.status === 200) {
                setModal({title: 'Success!', body: <CartResponse setActive={setModalActive}/>})
                setCartItem([])
            }
            setLoad(false)
        }

    })


    return (
        <form onSubmit={formik.handleSubmit} className={style.cart_form}>
            <h5 className={style.cart_form__title}>Delivery</h5>
            <div className={`${style.cart_form__group} ${style.cart_form__group_row}`}>
                <input name="name" type="text" className={style.cart_form__input}
                       placeholder="Name" required
                       value={formik.values.name}
                       onChange={formik.handleChange}/>
                <input name="email" type="email" className={style.cart_form__input}
                       placeholder="Email"
                       required
                       value={formik.values.email}
                       onChange={formik.handleChange}/>
                <input name="tel" type="tel" className={style.cart_form__input}
                       placeholder="Phone"
                       required
                       value={formik.values.tel}
                       onChange={formik.handleChange}/>
            </div>
            <div className={style.cart_form__group}>
                <input name="address" type="text" className={style.cart_form__input}
                       placeholder="Address"
                       required
                       value={formik.values.address}
                       onChange={formik.handleChange}/>
            </div>
            <div className={style.cart_buttons}>
                <div className={style.btn_group}>
                    <div className={style.cart_buttons__info}>
                        <span className={style.cart_buttons__info_text}>total</span>
                        <span
                            className={style.cart_buttons__info_price}>{`€${getTotalPrice(cartItem).toFixed(2)}`}</span>
                    </div>
                    <button type="submit"
                            className={`${style.cart_buttons__button} ${style.btn_group__button} ${style.button} ${load ? style.is_loading : ''}`}>
                        order
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CartForm;