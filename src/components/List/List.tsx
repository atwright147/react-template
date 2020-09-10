import * as React from 'react';

export interface Items {
    id: number;
    content: string;
}

export interface Props {
    items: Items[];
}

export const List = ({items}: Props) => (
    <div>
        <h1>List</h1>
        <p>A list of things</p>
        <ul>
        { items?.map(item =>
            <li key={item.id}>{item.content}</li>
        )}
        </ul>
    </div>
);
