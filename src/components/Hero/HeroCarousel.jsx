import React from "react";
import Carousel from "react-material-ui-carousel";
import "./heroCarousel.styles.css";
import {Typography} from "@material-ui/core";

const images = [
	{
		id: 1,
		title: "Stylish Scratchers",
		description: "Mutli-functional scratchers for scratching and more!!!",
		src: "'/assets/hero1.jpg'",
	},
	{
		id: 2,
		title: "Rug Escape",
		description: "Find the puuurfect rugs to take cover under!",
		src: "'/assets/hero2.jpg'",
		dark: true,
	},
	{
		id: 3,
		title: "Hooman Furniture",
		description: "Scratch resistant furniture to please the hoomans too!",
		src: "'/assets/hero3.jpg'",
	},
];

const HeroCarousel = () => {
	return (
		<div className='carousel'>
			<Carousel interval={12000}>
				{images.map((image) => (
					<div
						className='carouselItem'
						key={image.id}
						style={{
							backgroundImage: `url(${image.src})`,
						}}>
						{image.dark ? (
							<div className='item-text-container' style={{ color: "white" }}>
								<Typography variant="h4">{image.title}</Typography>
								<Typography>{image.description}</Typography>
							</div>
						) : (
							<div className='item-text-container'>
								<Typography variant="h4">{image.title}</Typography>
								<Typography>{image.description}</Typography>
							</div>
						)}
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
