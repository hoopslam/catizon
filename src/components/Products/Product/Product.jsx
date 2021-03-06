import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./product.styles";

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h5' gutterBottom>
						{product.name}
					</Typography>
					<Typography variant='h5'>{product.price.formatted_with_symbol}</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant='body1'
					color='textSecondary'
				/>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
					<Typography variant='h6'>Add to Cart</Typography>
					<AddShoppingCart className={classes.shoppingCart}/>
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
