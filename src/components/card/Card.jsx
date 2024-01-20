import { CardContainer,
    UserContainer,
    UserImage,
    UserDataContainer,
    UserName,
    UserNick,
     } from "./style";

const Card = ({ profileImage, name, active  }) => {
return (
   <CardContainer>
       <UserContainer>
           <UserImage src="" alt="" />

           <UserDataContainer>
               <UserName>juan</UserName>
               <UserNick></UserNick>
           </UserDataContainer>
       </UserContainer>
       {/* <UserActive> */}
           {/* {active ? 'Activo' : 'Inactivo'} */}
       {/* </UserActive> */}
       {/* <Link > */}
           {/* <button>Ver detalles</button> */}
       {/* </Link> */}
   </CardContainer>
   // <CardContainer>
   //     <UserContainer>
   // 		<UserImage src={image} alt={name} />

   // 		<UserDataContainer>
   // 			<UserName>{name}</UserName>
   // 			<UserNick>@{nickName}</UserNick>
   // 		</UserDataContainer>
   // 	</UserContainer>
   // 	<UserActive $activeState={active}>
   // 		{active ? 'Activo' : 'Inactivo'}
   // 	</UserActive>
   // 	<Link to={`/${userId}`}>
   // 		<button>Ver detalles</button>
   // 	</Link>
   // </CardContainer>
);

};

export default Card;