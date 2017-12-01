import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

class SideBar extends React.Component {


    constructor(props){
        super(props);
        this.state = { visible: false };

    }


    toggleVisibility() {
        this.setState({ visible: !this.state.visible });
    }
    render() {
        const { names } = this.props; 
        const { visible } = this.state;
        return(
        <div>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    width='thin'
                    direction='right'
                    visible={this.state.visible}
                    icon='labeled'
                    vertical
                    inverted
                >
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Home
            </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad' />
                        Games
            </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera' />
                        Channels
            </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Image src='/assets/images/wireframe/paragraph.png' />
                        { names }
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
}
}

export default SideBar; 