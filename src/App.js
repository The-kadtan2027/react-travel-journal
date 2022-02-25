import './styles/styles.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';

function App() {
  return (
    <div className="main">
      <Header />
      {data.map((item,id) => (
      <Card 
        key={id}
        img={item.imageUrl}
        location={item.location}
        mapUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}

      />

      ))}
    </div>
  );
}

export default App;
