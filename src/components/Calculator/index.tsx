import { ReactNode, useState } from 'react';
import { ColorPicker } from '../ColorPicker';
import { InputNumber, InputRange, InputText } from '../Input';
import { Column, Layout, Row } from '../Layout';
import { Preview } from '../Preview';
import styles from './styles.module.css';


const MaterialToOpacityMap = {
    'Глянец': 1,
    'Матовый': 0,
    'Сатин': 0.4,
    'Облака': -1,
};

const getOpacity = (material: string) => material in MaterialToOpacityMap ? MaterialToOpacityMap[material] : 1;

const Subtitle = ({ children }: { children: ReactNode }) => (<span className={styles.title}>{children}</span>);


const initialState = {
    area: 0,
    lights: 0,
    type: '',
    material: '',
    colors: {
        ceil: '#ffffff',
        walls: '#a5c8db',
        floor: '#626c6e',
    },
};


interface Props {
    prices: {
        [type: string]: {
            [k: number]: number,
        },
    },
    materials: string[],
    lightPrice: number,
    colorPrice: number,
    defaultMeterPrice: number,
    onCalc: (payload: typeof initialState & { price: number }) => void,
};


export const Calculator = ({ prices, lightPrice, colorPrice, defaultMeterPrice, materials, onCalc }: Props) => {
    const types = Object.keys(prices);

    const [isChanged, setChanged] = useState(false);
    const [state, setState] = useState({
        ...initialState,
        type: types[0],
        material: materials[0],
    });

    const _setState = (changes: Partial<typeof state>) => {
        setChanged(true);
        setState({
            ...state,
            ...changes,
        });
    };

    const totalColorPrice = state.colors.ceil !== '#ffffff' ? state.area * colorPrice : 0;
    const totalLightPrice = state.lights > 1 ? state.lights * lightPrice : 0;

    const priceGroup = prices[state.type];

    const [max] = Object.keys(priceGroup).map(Number).sort((a, b) => b - a);


    let price = 0;

    if (state.area > max) {
        price = priceGroup[max] + defaultMeterPrice * (state.area - max);
    } else {
        price = priceGroup[state.area];
    }

    price =
        state.material === materials[3]
            ? (price * 1.5 + totalLightPrice)
            : (price + totalColorPrice + totalLightPrice);

    if (isChanged) {
        setChanged(false);
        onCalc({ ...state, price });
    }

    const discount = 0;
    const installment = price / 3;

    return (
        <Layout>
            <Column>
                <Preview {...state.colors} opacity={getOpacity(state.material)} />
                <Row style={{ height: 40 }}>
                    <Subtitle>Цвет:</Subtitle>

                    <ColorPicker
                        label="Потолок"
                        color={state.colors.ceil}
                        onChange={color => _setState({ colors: { ...state.colors, ceil: color } })}
                    />
                    <ColorPicker
                        label="Стены"
                        color={state.colors.walls}
                        onChange={color => _setState({ colors: { ...state.colors, walls: color } })}
                    />
                    <ColorPicker
                        label="Пол"
                        color={state.colors.floor}
                        onChange={color => _setState({ colors: { ...state.colors, floor: color } })}
                    />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Материал:</Subtitle>
                    <InputRange options={materials} currentItem={state.material} onClick={material => _setState({ material })} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Класс:</Subtitle>
                    <InputRange options={types} currentItem={state.type} onClick={type => _setState({ type })} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Площадь, м²:</Subtitle>
                    <InputNumber value={state.area || ''} onChange={area => _setState({ area })} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Количество светильников:</Subtitle>
                    <InputNumber value={state.lights || ''} onChange={lights => _setState({ lights })} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Цена:</Subtitle>
                    <InputText value={`${price || 0}₽`} />
                </Row>
                <Row style={{ height: 40 }}>
                    <Subtitle>Скидка:</Subtitle>
                    <InputText value={`${discount}%`} />
                </Row>
                <Row>
                    <Subtitle>Цена со скидкой:</Subtitle>
                    <InputText value={`${(price - discount || 0)}₽`} />
                </Row>
                <p className={styles.disclaimer}>
                    Итоговая цена является достаточно точной, но все-таки приблизительной.
                </p>
                <p className={styles.disclaimer}>
                    При оплате 50% стоимости заказа доступна рассрочка на три месяца с ежемесячным платежом {installment ? installment.toFixed(2) : 0} ₽
                </p>
            </Column>
        </Layout>
    );
}
