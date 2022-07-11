import { MouseEvent, useState } from 'react';
import styled from 'styled-components';
import { Grid, Text, Icon } from '../elements/index';
import { CardType } from './CardList';

type CardProps = CardType & {
	_onClick?(value: MouseEvent<HTMLDivElement>): any;
};

const Card = (props: CardProps) => {
	const { word, trans, pos, x_count, o_count } = props;
	const [isClose, setIsClose] = useState(false);

	const openClick = () => {
		setIsClose(!isClose);
	};

	return (
		<>
			<CardBox>
				<SectionUpper>
					<SectionWrap>
						<Grid is_flex width='45px'>
							<Icon src='images/X_count_icon.svg' size='10px' />
							<Text size='10px' color='#F25555'>
								{x_count}
							</Text>
							<Icon src='images/O_count_icon.svg' size='11px' />
							<Text size='10px' color='#177AFF'>
								{o_count}
							</Text>
						</Grid>
					</SectionWrap>
				</SectionUpper>
				<Grid padding='12px' is_flex>
					<WordLeft>{word}</WordLeft>
					<WordRight onClick={openClick}>
						{isClose && <TransSection>{trans}</TransSection>}
					</WordRight>
				</Grid>
			</CardBox>
		</>
	);
};

export default Card;

const CardBox = styled.div`
	width: 100%;
	height: 80px;
	position: relative;
	margin-bottom: 12px;

	border: 0.5px solid #e6ebff;
	border-radius: 6px;
`;

const SectionUpper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
`;

const SectionWrap = styled.div`
	padding: 12px 0 0 12px;
	display: flex;
	justify-content: flex-start;
`;

const WordLeft = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	//text-align: center;
`;

const WordRight = styled.div`
	width: 100%;
	height: 100%;
`;

const TransSection = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 10px;
	font-size: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid #e6ebff;
`;
