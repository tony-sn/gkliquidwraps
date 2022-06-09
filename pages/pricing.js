import {
	Box,
	Container,
	Heading,
	Center,
	useColorModeValue,
	Divider,
} from "@chakra-ui/react";
import Link from "next/link";

import Section from "components/section";

const Pricing = () => {
	return (
		<>
			<Container maxW="container.xl">
				<Center>
					<Heading as="h3">Liquid Spray Wrap Pricing</Heading>
				</Center>
				<br />
				<Section delay={0.1}>
					<Center>
						<Heading
							as="h5"
							fontSize={"lg"}
							variant="section-title"
							sx={{ textTransform: "uppercase" }}
						>
							Full vehicle wrap pricing in matte satin finish
						</Heading>
					</Center>

					<Box>
						<Heading as="h6" fontSize="md">
							Cars
						</Heading>
						<p>$890 &nbsp; - $990 micro (1 day)</p>
						<p>$1050 - $1250 hatches (1 day)</p>
						<p>$1300 - $1500 sedans (1 day)</p>
						<p>$1600 - $1800 SUV (1 day)</p>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Box>
						<Heading as="h6" fontSize={"md"}>
							Utes
						</Heading>
						<p>$1200 - $1350 without hard top (1 day)</p>
						<p>$1300 - $1500 sedans (1 day)</p>
						<p>$1600 - $1800 SUV (1 day)</p>
					</Box>
				</Section>

				<Section delay={0.3}>
					<Box>
						<Heading as="h6" fontSize={"md"}>
							Vans
						</Heading>
						<p>$1800 - $2300 small (1-2 days)</p>
						<p>$2400 - $2900 medium (2 days)</p>
						<p>$3000 - $3800 large (2 days)</p>
						<p>$3900 - $4800 XLarge (2 days)</p>
					</Box>
				</Section>

				<Section delay={0.4}>
					<p>
						Low range pricing valid for dark vehicles (grey, black) that need to
						go matte or satin black.
						<br />
						<br />
						Mid range pricing valid for matte satin metallic gunmetal grey
						(either dark or lighter shade)
						<br />
						<br />
						Higher range pricing valid for high contrast colour change. (eg: car
						is black and you want white or other lighter colours and vice versa)
					</p>
					<br />
					<ul style={{ listStyle: "none" }}>
						<li>
							* Include a minimum of 8 full coats for strength & durability.
						</li>
						<li>
							* Any roof racks and accessories need to be removed before you
							bring your vehicle in. You can leave spoilers.
						</li>
						<li>
							* A picture of your vehicle (the actual vehicle) or parts you need
							to have wrapped, need to be provided regardless if is common or
							not.
						</li>
						<li>
							* Any extra works like window tinting or mechanical repairs must
							me done before you bring the vehicle in.
						</li>
					</ul>
				</Section>

				<span
					style={{
						textTransform: "capitalized",
						fontWeight: "600",
						fontFamily: "'M PLUS Rounded 1c', sans-serif",
						color: `${useColorModeValue("#e55113", "#e53e3e")}`,
					}}
				>
					<Link href={"/contact"}> Melbourne HQ</Link>
				</span>
				<Divider mt={"1rem"} />

				<Section delay={0.5}>
					<Center>
						<Heading
							as="h5"
							fontSize={"lg"}
							variant="section-title"
							sx={{ textTransform: "uppercase" }}
							my={"2rem"}
						>
							Other parts in matte finish. Average time to complete: 3-5 hours.
						</Heading>
					</Center>

					<ul className="ul-pricing">
						<li>$150-400 Bonnet or roof in matte finish (depending on size)</li>
						<li>
							$350 wheels in matte finish X 4 ($200 when you dip the whole car)
						</li>
						<li>$80 mirrors caps X 2</li>
						<li>$150 mirrors in full X 2</li>
						<li>$25 badges (each)​</li>
						<li>Other Parts: Price on Application (P.O.A)</li>
					</ul>
				</Section>

				<Divider mt={"1rem"} />

				<Section delay={0.5}>
					<Center>
						<Heading
							as="h5"
							fontSize={"lg"}
							variant="section-title"
							sx={{ textTransform: "uppercase" }}
							my={"2rem"}
						>
							What's included & How We do It
						</Heading>
					</Center>

					<ul className="ul-pricing">
						<li>
							Your car will be fully washed and degreased from previous wax
						</li>
						<li>
							​Windows, air intakes, engine bay, radiator, disk brakes and
							exhaust for protection will be fully masked
						</li>
						<li>
							Application of pre-coating before the first base coat (remember,
							your paint will stay as is and not sanding is required)
						</li>
						<li>
							Minimum 8 coats of liquid wrap for strength and durability (in
							some occasions for some colours even more)
						</li>
						<li>Removal of protections</li>
						<li>Clean up and ready for pick up</li>
					</ul>

					<Center>
						<Heading
							as="h5"
							fontSize={"lg"}
							variant="section-title"
							sx={{ textTransform: "uppercase" }}
							my={"2rem"}
						>
							Other services provided
						</Heading>
					</Center>

					<ul className="ul-pricing">
						<li>Full car, van, mini bus, truck matte & satin wraps </li>
						<li>Rims wraps</li>
						<li>Chrome delete</li>
						<li>Badges wraps</li>
						<li>Panel wraps (bonnets, roofs, mirrors)</li>
						<li>​All surfaces wraps</li>
					</ul>
				</Section>

				<Divider my={"1rem"} />

				<p className="paragraph-note">
					<strong>NOTE:</strong> The actual paint before liquid wrap is applied
					is only washed and treated with safe wax and grease remover and will
					not be sanded or altered in any ways. Any dints or panels
					imperfections, need to be fixed before booking your car if you wish to
					do so. At times, when the car is not in top conditions and only when
					requested by you, we will only flick off any already peeling coating
					to make the liquid wrap adhere properly.
				</p>
			</Container>
		</>
	);
};

export default Pricing;
