import React, { useMemo, useState } from 'react';
import ColorPicker from '../ColorPicker';
import { InputNumber, InputRange, InputText } from '../Input';
import { Column, Layout, Row } from '../Layout';
import Preview from '../Preview';
import { costBySquare } from '../../modules/Calc/mock';
import styles from './styles.module.css';

/* eslint-disable react-hooks/exhaustive-deps */

const Subtitle = ({ children }) => (
    <span className={styles.control__item__title}>{children}</span>
);

export const initialColors = {
    roof: '#ffffff',
    walls: '#a5c8db',
    floor: '#626c6e',
};

const MaterialToOpacityMap = {
    Глянец: 1,
    Матовый: 0,
    Сатин: 0.4,
    Облака: -1,
};

const getOpacity = material => MaterialToOpacityMap[material] || 1;

function Calculator({ prices, lightPrice, colorPrice, onCalc, materials }) {
    const types = Object.keys(prices);
    const [area, setArea] = useState(0);
    const [lights, setLights] = useState(0);
    const [colors, setColors] = useState(initialColors);
    const [type, setType] = useState(types[0]);
    const [material, setMaterial] = useState(materials[0]);
    const [price, discount] = useMemo(() => {
        const additionalColorPrice =
            colors.roof !== '#ffffff' ? colorPrice * area : 0;
        const additionalLightPrice = lights > 1 ? lights * lightPrice : 0;

        const priceCeil = prices[type].at(-1);
        const calculatedPriceByArea =
            (area - prices[type].length) * costBySquare + priceCeil;

        let price = prices[type].at(area - 1) ?? calculatedPriceByArea;

        price =
            material === materials[3]
                ? price * 1.5
                : price + additionalColorPrice;
        price = price + additionalLightPrice;

        const discount = 0;

        onCalc(price);

        return [price, discount];
    }, [area, lights, material, type]);

    const installment = price / 3;

    return (
        <Layout>
            <Column>
                <Row>
                    <Preview
                        colors={colors}
                        material={material}
                        opacity={getOpacity(material)}
                    />
                </Row>
                <Row>
                    <Subtitle>Цвет:</Subtitle>
                    <div className={styles.settings__buttons}>
                        <ColorPicker
                            color={colors.roof}
                            onChange={color =>
                                setColors({ ...colors, roof: color })
                            }
                            label="Потолок"
                        />
                        <ColorPicker
                            color={colors.walls}
                            onChange={color =>
                                setColors({ ...colors, walls: color })
                            }
                            label="Стены"
                        />
                        <ColorPicker
                            color={colors.floor}
                            onChange={color =>
                                setColors({ ...colors, floor: color })
                            }
                            label="Пол"
                        />
                    </div>
                </Row>
                <Row>
                    <Subtitle>Материал:</Subtitle>
                    <div className={styles.settings__buttons}>
                        <InputRange
                            options={materials}
                            currentItem={material}
                            onClick={setMaterial}
                        />
                    </div>
                </Row>
                <Row>
                    <Subtitle>Класс:</Subtitle>
                    <div className={styles.settings__buttons}>
                        <InputRange
                            options={types}
                            currentItem={type}
                            onClick={setType}
                        />
                    </div>
                </Row>
                <Row>
                    <Subtitle>Площадь, м²:</Subtitle>
                    <InputNumber value={area} onChange={setArea} />
                </Row>
                <Row>
                    <Subtitle>Количество светильников:</Subtitle>
                    <InputNumber value={lights} onChange={setLights} />
                </Row>
                <Row>
                    <Subtitle>Цена:</Subtitle>
                    <InputText value={`${price}₽`} />
                </Row>
                <Row>
                    <Subtitle>Скидка:</Subtitle>
                    <InputText value={`${discount}%`} />
                </Row>
                <Row>
                    <Subtitle>Цена со скидкой:</Subtitle>
                    <InputText value={`${price - discount}₽`} />
                </Row>
                <p className={styles.settings__notice}>
                    Итоговая цена является достаточно точной, но все-таки
                    приблизительной.
                </p>
                <p className={styles.settings__notice}>
                    При оплате 50% стоимости заказа доступна рассрочка на три
                    месяца с ежемесячным платежом {installment.toFixed(2)} ₽
                </p>
            </Column>
        </Layout>
    );
}

export default Calculator;
