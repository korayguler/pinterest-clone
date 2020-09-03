import React from 'react'
import Header from 'components/Header'
import Layout from 'components/Layout'
import Pin from 'components/Pin'
import StackGrid from 'react-stack-grid'
const Homepage = () => {
  return (
    <Layout>
      <StackGrid columnWidth={235} gutterWidth={15} gutterHeight={40}>
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-2.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-3.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-2.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-2.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-4.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-2.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-2.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-2.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-3.jpg'
          href='http://korayguler.com/'
        />
        <Pin
          title='Test Pin'
          desc='Test pin for my pinterest clone'
          image='/image/pin-placeholder-4.jpg'
          href='http://korayguler.com/'
        />
      </StackGrid>
    </Layout>
  )
}
export default Homepage
