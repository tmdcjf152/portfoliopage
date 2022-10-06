import styled from 'styled-components';
import { Link } from 'react-scroll';
const HeaderBlock = styled.header`
	position: fixed;
	top: 0%;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	background: #000;
	color: #fff;
	border-bottom: 1px solid #fff;
	z-index: 2;
	font: bold 18px/1 'apple';
	.header-inner-box {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 50px;
	}
`;

const Header = () => {
	return (
		<HeaderBlock>
			<ul className='header-inner-box'>
				<li><Link to='1' spy={true} smooth={true}>메인페이지</Link></li>
				<li><Link to='2' spy={true} smooth={true}>최승철이란</Link></li>
				<li><Link to='3' spy={true} smooth={true}>기술스택</Link></li>
				<li><Link to='4' spy={true} smooth={true}>포트폴리오</Link></li>
				<li><Link to='5' spy={true} smooth={true}>맺음말</Link></li>
			</ul>
		</HeaderBlock>
	);
};

export default Header;
