import { Container, Heading, SimpleGrid, Center } from "@chakra-ui/react";

import { GalleryGridItem } from "components/gridItem";
import Section from "components/section";

import thumbnailBmwGunmetal from "../public/images/bmw-matte-gunmetal-grey-matte-car-wrap_orig.jpg";
import thumbnailBmwMatte from "../public/images/bmw-matte-yellow-wrap_orig.jpg";

const Gallery = () => {
	return (
		<Container maxW="container.xl">
			<Center>
				<Heading as="h3" fontSize={20} mb={6}>
					Gallery
				</Heading>
			</Center>

			<SimpleGrid columns={[1, 1, 2]} gap={3}>
				<Section delay={0.2}>
					<GalleryGridItem
						id={"bmw-gunmetal"}
						title={"bmw-gunmetal"}
						thumbnail={thumbnailBmwGunmetal}
					/>
					<GalleryGridItem
						id={"bmw-matteyellow"}
						title={"bmw-matteyellow"}
						thumbnail={thumbnailBmwMatte}
					/>
				</Section>
				<Section delay={0.3}>
					<GalleryGridItem
						id={"bmw-matteyellow"}
						title={"bmw-matteyellow"}
						thumbnail={thumbnailBmwMatte}
					/>
					<GalleryGridItem
						id={"bmw-gunmetal"}
						title={"bmw-gunmetal"}
						thumbnail={thumbnailBmwGunmetal}
					/>
				</Section>
			</SimpleGrid>
		</Container>
	);
};

export default Gallery;
