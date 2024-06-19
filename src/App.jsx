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
      console.log("openAccount");
      return { ...state, isActive: true, balance: 500 };
    case "deposit":
      return {
        ...state,
        balance: state.balance + 150,
      };
    case "withdraw":
      if (state.balance == 0) return state;
      return {
        ...state,
        balance: state.balance - 50,
      };
    case "requestLoan":
      if (state.noloan) {
        return {
          ...state,
          balance: state.balance + 5000,
          noloan: false,
        };
      }
    case "payLoan":
      return state;
    case "closeAccount":
      return state;
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, isActive } = state;
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
          disabled={false}
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
        <button onClick={() => {
          dispatch({
            type: "requestLoan"
          })
        }} disabled={false}>
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Pay loan
        </button>
      </p>
      <p>
        <button onClick={() => {}} disabled={false}>
          Close account
        </button>
      </p>
    </div>
  );
};

export default App;
