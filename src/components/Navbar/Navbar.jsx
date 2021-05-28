import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";
import useStyles from "./navbar.styles";

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();

	return (
		<>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar>
					<Typography className={classes.appBar} color='inherit'>
						<Link to='/'>
							<img
								src={logo}
								alt='Commerce.js'
								height='75px'
								className={classes.image}
							/>
						</Link>
					</Typography>
					<div className={classes.grow} />
					{location.pathname === "/" && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to='/cart'
								aria-label='Show cart items'
								color='inherit'>
								<Badge badgeContent={totalItems} color='secondary'>
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
