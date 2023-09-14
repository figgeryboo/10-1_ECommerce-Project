import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import './App.css';
import DonateForm from './components/DonateForm';
import DonateFeed from './components/DonateFeed.jsx';

function App() {
	const [donations, setDonations] = useState([]);

	const handleDonate = (formData) => {
		const updatedDonations = [...donations, formData];

		if (updatedDonations.length > 5) {
			updatedDonations.shift();
		}

		setDonations([...donations, formData]);
	};

	return (
		<>
			<div>
				<DonateForm onDonate={handleDonate} />
				{donations.length > 0 && <DonateFeed donations={donations} />}
			</div>
		</>
	);
}

export default App;
