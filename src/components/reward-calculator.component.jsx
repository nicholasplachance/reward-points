import React from 'react';
import { CustomerInfo } from './customer-data/customer-info.component';
import './reward-calculator.style.css';

export const RewardCalc = props => {
	const points = CustomerInfo.map(({ balance }) => {
		let points = 0;
		if (balance > 50 && balance < 100) {
			points = balance - 50;
			return points;
		}
		if (balance > 100) {
			points += 50;
			balance = (balance - 100) * 2;
			points = points + balance;
			return points;
		}
		if (balance < 50) {
			points = 0;
			return points;
		}
	});
	console.log(CustomerInfo);
	return (
		<div>
			{console.log('points', points)}
			<div className="flex-container">
				<ul>
					{CustomerInfo.map(({ id, balance }) => (
						<li key={id}>Transaction total: {balance} =</li>
					))}
				</ul>
				<ul>
					{points.map(point => (
						<li key={`0${points.indexOf(point)}`}>Points earned: {point}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
