import Layout from 'components/Layout'
import CircleImage from 'components/CircleImage'
import styles from 'pages/css/profile.module.scss'
const ProfilePage = () => {
  return (
    <Layout>
      <CircleImage src={'image/profile.jpg'} size={'120px'} />
    </Layout>
  )
}

export default ProfilePage
