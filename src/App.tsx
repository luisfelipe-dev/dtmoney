import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';
Modal.setAppElement('#root');

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

	function handleOpenNewTransictionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransictionModal() {
		setIsNewTransactionModalOpen(false);
	}
	return (
		<>
			<Header onOpenNewTransictionModal={handleOpenNewTransictionModal} />
			<Dashboard />
			<NewTransactionModal 
				isOpen={isNewTransactionModalOpen} 
				OnRequestClose={handleCloseNewTransictionModal} 
			/>

			<GlobalStyle />
		</>
	);
}
