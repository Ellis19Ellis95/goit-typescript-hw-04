import React, {useReducer} from "react";

/*const initialState: State = {
  isRequestInProgress: false,
  requestStep: 'idle',
};

function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_REQUEST':
      return { ...state, isRequestInProgress: true, requestStep: 'start' };
    case 'PENDING_REQUEST':
      return { ...state, isRequestInProgress: true, requestStep: 'pending' };
    case 'FINISH_REQUEST':
      return { ...state, isRequestInProgress: false, requestStep: 'finished' };
    case 'RESET_REQUEST':
      return { ...state, isRequestInProgress: false, requestStep: 'idle' };
    default:
      return state;
  }
}

export function RequestComponent() {
  const [requestState, requestDispatch] = useReducer(requestReducer, initialState);

  const startRequest = () => {
    requestDispatch({ type: 'START_REQUEST' });
    // Імітуємо запит до сервера
    setTimeout(() => {
      requestDispatch({ type: 'PENDING_REQUEST' });
      // Імітуємо отримання відповіді від сервера
      setTimeout(() => {
        requestDispatch({ type: 'FINISH_REQUEST' });
      }, 2000);
    }, 2000);
  };

  const resetRequest = () => {
    requestDispatch({ type: 'RESET_REQUEST' });
  };

  return (
    <div>
      <button onClick={startRequest}>Почати запит</button>
      <button onClick={resetRequest}>Скинути запит</button>
      <p>Стан запиту: {requestState.requestStep}</p>
    </div>
  );
}

export default RequestComponent;
*/

type RequestStep = "idle" | "pending" | "start" | "finished";

type State = {
	isRequestInProgress: boolean;
	requestStep: RequestStep;
};

type Action = {
	type: "START_REQUEST" | "PENDING_REQUEST" | "FINISH_REQUEST" | "RESET_REQUEST";
};

const initialState: State = {
	isRequestInProgress: false,
	requestStep: "idle",
};

function requestReducer(state: State, action: Action): State {
	switch (action.type) {
		case "START_REQUEST":
			return { ...state, isRequestInProgress: true, requestStep: "start" };
		case "PENDING_REQUEST":
			return { ...state, isRequestInProgress: true, requestStep: "pending" };
		case "FINISH_REQUEST":
			return { ...state, isRequestInProgress: false, requestStep: "finished" };
		case "RESET_REQUEST":
			return { ...state, isRequestInProgress: false, requestStep: "idle" };
		default:
			return state;
	}
}

export function RequestComponent() {
	const [requestState, requestDispatch] = useReducer(requestReducer, initialState);

	const startRequest = () => {
		requestDispatch({ type: "START_REQUEST" });
		// Імітуємо запит до сервера
		setTimeout(() => {
			requestDispatch({ type: "PENDING_REQUEST" });
			// Імітуємо отримання відповіді від сервера
			setTimeout(() => {
				requestDispatch({ type: "FINISH_REQUEST" });
			}, 2000);
		}, 2000);
	};

	const resetRequest = () => {
		requestDispatch({ type: "RESET_REQUEST" });
	};

	return (
		<div>
			<button onClick={startRequest}>Почати запит</button>
			<button onClick={resetRequest}>Скинути запит</button>
			<p>Стан запиту: {requestState.requestStep}</p>
		</div>
	);
}

export default RequestComponent;











type State = {
  isRequestInProgress: boolean;
  requestStep: 'idle' | 'start' | 'pending' | 'finished';
};

type Action =
  | { type: 'START_REQUEST' }
  | { type: 'PENDING_REQUEST' }
  | { type: 'FINISH_REQUEST' }
  | { type: 'RESET_REQUEST' };

const initialState: State = {
  isRequestInProgress: false,
  requestStep: 'idle',
};

function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'START_REQUEST':
      return { ...state, isRequestInProgress: true, requestStep: 'start' };
    case 'PENDING_REQUEST':
      return { ...state, isRequestInProgress: true, requestStep: 'pending' };
    case 'FINISH_REQUEST':
      return { ...state, isRequestInProgress: false, requestStep: 'finished' };
    case 'RESET_REQUEST':
      return { ...state, isRequestInProgress: false, requestStep: 'idle' };
    default:
      return state;
  }
}

export function RequestComponent() {
  const [requestState, requestDispatch] = useReducer(requestReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Імітація запиту до сервера
        requestDispatch({ type: 'START_REQUEST' });
        await new Promise(resolve => setTimeout(resolve, 2000));
        requestDispatch({ type: 'PENDING_REQUEST' });
        // Імітація отримання відповіді від сервера
        await new Promise(resolve => setTimeout(resolve, 2000));
        requestDispatch({ type: 'FINISH_REQUEST' });
      } catch (error) {
        console.error('Error during request:', error);
        requestDispatch({ type: 'RESET_REQUEST' });
      }
    };

    // Запускаємо асинхронну функцію
    fetchData();
  }, []);

  const startRequest = () => {
    
     requestDispatch({ type: 'START_REQUEST' });
  };

  const resetRequest = () => {
    requestDispatch({ type: 'RESET_REQUEST' });
  };

  return (
    <div>
      <button onClick={startRequest} disabled={requestState.isRequestInProgress}>
        {requestState.isRequestInProgress ? 'Вже в процесі...' : 'Почати запит'}
      </button>
      <button onClick={resetRequest}>Скинути запит</button>
      <p>Стан запиту: {requestState.requestStep}</p>
    </div>
  );
}

export default RequestComponent;