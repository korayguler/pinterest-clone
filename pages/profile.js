//style
import style from 'pages/css/profile.module.scss';
//MAIN COMPONENTS
import Layout from 'components/layout';
import CircleImage from 'components/circle-image';
import Template from 'components/template';
import Pin from 'components/pin';
//DUMMY DATA
import DummyData from 'dummy';

const ProfilePage = () => {
  return (
    <Layout>
      <div className={style.profileArea}>
        <CircleImage src={'image/profile.jpg'} size={'120px'} />
        <h1 className={style.fullName}>Koray Güler</h1>
        <h5 className={style.userName}>@koative</h5>
        <div className={style.followArea}>
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
