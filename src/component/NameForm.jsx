import React from 'react';

class NameForm extends React.Component {
	constructor() {
		super();
		this.state = { value: '' };
		this.refInput = React.createRef();
		this.handleChange = this.handleChange.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	onInputFocus() {
		this.refInput.current.focus();
	}

	render() {
		return (
			<form>
				<label>
					Input:
					<br />
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
						ref={this.refInput}
						style={{ marginBottom: '10px' }}
					/>
					<br />
				</label>
				<button disabled={this.state.value === 'реакт'}>Push</button>
				<button type="button" onClick={this.onInputFocus}>
					Focus
				</button>
			</form>
		);
	}
}

export default NameForm;
