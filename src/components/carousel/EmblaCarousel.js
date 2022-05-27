import React, { useState, useEffect, useCallback } from "react";
import { useColorModeValue, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { PrevButton, NextButton } from "./EmblaCarouselButton";

const EmblaCarousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel(
		{
			loop: true,
			skipSnaps: false,
		},
		[Autoplay()]
	);

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		embla.on("select", onSelect);
		onSelect();
	}, [embla, onSelect]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={viewportRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__inner">
								<Text
									color={useColorModeValue("whiteAlpha.800", "whiteAlpha.900")}
								>
									{slide.content}
								</Text>
							</div>
						</div>
					))}
				</div>
			</div>
			<PrevButton
				onClick={scrollPrev}
				enabled={prevBtnEnabled}
				fillColor={useColorModeValue("#dd6b20", "rgb(229, 62, 62)")}
			/>
			<NextButton
				onClick={scrollNext}
				enabled={nextBtnEnabled}
				fillColor={useColorModeValue("#dd6b20", "rgb(229, 62, 62)")}
			/>
		</div>
	);
};

export default EmblaCarousel;
