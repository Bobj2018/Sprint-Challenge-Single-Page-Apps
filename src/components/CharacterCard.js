import React from 'react';
import { ListGroupItem, ListGroupItemHeading } from 'reactstrap';

export default function CharacterCard({ data }) {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>{data.name} </ListGroupItemHeading>
		</ListGroupItem>
	);
}
