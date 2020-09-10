import Layout from 'components/Layout'
import Pin from 'components/Pin'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import DummyData from 'dummy'

const transition = transitions.scaleDown
export default function Homepage() {
  return (
    <Layout>
      <StackGrid
        duration={400}
        monitorImagesLoaded
        columnWidth={235}
        gutterWidth={15}
        gutterHeight={40}
        itemComponent={'div'}
        easing={easings.cubicOut}
        appearDelay={60}
        appear={transition.appear}
        appeared={transition.appeared}
        enter={transition.enter}
        entered={transition.entered}
        leaved={transition.leaved}
      >
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
      </StackGrid>
    </Layout>
  )
}
