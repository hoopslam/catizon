import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./products.styles";

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();

	return (
		<div className={classes.products}>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justifiy='center' spacing={2}>
					{products.map((product) => (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product} onAddToCart={onAddToCart} />
						</Grid>
					))}
				</Grid>
			</main>
		</div>
	);
};

export default Products;
