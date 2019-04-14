import React from 'react';

const List = ({items}) => (
    <div>
        <h1>List</h1>
        <p>A list of things</p>
        <ul>
        { items && items.length && items.map(item =>
            <li key={item.id}>{item.content}</li>
        )}
        </ul>
    </div>
);

export default List;
