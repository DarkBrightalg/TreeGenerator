import React from "react"
import ReactDOM from "react-dom"
import Homepage from "./Job/A/Homepage"
import store from "./Job/Store/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Homepage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
