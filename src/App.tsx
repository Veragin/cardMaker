import styled from 'styled-components';
import { Land } from './Parts/Land';
import { theme } from './theme';
import { LinkButton } from 'LinkButton';

import { HowTo } from 'Parts/HowTo';
import { Tutorials } from 'Parts/Tutorials';

export const App = () => {
    return (
        <SBody>
            <Land />
            <SContainer>
                <STopList>
                    <li> Create you own card design with advanced editor</li>
                    <li> Load data from google sheets</li>
                    <li> Easily copy and adjust new card</li>
                    <li> Save your project easily in your browser to open it later</li>
                    <li> Possibility to load already created cards as images</li>
                    <li> Globaly edit all created cards</li>
                    <li> Export cards as images or pdf</li>
                    <li> Its for free</li>
                </STopList>
                <Tutorials />
                <STitle>How to use the service</STitle>
                <HowTo />

                <STitle>Image pipeline</STitle>
                <STopList>
                    <li> Our another service that can modify images by your setup</li>
                    <li> Useful for adjusting only one or multiple images</li>
                    <li> Its for free</li>
                </STopList>
                <STitle>
                    <SLinkButton href="https://pipeline.sizefire.com/">
                        Visit image pipeline
                    </SLinkButton>
                </STitle>
            </SContainer>
        </SBody>
    );
};

const SBody = styled.div`
    width: 100%;
    background-color: ${theme.colors.background.main};
    padding-bottom: ${theme.spacing(6)};
`;

const SContainer = styled.div`
    width: min(100%, 1400px);
    margin: auto;
`;

const STitle = styled.span`
    margin-top: ${theme.spacing(5)};
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 30px;
    padding: ${theme.spacing(2)} 0;
`;

const STopList = styled.ul`
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(3)};
    list-style-position: outside;
`;

const SLinkButton = styled(LinkButton)`
    margin: auto;
`;
