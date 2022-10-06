import Header from './component/Header';
import Mainpage from './pages/Mainpage';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
            <Mainpage/>
		</>
	);
};

export default App;
