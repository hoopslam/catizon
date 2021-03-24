import React, { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@material-ui/core";
import { useForm, FormProvider, Controller } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState("");
	const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
	const [shippingSubdivision, setShippingSubdivision] = useState("");
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState("");
	const methods = useForm();

	//convert object into 2d array, then map over each 2d array, getting code and name, and returning it in an array of objects with id code and label name.
	const countries = Object.entries(shippingCountries).map(([code, name]) => ({
		id: code,
		label: name,
	}));

	const fetchShippingCountries = async (checkoutTokenId) => {
		const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
		console.log(countries);
		setShippingCountries(countries);
		setShippingCountry(Object.keys(countries)[0]);
	};

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id);
	}, []);

	return (
		<>
			<Typography variant='h6' gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form onSubmit={""}>
					<Grid container spacing={3}>
						<FormInput required name='firstName' label='First name' />
						<FormInput required name='lastName' label='Last name' />
						<FormInput required name='address1' label='Address' />
						<FormInput required name='email' label='Email' />
						<FormInput required name='city' label='City' />
						<FormInput required name='zip' label='Postal code' />
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select
								value={shippingCountry}
								fullWidth
								onChange={(e) => setShippingCountry(e.target.value)}>
								{countries.map((country) => (
									<MenuItem key={country.id} value={country.id}>
										{country.label}
									</MenuItem>
								))}
							</Select>
						</Grid>
						{/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Country
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    Country
                                </MenuItem>
                            </Select>
                        </Grid> */}
					</Grid>
				</form>
			</FormProvider>
		</>
	);
};

export default AddressForm;
