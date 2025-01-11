import { useState } from 'react';

export function filterItems(items, query) {
    query = query.toLowerCase();
    return items.filter(item =>
        item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
        )
    );
}

export const foods = [{
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
    id: 1,
    name: 'Dal',
    description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];



export default function FilterableList() {

    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar searchQuery={query} valueChange={handleChange} />
            <hr />
            <List items={foods} searchQuery={query} />
        </>
    );
}

function SearchBar({ searchQuery, valueChange }) {


    return (
        <label>
            Search:{' '}
            <input
                value={searchQuery}
                onChange={valueChange}
            />
        </label>
    );
}

function List({ items, searchQuery }) {
    const tableStyle = {
        backgroundColor: 'lightblue',
        fontSize: 15 + 'px',
        padding: 10 + 'px',
        border: 1 + 'px solid black',
        borderRadius: 5 + 'px ',
        textAlign: 'left',
    };
    const trStyle = {
        border: 1 + 'px solid black',
        borderRadius: 5 + 'px ',
        backgroundColor: 'white',
        padding: 5 + 'px ',
        margin: 5 + 'px '
    };

    { alert(`${searchQuery} +{searchQuery}.length`) }
    if ({ searchQuery }.length > 0)
        <p>Hellow</p>

    return (

        <table style={tableStyle}>

            <tbody>
                {items.map(food => (
                    <tr key={food.id} >
                        <td style={trStyle}>{food.name}</td>
                        <td style={trStyle}>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
