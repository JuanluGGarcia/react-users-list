import styled from 'styled-components';

const StyledContainer = styled.div`
	margin: 30px auto;
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const StyledFilters = styled.div`
    width: 100%;
	display: flex;
	justify-content: space-between;
`;

const StyledUserContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export { StyledContainer, StyledFilters, StyledUserContainer };
