import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import './NavBar.css';
import MasterStore from '../../app/stores/masterStore';
import { observer } from 'mobx-react-lite';

const NavBar:React.FC = () => {
    const masterStore = useContext(MasterStore);
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/img/logo.png" alt="logo" style={{marginRight:10}} />
                    Piano Masters
                </Menu.Item>
                <Menu.Item>
                    <Button onClick={masterStore.openCreateForm} positive content='Add Piano Master'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar);