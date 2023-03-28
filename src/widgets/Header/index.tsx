import Image from 'next/image';
import { useContext, useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { ArrowDown, Burger } from '../../components/Icon';
import { Row } from '../../components/Layout';
import { Link } from '../../components/Link';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Modal } from '../../components/Modal';
import { Subtitle } from '../../components/Text';
import { Context } from '../../context';
import { menuLinks } from './data';


export const HeaderWidget = () => {
    const { settings } = useContext(Context);
    const { phone, headerNotification } = settings;

    const [isMenuOpen, setMenuOpen] = useState(false);
    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <Header>
            <Row style={{ width: '100%', justifyContent: 'space-between' }}>
                <Image src="/icons/eco.png" width="80" height="96" alt="" />
                <Row>
                    <Subtitle color="#a6c719">
                        {phone}
                    </Subtitle>
                    <Button onClick={openMenu}>
                        <Burger />
                    </Button>
                    <Modal size="large" isOpen={isMenuOpen} onClose={closeMenu}>
                        <Menu links={menuLinks} onClick={closeMenu} />
                    </Modal>
                </Row>
            </Row>

            <Logo />

            <Row >
                <Subtitle color="#2484c6">
                    {headerNotification}
                </Subtitle>
                <Link href="#description">
                    <ArrowDown />
                </Link>
            </Row>
        </Header>
    );
};
