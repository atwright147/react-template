import React, { FC } from 'react';

export interface Item {
    id: number;
    content: string;
}

export interface Props {
    items: Item[];
}

export const List: FC<Props> = ({ items }: Props) => (
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
