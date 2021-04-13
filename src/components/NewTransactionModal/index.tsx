import { useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactioTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	OnRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, OnRequestClose }: NewTransactionModalProps) {
	const [type, setType] = useState('deposit');

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={OnRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-classname"
		>
			<button type="button" onClick={OnRequestClose} className="react-modal-close">
				<img src={closeImg} alt="fechar modal" />
			</button>
			<Container>
				<h2>Cadastrar transação</h2>

				<input placeholder="Titulo" />

				<input type="number" placeholder="Valor" />

				<TransactioTypeContainer>
					<RadioBox
						type="button"
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor='green'
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor='red'
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactioTypeContainer>

				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
