import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	useColorModeValue,
} from "@chakra-ui/react";

const group1 = [
	{
		index: 1,
		name: "Thao Nguyen",
		type: "Concession",
	},

	{
		index: 2,
		name: "Tommy Nguyen",
		type: "Adult",
	},
	{
		index: 3,
		name: "Ben Nguyen",
		type: "Adult",
	},
	{
		index: 4,
		name: "Trinh Trinh",
		type: "Adult",
	},
];

const group2 = [
	{
		index: 5,
		name: "Ha Ho",
		type: "Concession",
	},

	{
		index: 6,
		name: "Tam Nguyen",
		type: "Adult",
	},
	{
		index: 7,
		name: "Tri Nguyen",
		type: "Adult",
	},
	{
		index: 8,
		name: "Hoa Au",
		type: "Adult",
	},
	{
		index: 9,
		name: "Arthur Nguyen",
		type: "Children",
	},
];

const group3 = [
	{
		index: 10,
		name: "Duyen Le",
		type: "Concession",
	},

	{
		index: 11,
		name: "Nhien Nguyen",
		type: "Adult",
	},
	{
		index: 12,
		name: "Kien Nguyen",
		type: "Adult",
	},
	{
		index: 13,
		name: "Gina Ton",
		type: "Concession",
	},
	{
		index: 14,
		name: "Luna Nguyen",
		type: "Infant",
	},
];

const group4 = [
	{ index: 15, name: "Nhi Nguyen", type: "Concession" },
	{ index: 16, name: "Tung Nguyen", type: "Concession" },
	{ index: 17, name: "Alana Nguyen", type: "Infant" },
];

const ticketPrice = {
	Children: 44,
	Adult: 71.5,
	Concession: 55,
	Infant: "",
};

const MyTable = () => {
	function groupTotal(group) {
		let total = 0;
		for (const member of group) {
			total += Number(ticketPrice[member.type]);
		}

		return total;
	}

	function totalAfterSurcharge() {
		let total =
			groupTotal(group1) +
			groupTotal(group2) +
			groupTotal(group3) +
			groupTotal(group4);
		total *= 1.1;
		return Math.round(total);
	}
	return (
		<TableContainer>
			<Table
				variant="simple"
				colorScheme={useColorModeValue("red", "orange")}
				size="sm"
			>
				<TableCaption>10% Surcharge Public Holiday</TableCaption>
				<Thead>
					<Tr>
						<Th>Name</Th>
						<Th>Type</Th>
						<Th>Price</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>
							<strong>Group 1</strong>
						</Td>
						<Td></Td>
						<Td isNumeric>
							<strong>{groupTotal(group1)}</strong>
						</Td>
					</Tr>
					{group1.map((member, index) => (
						<Tr key={index}>
							<Td>
								{member.index}. {member.name}
							</Td>
							<Td>{member.type}</Td>
							<Td isNumeric>{ticketPrice[member.type]}</Td>
						</Tr>
					))}

					<Tr>
						<Td>
							<strong>Group 2</strong>
						</Td>
						<Td></Td>
						<Td isNumeric>
							<strong>{groupTotal(group2)}</strong>
						</Td>
					</Tr>
					{group2.map((member, index) => (
						<Tr key={index}>
							<Td>
								{member.index}. {member.name}
							</Td>
							<Td>{member.type}</Td>
							<Td isNumeric>{ticketPrice[member.type]}</Td>
						</Tr>
					))}
					<Tr>
						<Td>
							<strong>Group 3</strong>
						</Td>
						<Td></Td>
						<Td isNumeric>
							<strong>{groupTotal(group3)}</strong>
						</Td>
					</Tr>
					{group3.map((member, index) => (
						<Tr key={index}>
							<Td>
								{member.index}. {member.name}
							</Td>
							<Td>{member.type}</Td>
							<Td isNumeric>{ticketPrice[member.type]}</Td>
						</Tr>
					))}
					<Tr>
						<Td>
							<strong>Group 4</strong>
						</Td>
						<Td></Td>
						<Td isNumeric>
							<strong>{groupTotal(group4)}</strong>
						</Td>
					</Tr>
					{group4.map((member, index) => (
						<Tr key={index}>
							<Td>
								{member.index}. {member.name}
							</Td>
							<Td>{member.type}</Td>
							<Td isNumeric>{ticketPrice[member.type]}</Td>
						</Tr>
					))}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Total: $860</Th>
						<Th>Plus 10%</Th>
						<Th isNumeric>${Math.round(totalAfterSurcharge() / 1.1)}</Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	);
};

export default MyTable;
