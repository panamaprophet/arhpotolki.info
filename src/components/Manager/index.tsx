const mapTargetValue = callback => event => callback(event.target.value);


// const TextInput = ({}: { value: string, onChange: () => void }) => {
//     return <input type="text" value={value} onChange={mapTargetValue(value => onChange(value)}
// };


// export const FeedbackManager = ({ items, onChange, onRemove }) => (<div>
//     {items.map(item => (
//         <div key={item.id}>
//             <input type="text" value={item.author} onChange={mapTargetValue(author => onChange({ ...item, author }))} />
//             <input type="text" value={item.text} onChange={mapTargetValue(text => onChange({ ...item, text }))} />
//             <input type="text" value={item.picture || undefined} onChange={mapTargetValue(picture => onChange({ ...item, picture }))} />
//             <button type="button" onClick={() => onRemove(item.id)}>Х</button>
//         </div>
//     ))}
// </div>);

// export const PicturesManager = ({ items, onChange, onRemove }) => (<div>
//     {items.map(item => (
//         <label key={item.id}>
//             <input type="text" defaultValue={item.url} />
//             <input type="text" value={item.tags.join(' ')} onChange={mapTargetValue(tags => onChange({ ...item, tags: tags.split(' ') }))} />
//             <button type="button" onClick={() => onRemove(item.id)}>Х</button>
//         </label>
//     ))}
// </div>);

// export const SettingsManager = ({ items, onChange, onRemove }) => (<div>
//     {items.map(item => (
//         <label key={item.key}>
//             {item.key}:
//             <input type="text" value={item.value} onChange={mapTargetValue(value => onChange({ key: item.key, value }))} />
//             <button type="button" onClick={() => onRemove(item.key)}>Х</button>
//         </label>
//     ))}
// </div>);


export const Manager = ({ items, onChange, onRemove }) => {
    // const handleSubmit = item => (event) => {
    //     if (event.which === 13) {
    //         const value = event.target.value;

    //         onChange({ ...item, })
    //     }
    // }

    const Items = items.map((item, index) => (
        <div key={item.id || item.key || index}>
            {Object
                .entries(item)
                .map(prop => (
                    <div key={prop[0]}>
                        {prop[0]}:
                        <input
                            type="text"
                            value={String(prop[1])}
                            onChange={mapTargetValue(value => onChange({ ...item, [prop[0]]: value }))}
                        />
                    </div>
                ))}
            {onRemove && <button type="button" onClick={() => onRemove(item.id || item.key || index)}>X</button>}
        </div>
    ));

    return <div>{Items}</div>;
};
