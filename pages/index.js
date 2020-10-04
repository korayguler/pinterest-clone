//MAIN COMPONENTS
import Layout from 'components/layout';
import Pin from 'components/pin';
import Template from 'components/template';
//DUMMY DATA
import DummyData from 'dummy';

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
            withTitle
          />
        ))}
      </Template>
    </Layout>
  );
};
export default HomePage;
