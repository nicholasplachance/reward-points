import React, { Component } from 'react';
import './App.css';
import { RewardCalc } from './components/reward-calculator.component';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<RewardCalc />
			</div>
		);
	}
}

export default App;
