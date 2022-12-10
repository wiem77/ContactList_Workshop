import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import { getContacts } from "./redux/actions/actions"
function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getContacts())
  // }, [])

  return (
    <Router>
      <div className="App">
        <Link to="/contact-List">
          <button> Contact List</button>
        </Link>
        <Link to="/addContacts">
          <button>Add contact</button>
        </Link>
        <Routes>
          <Route path="/contactList" />
          <Route path="/addContacts" />
        </Routes>
      </div>
    </Router>
  )
}

export default App
