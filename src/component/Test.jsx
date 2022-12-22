import React from 'react';

class Test extends React.Component {
	constructor(props) {
		console.log('constructor');
		super();
		this.state = {
			stateOne: props.arg,
		};
	}

	buttonHandler = () => {
		let value = this.state.stateOne;
		value++;
		this.setState({ stateOne: value });
	};

	static getDerivedStateFromProps(props, state) {
		console.log('get derived state');
		return null;
	}

	componentDidMount() {
		console.log('component Did Mount');
	}

	shouldComponentUpdate() {
		console.log('should Component Update');
		return true;
	}

	componentDidUpdate() {
		console.log('component Did Update');
	}

	componentWillUnmount() {
		console.log('component Will Unmount');
	}

	render() {
		console.log('render before return');
		return (
			<>
				<h1>Check console log</h1>
				<div>
					{console.log('render after return')}
					<div className="test">
						<button onClick={this.buttonHandler}>Push</button>
						<button onClick={this.props.deleteComp}>delete me</button>
						<div>{this.state.stateOne}</div>
					</div>
				</div>
			</>
		);
	}
}

export default Test;
