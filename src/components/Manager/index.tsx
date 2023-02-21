import { InputDate } from './elements/InputDate';
import { InputList } from './elements/InputList';
import { InputText } from './elements/InputText';

import { mapItemsToComponentProps } from './helpers';


const KeyToComponentMap = {
    'tags': InputList,
    'date': InputDate,
    'default': InputText,
};


const Input = (props) => {
    const Component = KeyToComponentMap[props.name] || KeyToComponentMap['default'];

    return <Component {...props} />;
};


export const Manager = ({ items, onChange, onRemove }) => {
    const data = mapItemsToComponentProps(items, onChange);

    const Items = data.map((entity, index) => (
        <div key={index}>
            {entity.map((props) => <Input key={props.name} {...props} />)}
            <button type="button" onClick={() => onRemove(items[index].id)}>X</button>
        </div>
    ));

    return <div className="manager">{Items}</div>;
};
