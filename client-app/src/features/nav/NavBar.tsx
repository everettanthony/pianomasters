import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import './NavBar.css';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

const NavBar:React.FC = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="/assets/img/logo.png" alt="logo" style={{marginRight:10}} />
                    Piano Masters
                </Menu.Item>
                <Menu.Item name='Masters' as={NavLink} to='/masters' />
                <Menu.Item>
                    <Button as={NavLink} to='/create' 
                            positive 
                            content='Add Piano Master'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar);