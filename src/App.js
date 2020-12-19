import Landing from './Components/Landing';
import './App.css';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Workflow from './Components/Workflow';
import Coretech from './Components/Coretech';
import Testimonial from './Components/Testimonial';
import Casestudy from './Components/Casestudy';
import Feedback from './Components/Feedback';
function App() {
  return (
    <div className='artboard'>
      <Landing />
      <Aboutus />
      <Services />
      <Workflow />
      <Coretech />
      <Testimonial />
      <Casestudy />
      <Feedback />
    </div>
  );
}

export default App;
