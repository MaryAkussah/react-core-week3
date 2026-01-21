import SimpleForm from "./components/SimpleForm"
import ValidatedForm from "./components/ValidatedForm"; 
import FetchUsers from "./components/fetchUsers";
import CreatePost from "./components/createPost";
import './App.css'

function App() {

  return (
    <>
    <h2>Week 3</h2>
    <SimpleForm />
    <ValidatedForm />
    <FetchUsers />
    <CreatePost />
    </>
  )
}

export default App
