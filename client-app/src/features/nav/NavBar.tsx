import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import './NavBar.css';

interface IProps {
    openCreateForm: () => void;
}

const NavBar:React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/img/logo.png" alt="logo" style={{marginRight:10}} />
                    Piano Masters
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={openCreateForm} positive content='Add Piano Master'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;