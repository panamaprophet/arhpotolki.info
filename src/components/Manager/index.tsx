const mapTargetValue = callback => event => callback(event.target.value);

const onEnter = callback => event => (event.which === 13 ? callback(event) : null);


// @todo: map items to components and render some specific stuff such as picture, date or list of items

const isArray = ([key]) => { key === 'tags' };
const isDate = ([key]) => { key === 'date' };
const isImage = ([key]) => { key === 'url' };

const TypeToComponentMap = {
    'array': 'InputList',
    'date': 'InputDate',
    'image': 'InputImage',
};

export const Manager = ({ items, onChange, onRemove }) => {
    const Items = items.map((item, index) => (
        <div key={item.id || item.key || index}>
            {Object
                .entries(item)
                .filter(item => item[0] !== 'id')
                .map(prop => (
                    <div key={prop[0]}>
                        {prop[0]}:
                        <input
                            type="text"
                            defaultValue={String(prop[1])}
                            onKeyDown={onEnter(mapTargetValue(value => onChange({ ...item, [prop[0]]: value })))}
                        />
                    </div>
                ))}
            {onRemove && <button type="button" onClick={() => onRemove(item.id || item.key || index)}>X</button>}
        </div>
    ));

    return <div>{Items}</div>;
};
