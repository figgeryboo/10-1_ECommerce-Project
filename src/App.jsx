import { useState } from 'react';
import AboutUs from './AboutUs.jsx';
import './App.css';
import DonateForm from './components/DonateForm';
import DonateFeed from './components/DonateFeed.jsx';
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'

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
      <Sidebar />
			<div>
				<DonateForm onDonate={handleDonate} />
				{donations.length > 0 && <DonateFeed donations={donations} />}
			</div>
      <Footer />

		</>
	);
        }
export default App;
