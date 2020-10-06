//REACG
import { useState, useEffect } from 'react';
//MAIN COMPONENTS
import Layout from 'components/layout';
import Pin from 'components/pin';
import Template from 'components/template';
import Loader from 'components/loader';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/pins')
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  const Comp = () => {
    if (error) return <div>Error !!</div>;
    else if (!isLoaded) return <Loader />;
    else
      return (
        <Template>
          {items.map((e) => (
            <Pin
              key={e.id}
              className='pin'
              title={e.title}
              desc={e.details}
              image={e.image}
              href={e.url}
              withTitle
            />
          ))}
        </Template>
      );
  };

  return (
    <Layout>
      <Comp />
    </Layout>
  );
};
export default HomePage;
