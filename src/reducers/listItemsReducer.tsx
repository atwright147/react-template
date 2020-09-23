interface State {
    id: number;
    content: string;
}

type Action = { type: 'listItems/GET', payload: string };

export const reducer = (state: State[] = [], action: Action) => {
    switch(action.type) {
        case 'listItems/GET':
            return action.payload;

        default:
            return state;
    }
}
