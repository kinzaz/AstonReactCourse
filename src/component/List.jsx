import React, { useEffect, useState } from 'react';

const List = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
			.then(response => response.json())
			.then(data => setData(data));
	}, []);

	return (
		<div style={{ marginTop: '30px', marginLeft: '30px' }}>
			{data.map((item, index) => (
				<div>
					Title {index + 1}: {item.title}
				</div>
			))}
		</div>
	);
};

export default List;
