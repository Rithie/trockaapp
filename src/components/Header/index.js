import React from 'react'
import { MdMenu } from "react-icons/md";

import { Container, Logo, Avatar, Hamburguer, LeftItemContainer } from './styles'

const Header = () => (
    <Container>
        <LeftItemContainer>
            <Hamburguer>
                <MdMenu size={30} color="#e57878" />
            </Hamburguer>
            <Logo />
        </LeftItemContainer>
        <Avatar>
            <img src="" />
        </Avatar>
    </Container>
);

export default Header;