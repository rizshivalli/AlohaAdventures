type Action = {
  type: string;
  [key: string]: any;
};

type Handlers<S> = {
  [key: string]: (state: S, action: Action) => S;
};

export default function createReducer<S>(
  initialState: S,
  handlers: Handlers<S>,
): (state: S | undefined, action: Action) => S {
  return function reducer(state: S = initialState, action: Action): S {
    if (action.type === 'LOG_OUT') {
      return initialState;
    } else if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
