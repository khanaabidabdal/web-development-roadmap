
export type Reducer<S, A> = (
    state: S,
    action: A
) => S;

export type Listener<S> = (state: S) => void;

export interface Store<S, A> {
    getState(): S;
    dispatch(action: A): A;
    subscribe(listener: Listener<S>): () => void;
}

export function createStore<S, A>(
    reducer: Reducer<S, A>,
    initialState: S
): Store<S, A> {
    if (typeof reducer !== "function") {
        throw new TypeError(
            "Reducer must be a function."
        );
    }

    let state = initialState;

    const listeners = new Set<Listener<S>>();

    function getState(): S {
        return state;
    }

    function dispatch(action: A): A {
        const nextState = reducer(state, action);

        if (Object.is(nextState, state)) {
            return action;
        }

        state = nextState;

        for (const listener of [...listeners]) {
            listener(state);
        }

        return action;
    }

    function subscribe(
        listener: Listener<S>
    ): () => void {
        if (typeof listener !== "function") {
            throw new TypeError(
                "Listener must be a function."
            );
        }

        listeners.add(listener);

        return function unsubscribe(): void {
            listeners.delete(listener);
        };
    }

    return {
        getState,
        dispatch,
        subscribe
    };
}
