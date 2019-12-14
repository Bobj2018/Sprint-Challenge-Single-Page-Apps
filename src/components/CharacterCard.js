import React from 'react';
import { ListGroupItem, ListGroupItemHeading, Media } from 'reactstrap';

export default function CharacterCard({ data }) {
	return (
		<ListGroupItem>
			<Media>
				<Media className='charImg' left top href='#'>
					<Media src={data.image} alt={`Pictue of ${data.name}`} />
				</Media>
				<Media body>
					<ListGroupItemHeading>{data.name} </ListGroupItemHeading>
					<p>Status: {data.status}</p>
					<p>Species: {data.species}</p>
					<p>Gender: {data.gender}</p>
					<p>Origin (Coming Soon)</p>
					<p>Location (Coming Soon)</p>
					<p>Episodes (Coming Soon)</p>
				</Media>
			</Media>
		</ListGroupItem>
	);
}
