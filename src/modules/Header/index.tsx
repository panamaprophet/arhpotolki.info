import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Header as HeaderWrapper} from '../../components/Header'
import { ArrowDown, Burger } from '../../components/Icon'
import { Row } from '../../components/Layout'
import { Logo } from '../../components/Logo'
import Menu from '../../components/Menu'
import { Modal } from '../../components/Modal'
import { Subtitle } from '../../components/Text'

const Header = ({ contacts, headerNotification, links }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderWrapper>
        <Row style={{ width: '100%', justifyContent: 'space-between' }}>
            <Image src="/icons/eco.png" width="80" height="96" alt="" />
            <Row>
                <Subtitle color="#a6c719">
                    {contacts.phone}
                </Subtitle>
                <Button onClick={() => setIsModalOpen(true)}>
                    <Burger />
                </Button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <Menu links={links} onClick={() => setIsModalOpen(false)} />
                </Modal>
            </Row>
        </Row>

        <Logo />

        <Row >
            <Subtitle color="#2484c6">
                {headerNotification}
            </Subtitle>
            <a href="#description">
                <ArrowDown />
            </a>
        </Row>
    </HeaderWrapper>
  )
}

export default Header