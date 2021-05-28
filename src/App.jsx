import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles.css'
import HeroCarousel from "./components/Hero/HeroCarousel";

const App = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	const fetchCart = async () => {
		const response = await commerce.cart.retrieve();
		setCart(response);
	};

	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);
		setCart(item.cart);
	};

	const handleUpdateCartQuantity = async (productId, quantity) => {
		const response = await commerce.cart.update(productId, { quantity });
		setCart(response.cart);
	};

	const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};

	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
	};

	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	return (
		<Router>
			<div className="App">
				<Navbar totalItems={cart.total_items} />
				<Switch>
					<Route exact path='/'>
						<HeroCarousel />
						<Products products={products} onAddToCart={handleAddToCart} />
					</Route>
					<Route exact path='/cart'>
						<Cart
							cart={cart}
							handleUpdateCartQuantity={handleUpdateCartQuantity}
							handleRemoveFromCart={handleRemoveFromCart}
							handleEmptyCart={handleEmptyCart}
						/>
					</Route>
					<Route exact path="/checkout">
						<Checkout cart={cart}/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;