import Card from "./components/card/card";
import { USERS } from "./constants/users";
import { GlobalStyles } from "./styles/global-styles";


const App = () => {
	return (
		<>
			<GlobalStyles />
			<Card users={USERS} />
		</>
	) 
	
};

export default App;
