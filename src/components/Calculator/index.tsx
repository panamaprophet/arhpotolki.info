import React, { useEffect, useState } from 'react';
import { budgets, initialColors } from '../../constants';
import ColorPicker from '../ColorPicker';
import InputNumber from '../InputNumber';
import InputRange from '../InputRange';
import { Col, Layout, Row } from '../Layout';
import Preview from '../Preview';
import { initialPrices, prices, colorPrice } from './mock';
import styles from './styles.module.css';

const Subtitle = ({ children }) => (
    <span className={styles.control__item__title}>{children}</span>
);

function Calculator({ onCalc, materials, types }) {
    const [area, setArea] = useState(0);
    const [lights, setLights] = useState(0);
    const [colors, setColors] = useState(initialColors);
    const [type, setType] = useState(types[0]);
    const [material, setMaterial] = useState(materials[0]);

    const price = () => {
        let price = 0;

        if (area > 23) {
            type === types[0]
                ? (price =
                      (area - 23) * initialPrices.square +
                      prices['Эконом (КНР)'].at(-1))
                : (price =
                      (area - 23) * initialPrices.square +
                      prices['Премиум (Германия)'].at(-1));
        }

        if (area <= 23) {
            type === types[0]
                ? (price = prices['Эконом (КНР)'][area - 1])
                : (price = prices['Премиум (Германия)'][area - 1]);
        }

        const additionalPriceByColor =
            colors.roof === '#ffffff' ? 0 : colorPrice * area;
        const additionalPriceByLight =
            lights > 1 ? lights * initialPrices.light : 0;
        const totalPrice =
            material === materials[3]
                ? price * 1.5
                : price + additionalPriceByColor;

        return totalPrice + additionalPriceByLight;
    };

    const discount = 0;
    const currentPrice = price() || 0;
    const installment = price() / 3;

    useEffect(() => {
        onCalc(currentPrice);
    });

    return (
        <Layout>
            <Col>
                <Row>
                    <Preview colors={colors} material={material} />
                </Row>
                <Row>
                    <Subtitle>Цвет:</Subtitle>
                    <div className={styles.settings__buttons}>
                        <ColorPicker
                            color={'roof'}
                            colors={colors}
                            onChange={color =>
                                setColors({ ...colors, roof: color })
                            }
                            label="Потолок"
                        />
                        <ColorPicker
                            color={'walls'}
                            colors={colors}
                            onChange={color =>
                                setColors({ ...colors, walls: color })
                            }
                            label="Стены"
                        />
                        <ColorPicker
                            color={'floor'}
                            colors={colors}
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
                            options={budgets}
                            currentItem={type}
                            onClick={setType}
                        />
                    </div>
                </Row>
                <Row>
                    <Subtitle>Площадь, м²:</Subtitle>
                    <InputNumber
                        value={area}
                        type="number"
                        onChange={setArea}
                    />
                </Row>
                <Row>
                    <Subtitle>Количество светильников:</Subtitle>
                    <InputNumber
                        value={lights}
                        type="number"
                        onChange={setLights}
                    />
                </Row>
                <Row>
                    <Subtitle>Цена:</Subtitle>
                    <InputNumber
                        value={`${currentPrice}₽`}
                        onChange={() => {}}
                        readonly={true}
                    />
                </Row>
                <Row>
                    <Subtitle>Скидка:</Subtitle>
                    <InputNumber
                        value={`${discount}%`}
                        onChange={() => {}}
                        readonly={true}
                    />
                </Row>
                <Row>
                    <Subtitle>Цена со скидкой:</Subtitle>
                    <InputNumber
                        value={`${currentPrice - discount}₽`}
                        onChange={() => {}}
                        readonly={true}
                    />
                </Row>
                <p className={styles.settings__notice}>
                    Итоговая цена является достаточно точной, но все-таки
                    приблизительной.
                </p>
                <p className={styles.settings__notice}>
                    При оплате 50% стоимости заказа доступна рассрочка на три
                    месяца с ежемесячным платежом {installment.toFixed(2)} ₽
                </p>
            </Col>
        </Layout>
    );
}

export default Calculator;
