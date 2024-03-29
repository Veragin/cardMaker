import styled from 'styled-components';
import { theme } from '../theme';
import src from 'assets/cards.png';
import { LinkButton } from 'LinkButton';

export const Land = () => {
    return (
        <SContainer>
            <SGradientA />
            <SGradientB />
            <SContent>
                <STitle>
                    <SRedText>card</SRedText>
                    <SBlueText>maker</SBlueText>
                </STitle>
                <SImage src={src} />
                <LinkButton href="https://sizefire.com/service?a=service&techTree=CARD_MAKER">
                    Start creating cards for free
                </LinkButton>
            </SContent>
            <SBottom>Features</SBottom>
        </SContainer>
    );
};

const SContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: ${theme.colors.primary.main};
`;

const SContent = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacing(8)};
`;

const STitle = styled.div`
    display: flex;
    text-transform: capitalize;
    font-size: 80px;
    gap: ${theme.spacing(2)};
`;

const SRedText = styled.span`
    color: ${theme.colors.secondary.main};
`;

const SBlueText = styled.span`
    color: ${theme.colors.primary.main};
`;

const SImage = styled.img`
    height: 40%;
`;

const SGradientA = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: radial-gradient(
        circle at 100% 0%,
        ${theme.colors.secondary.main} 0%,
        rgba(0, 0, 0, 0) 75%
    );
`;

const SGradientB = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: radial-gradient(
        circle at 0% 100%,
        ${theme.colors.primary.dark} 0%,
        rgba(0, 0, 0, 0) 80%
    );
`;

const SBottom = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.background.main};
    border-radius: 100% 100% 0 0;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    padding: ${theme.spacing(1)} 0;
`;
