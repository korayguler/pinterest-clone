import React from 'react'
import Layout from 'components/Layout'
import Pin from 'components/Pin'
import StackGrid from 'react-stack-grid'
import DummyData from 'dummy'

function Homepage() {
  return (
    <Layout>
      <StackGrid
        className='stackGrid'
        columnWidth={235}
        gutterWidth={15}
        gutterHeight={40}
        duration={1000}
        itemComponent={'div'}
      >
        {DummyData.map((e) => (
          <Pin
            className='pin'
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
