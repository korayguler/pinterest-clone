import Layout from 'components/Layout';
import Pin from 'components/Pin';
import DummyData from 'dummy';
import Template from 'components/Template';
const HomePage = () => {
  return (
    <Layout>
      <Template>
        {DummyData.map((e, i) => (
          <Pin
            key={i}
            className='pin'
            title='Test Pin'
            desc='Test pin for my pinterest clone'
            image={e.image}
            href='http://korayguler.com/'
          />
        ))}
      </Template>
    </Layout>
  );
};
export default HomePage;
