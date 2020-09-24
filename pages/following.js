import Layout from 'components/Layout';
import Pin from 'components/Pin';
import StackGrid, { transitions, easings } from 'react-stack-grid';
import Template from 'components/Template';
import DummyData from 'dummy';
const FollowingPage = () => {
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
            userImage='image/profile.jpg'
            userName='Koray'
            withDetails
            withTitle
          />
        ))}
      </Template>
    </Layout>
  );
};
export default FollowingPage;
