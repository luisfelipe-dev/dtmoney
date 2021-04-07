import Modal from 'react-modal';

interface NewTransactionModalProps {
	isOpen: boolean;
	OnRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, OnRequestClose }: NewTransactionModalProps) {
	return (
		<Modal isOpen={isOpen} onRequestClose={OnRequestClose}>
			<h1>teste</h1>
		</Modal>
	);
}
