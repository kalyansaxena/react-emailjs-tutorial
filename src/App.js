import './App.css';
// import EmailForm from './components/EmailForm';
import EmailRestAPI from './components/EmailRestAPI';

function App() {
  return (
    <div className="App">
      <h1>Send Email from React App using EmailJS</h1>
      {/* <EmailForm /> */}
      <EmailRestAPI />
    </div>
  );
}

export default App;
