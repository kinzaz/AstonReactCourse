import React from 'react';
import Test from './component/Test';

const App = () => {
	const [isDeleted, setDeleted] = React.useState(false);

	const deleteComp = () => {
		setDeleted(true);
	};

	return <>{!isDeleted ? <Test arg={1} deleteComp={deleteComp} /> : null}</>;
};
export default App;
