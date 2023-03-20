import Image from "next/image";
import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { Section } from "../../components/Section";
import { Title } from "../../components/Text";
import { certificates } from "./data";

export const Certificates = () => {
  return (
    <Section id="certificates">
        <Title>Сертификаты соответствия:</Title>
        <List align="center">
            {certificates.map(url => (
                <Card key={url}>
                    <Image src={url} alt="" width="123" height="177" />
                </Card>
            ))}
        </List>
    </Section>
  );
};
