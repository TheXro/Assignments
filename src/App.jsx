import { useReducer } from "react";
import "./App.css";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  noloan: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "openAccount":
      if (state.isActive) return state;
      return { ...state, isActive: true, balance: 500 };
    case "deposit":
      if (state.isActive) {
        return {
          ...state,
          balance: state.balance + 150,
        };
      } else return state;
    case "withdraw":
      if (state.balance == 0) return state;
      return {
        ...state,
        balance: state.balance - 50,
      };
    case "requestLoan": {
      if (state.isActive) {
        return {
          ...state,
          balance: state.balance + 5000,
          noloan: false,
          loan: 5000,
        };
      } else alert("open a account first");
      return state;
    }
    case "payLoan":
      return {
        ...state,
        balance: state.balance - 5000,
        noloan: true,
        loan: 0,
      };
    case "closeAccount":
      if (state.balance === 0)
        return {
          ...state,
          isActive: false,
          ...initialState,
        };
      else alert("cant close account it still has money remaining");
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive, noloan } = state;
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({
              type: "openAccount",
            });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({
              type: "deposit",
            });
          }}
          disabled={false}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({
              type: "withdraw",
            });
          }}
          disabled={false}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({
              type: "requestLoan",
            });
          }}
          disabled={!noloan}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({
              type: "payLoan",
            });
          }}
          disabled={noloan}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({
              type: "closeAccount",
            });
          }}
          disabled={!noloan}
        >
          Close account
        </button>
      </p>
    </div>
  );
};

export default App;
