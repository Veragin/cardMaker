import styled from 'styled-components';
import { Land } from './Land';
import { theme } from './theme';
import { LinkButton } from 'LinkButton';

export const App = () => {
    return (
        <SBody>
            <Land />
            <SContainer>
                <STopList>
                    <li> Possibility to load already created cards as images</li>
                    <li> Create you own card design with advanced editor</li>
                    <li> Easily copy and adjust new card</li>
                    <li> Globaly edit all created cards</li>
                    <li> Export cards as images or pdf</li>
                    <li> Its for free</li>
                </STopList>
                <STitle>How to use the service</STitle>
                <SList>
                    <SServiceBox>
                        <SServiceTitle>File Loader</SServiceTitle>
                        <li> Use drag and drop to add image files as a cards </li>
                        <li> You can remove here not wanted cards </li>
                        <li> You can upload a card structure, you did exported in the past. </li>
                    </SServiceBox>
                    <SServiceBox>
                        <SServiceTitle>Card Maker</SServiceTitle>
                        <li> In left corner choose width and height of the card in pixels</li>
                        <li> Press "Add new card" button to add new card </li>
                        <li>
                            In the top bar next to the logo press on icon to add element
                            (text/shape/image) to the active card
                        </li>
                        <li>
                            {' '}
                            If you select element you can modify it by changing its properties in
                            the right bar
                        </li>
                        <li>
                            In the left bar under "Layers" you can see list of all elements that are
                            in the card
                        </li>
                        <li>
                            When your first card is ready press "Copy card" button in the left bar,
                            that will create new card as a copy
                        </li>
                    </SServiceBox>
                    <SServiceBox>
                        <SServiceTitle>Global Editor</SServiceTitle>
                        <li>The similar as Card Maker but you adjust all banners at once</li>
                        <li>
                            Select element you want to adjust and modify its properties, it will
                            apply the change to same elements in every banner
                        </li>
                        <li>
                            Be careful with that and always make sure you are using the tool you
                            want
                        </li>
                    </SServiceBox>
                    <SServiceBox>
                        <SServiceTitle>Editor</SServiceTitle>
                        <li>
                            The active card is highlighted with a purple border, you can change
                            active card by clicking on them
                        </li>
                        <li>Use mouse wheel to zoom in and out</li>
                        <li>Hold ctrl and drag move the screen around</li>
                    </SServiceBox>
                </SList>

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

const SList = styled.ul`
    font-size: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(3)};
    list-style-position: outside;
    padding: 0;
`;

const SServiceBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    background-color: ${theme.colors.background.opposite};
    border-radius: ${theme.borderRaduis(2)};
    padding: ${theme.spacing(3)};
    padding-left: ${theme.spacing(6)};
`;

const SServiceTitle = styled.span`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    padding-bottom: ${theme.spacing(1)};
`;

const SLinkButton = styled(LinkButton)`
    margin: auto;
`;
