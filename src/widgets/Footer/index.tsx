import { Footer } from '../../components/Footer';
import { Column } from '../../components/Layout';
import { LeadbackWidget } from '../../components/LeadbackWidget';
import { Link } from '../../components/Link';
import { Map } from '../../components/Map';
import { Text } from '../../components/Text';
import { VKWidget } from '../../components/VKWidget';


const getFullYear = () => (new Date()).getFullYear();

const formatLink = (link: string) => link.replaceAll(/^(mailto:|\/\/|http:\/\/|https:\/\/)/gi, '');

interface Props {
    companyName: string;
    address: string;
    phone: string;
    links: string[];
}


export const FooterWidget = ({ companyName, address, phone, links }: Props) => {
    return (
        <Footer>
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

                <LeadbackWidget />
                <VKWidget />

                <Text>
                    Copyright © {companyName}, 2014 - {getFullYear()} | <Link target="_blank" href="/privacy">Защита персональной информации</Link>
                </Text>
            </Column>
        </Footer >
    );
};
