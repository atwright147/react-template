interface State {
    id: number;
    content: string;
}

type Action = { type: 'listItems/GET', payload: State };

export const reducer = (state: State[] = [], action: Action): State[] => {
    switch (action.type) {
        case 'listItems/GET':
            return [action.payload] ?? [];

        default:
            return state;
    }
}
