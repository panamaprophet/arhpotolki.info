export const mapTargetValue = callback => event => callback(event.target.value);

export const onEnter = callback => event => (event.which === 13 ? callback(event) : null);

export const mapItemsToComponentProps = (items, onChange) => items.map((item) =>
    Object
        .entries(item)
        .filter(([name]) => name !== 'id')
        .filter(([_, value]) => value !== null)
        .map(([name, value]) => ({
            name,
            value,
            onChange: value => onChange({ ...item, [name]: value }),
        })));
