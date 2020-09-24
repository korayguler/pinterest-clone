import Layout from 'components/Layout';
import CircleImage from 'components/CircleImage';
import styles from 'pages/css/profile.module.scss';
import Template from 'components/Template';
import DummyData from 'dummy';
import Pin from 'components/Pin';
const ProfilePage = () => {
  return (
    <Layout>
      <div className={styles.profileArea}>
        <CircleImage src={'image/profile.jpg'} size={'120px'} />
        <h1 className={styles.fullName}>Koray Güler</h1>
        <h5 className={styles.userName}>@koative</h5>
        <div className={styles.followArea}>
          <span>0 followers</span> · <span>3 followings</span>
        </div>
      </div>

      <Template columnWidth={150}>
        {DummyData.map((e, i) => (
          <Pin
            key={i}
            className='pin'
            title='Test Pin'
            desc='Test pin for my pinterest clone'
            image={e.image}
            href='http://korayguler.com/'
            pinWith={150}
          />
        ))}
      </Template>
    </Layout>
  );
};

export default ProfilePage;
