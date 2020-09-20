import Layout from 'components/Layout';
import PinExtra from 'components/PinExtra';
import StackGrid, { transitions, easings } from 'react-stack-grid';
import Template from 'components/Template';
import DummyData from 'dummy';
import dummyData from 'dummy';
const FollowingPage = () => {
  return (
    <Layout>
      <Template gutterHeight={24}>
        {dummyData.map((e, i) => (
          <PinExtra
            key={i}
            title={e.title}
            image={e.image}
            href={e.href}
            userImage={e.userImage}
            username={e.username}
            imageSize={'32px'}
          />
        ))}
      </Template>
    </Layout>
  );
};
export default FollowingPage;
