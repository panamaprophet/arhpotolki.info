import { useContext } from 'react';
import { Footer } from '../../components/Footer';
import { Column } from '../../components/Layout';
import { Link } from '../../components/Link';
import { Map } from '../../components/Map';
import { Text } from '../../components/Text';
import { VKWidget } from '../../components/VKWidget';
import { Context } from '../../context';


const getFullYear = () => (new Date()).getFullYear();

const formatLink = (link: string) => link.replaceAll(/^(mailto:|\/\/|http:\/\/|https:\/\/)/gi, '');


export const FooterWidget = () => {
    const { settings } = useContext(Context);
    const { companyName, address, phone, links } = settings;

    return (
        <Footer id="footer">
            <Column style={{ alignItems: 'center', textAlign: 'center', gap: 16 }}>
                <Map />
                <Text>
                    <strong>{companyName}</strong>
                    <br />
                    {address}
                    <br />
                    {phone}
                </Text>

                {links && <Text>
                    {links.map((link) => (
                        <div key={link}>
                            <Link href={link} target="_blank">{formatLink(link)}</Link>
                        </div>
                    ))}
                </Text>}

                <VKWidget />

                <Text>
                    Copyright © {companyName}, 2014 - {getFullYear()} | <Link target="_blank" href="/privacy">Защита персональной информации</Link>
                </Text>
            </Column>
        </Footer >
    );
};
