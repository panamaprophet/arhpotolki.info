import React, { useState } from 'react';
import { budgets, initialColors } from '../../constants';
import ColorPicker from '../ColorPicker';
import InputNumber from '../InputNumber';
import InputRange from '../InputRange';
import { Col, Layout, Row } from '../Layout';
import Preview from '../Preview';
import styles from './styles.module.css';

const Subtitle = ({ children }) => (
    <span className={styles.control__item__title}>{children}</span>
);

function Calculator({ onCalc, materials, types }) {
    const [square, setSquare] = useState(0);
    const [lights, setLights] = useState(0);
    const [colors, setColors] = useState(initialColors);
    const [type, setType] = useState(types[0]);
    const [material, setMaterial] = useState(materials[0]);

    const price = square * lights;
    const discount = 0;

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
                    <InputNumber value={square} onChange={setSquare} />
                </Row>
                <Row>
                    <Subtitle>Количество светильников:</Subtitle>
                    <InputNumber value={lights} onChange={setLights} />
                </Row>
                <Row>
                    <Subtitle>Цена:</Subtitle>
                    <InputNumber
                        value={price}
                        onChange={() => {}}
                        readonly={true}
                    />
                </Row>
                <Row>
                    <Subtitle>Скидка:</Subtitle>
                    <InputNumber
                        value={discount}
                        onChange={() => {}}
                        readonly={true}
                    />
                </Row>
                <Row>
                    <Subtitle>Цена со скидкой:</Subtitle>
                    <InputNumber
                        value={price - discount}
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
                    месяца с ежемесячным платежом 0.00 ₽
                </p>
            </Col>
        </Layout>
    );
}

export default Calculator;
