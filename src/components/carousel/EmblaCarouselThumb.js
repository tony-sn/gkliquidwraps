import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

import media1 from '../../../public/images/bmw-matte-gunmetal-grey-matte-car-wrap_orig.jpg'
import media2 from '../../../public/images/bmw-matte-yellow-wrap_orig.jpg'
import media3 from '../../../public/images/nissan-matte-grey-car-wrap_orig.jpg'
import media4 from '../../../public/images/renault-matte-dark-gold-car-wrap-australia_orig.jpg'

const media = [media1, media2, media3, media4]
const mediaByIndex = index => media[index % media.length]
export const slides = Array.from(Array(media.length).keys())

export const Thumb = ({ selected, onClick, imgSrc, title }) => (
	<div
		className={`myEmbla__slide myEmbla__slide--thumb ${
			selected ? 'is-selected' : ''
		}`}
	>
		<button
			onClick={onClick}
			className="myEmbla__slide__inner myEmbla__slide__inner--thumb"
			type="button"
		>
			<Image className="myEmbla__slide__thumbnail" src={imgSrc} alt={title} />
		</button>
	</div>
)

const EmblaCarouselThumb = ({ list }) => {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
	const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		selectedClass: '',
		dragFree: true,
	})

	const onThumbClick = useCallback(
		index => {
			if (!embla || !emblaThumbs) return
			if (emblaThumbs.clickAllowed()) embla.scrollTo(index)
		},
		[embla, emblaThumbs],
	)

	const onSelect = useCallback(() => {
		if (!embla || !emblaThumbs) return
		setSelectedIndex(embla.selectedScrollSnap())
		emblaThumbs.scrollTo(embla.selectedScrollSnap())
	}, [embla, emblaThumbs, setSelectedIndex])

	useEffect(() => {
		if (!embla) return
		onSelect()
		embla.on('select', onSelect)
	}, [embla, onSelect])

	return (
		<>
			<div className="myEmbla">
				<div className="myEmbla__viewport" ref={mainViewportRef}>
					<div className="myEmbla__container">
						{list.map(index => (
							<div className="myEmbla__slide" key={index}>
								<div className="myEmbla__slide__inner">
									<Image
										className="myEmbla__slide__img"
										src={mediaByIndex(index)}
										alt={index}
										layout="responsive"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="myEmbla myEmbla--thumb">
				<div className="myEmbla__viewport" ref={thumbViewportRef}>
					<div className="myEmbla__container myEmbla__container--thumb">
						{list.map(index => (
							<Thumb
								onClick={() => onThumbClick(index)}
								selected={index === selectedIndex}
								imgSrc={mediaByIndex(index)}
								title={index}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default EmblaCarouselThumb
