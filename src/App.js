import './App.css';
import ParentContainer from './component/ParentContainer';
import Display from './component/Display';
import Buttons from './component/Buttons';

function App() {
  return (
    <ParentContainer>
      <Display />
      <Buttons />
    </ParentContainer>
  );
}

export default App;
