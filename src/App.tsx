import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

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

			<Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransictionModal}>
				<h1>teste</h1>
			</Modal>

			<GlobalStyle />
		</>
	);
}
