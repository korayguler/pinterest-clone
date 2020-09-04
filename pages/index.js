import React from 'react'
import Header from 'components/Header'
import Layout from 'components/Layout'
import Pin from 'components/Pin'
import StackGrid from 'react-stack-grid'
import DummyData from 'dummy'
const Homepage = () => {
  return (
    <Layout>
      <StackGrid columnWidth={235} gutterWidth={15} gutterHeight={40}>
        {DummyData.map((e) => (
          <Pin
            title='Test Pin'
            desc='Test pin for my pinterest clone'
            image={e.image}
            href='http://korayguler.com/'
          />
        ))}
      </StackGrid>
    </Layout>
  )
}
export default Homepage
