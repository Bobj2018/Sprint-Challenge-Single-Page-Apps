import React from 'react';
import { ListGroupItem, ListGroupItemHeading, Media } from 'reactstrap';

export default function CharacterCard({ data }) {
	return (
		<ListGroupItem>
			<Media>
				<Media className='charImg' left top href='#'>
					<Media src={data.image} alt='Generic placeholder image' />
				</Media>
				<Media body>
					<ListGroupItemHeading>{data.name} </ListGroupItemHeading>
				</Media>
			</Media>
		</ListGroupItem>
	);
}
