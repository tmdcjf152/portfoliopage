import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import facepic from '../images/face.jpg';
import Fade from 'react-reveal/Fade';

const scrollAnimation = keyframes`
0% {
		transform: translate(0, 0);
		opacity: 0;
	}
	40% {
		opacity: 1;
	}
	80% {
		transform: translate(0, 20px);
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
`;

const MainpageBlock = styled.div`
	background: #000;
	color: #fff;
	width: 1280px;
	margin: 0 auto;
	/* 메인 인사 페이지 */
	.main-inner-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		height: 100vh;
		margin: 0 auto;

		/* 텍스트 박스 */
		.main-text-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
			width: 100%;

			/* 열정가득 */
			.main-text-1 {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 30%;
				height: 100%;
				margin-bottom: 50px;
				font: bold 80px/1 'apple';
				color: #fff;

			}
			/* 프론트엔드 개발자 */
			.main-text-2 {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				margin-bottom: 50px;
				font: bold 80px/1 'apple';
				color: #fff;

			}
			/* 최승철 */
			.main-text-3 {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 30%;
				height: 100%;
				margin-bottom: 50px;
        font: bold 80px/1 'apple';
				color: #fff;

			}
			/* 입니다. */
			.main-text-4 {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 30%;
				height: 100%;
        margin-bottom: 50px;
        font: bold 80px/1 'apple';
				color: #fff;

			}
		}
		/* 스크롤 버튼 애니메이션 */
		.main-scroll-btn {
			.scrollbutton a {
				position: absolute;
				bottom: 0px;
				left: 50%;
				z-index: 2;
				display: inline-block;
				-webkit-transform: translate(0, -50%);
				transform: translate(0, -50%);
				color: #fff;
				font: normal 400 20px/1 'Josefin Sans', sans-serif;
				letter-spacing: 0.1em;
				text-decoration: none;
				transition: opacity 0.3s;
			}
			#section10 a {
				padding-top: 60px;
				span {
					position: absolute;
					top: 0;
					left: 50%;
					width: 30px;
					height: 50px;
					margin-left: -15px;
					border: 2px solid #fff;
					border-radius: 50px;
					box-sizing: border-box;
					&::before {
						position: absolute;
						top: 10px;
						left: 50%;
						content: '';
						width: 6px;
						height: 6px;
						margin-left: -3px;
						background-color: #fff;
						border-radius: 100%;
						-webkit-animation: ${scrollAnimation} 2s infinite;
						animation: ${scrollAnimation} 2s infinite;
						box-sizing: border-box;
					}
				}
			}
		}
	}

	/* 자기소개 페이지 */
	.introduction-inner-box {
		width: 100%;
		height: 100vh;

		color: #fff;
	}
	/* 기술스텍페이지 */
	.stack-inner-box {
		width: 100%;
		height: 100vh;
		padding-top: 50px;
	}
	/* 포트폴리오페이지 */
	.portfolio-inner-box {
		width: 100%;
		height: 100vh;
		padding-top: 50px;
	}
	/* 맺음말페이지 */
	.tip-inner-box {
		width: 100%;
		height: 100vh;
		padding-top: 50px;
	}
`;

const Mainpage = () => {
	return (
		<MainpageBlock>
			{/* 메인인사 페이지 */}
			<div id='1' className='main-inner-box'>
				{/* 메인 텍스트박스 */}
				<div className='main-text-box'>
        <Fade top cascade delay={700}>
					<span className='main-text-1'>열정가득</span>
          </Fade>
          <Fade top cascade delay={1400}>
					<span className='main-text-2'>프론트엔드 개발자</span>
          </Fade>
          <Fade top cascade delay={2100}>
					<span className='main-text-3'>최승철 </span>
          </Fade>
          <Fade top cascade delay={2800}>
					<span className='main-text-4'>입니다. </span>
          </Fade>'
				</div>
				<div className='main-scroll-btn'>
					<p id='section10' class='scrollbutton'>
						<Link to='2' spy={true} smooth={true}>
							<span></span>Scroll
						</Link>
					</p>
				</div>
			</div>

			{/* 자기소개 페이지 */}
			<div id='2' className='introduction-inner-box'>
				<div className='introduction-img-box'>
					<div className='img-box'>
						<img src='' alt='' />
					</div>
				</div>
				<div className='introduction-text-box'>
					<span>이름 : 최승철</span>
					<span>생년월일 : 1996. 01. 05</span>
					<span>주소 : 경기도 부천시</span>
					<span>연락처 : 010-8013-7313</span>
					<span>이메일 : tmdcjf152@naver.com</span>
				</div>
			</div>
			{/* 기술스텍 페이지 */}
			<div id='3' className='stack-inner-box'>
				3
			</div>
			{/* 포트폴리오 페이지 */}
			<div id='4' className='portfolio-inner-box'>
				4레;
				     
			</div>
			{/* 맺음말 페지 */}
			<div id='5' className='tip-inner-box'>
				5
			</div>
		</MainpageBlock>
	);
};

export default Mainpage;
