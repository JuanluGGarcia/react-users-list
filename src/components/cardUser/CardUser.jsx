import { StyledUserContainer } from '../filteruser/style';
import {
	StyledActiveUser,
	StyledDataUser,
	StyledImgUser,
	StyledNameUser,
	StyledUsernameUser
} from './style';

// Se encarga de pintar las cards de los usuarios
const CardUser = ({ name, username, profileImage, active }) => {
	return (
		<StyledUserContainer>
			<StyledDataUser>
				<StyledImgUser src={profileImage} alt='' />

				<div>
					<StyledNameUser>{name}</StyledNameUser>
					<StyledUsernameUser>@{username}</StyledUsernameUser>
				</div>

				<StyledActiveUser $active={active}>
					{active ? 'Activo' : 'Inactivo'}{' '}
				</StyledActiveUser>
			</StyledDataUser>
		</StyledUserContainer>
	);
};

export default CardUser;
