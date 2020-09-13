import StackGrid, { transitions, easings } from 'react-stack-grid'
const transition = transitions.scaleDown
export default function Template({
  children,
  gutterHeight = 40,
  gutterWidth = 15,
  columnWidth = 235,
}) {
  return (
    <StackGrid
      duration={600}
      monitorImagesLoaded
      columnWidth={columnWidth}
      gutterWidth={gutterWidth}
      gutterHeight={gutterHeight}
      itemComponent={'div'}
      easing={easings.cubicOut}
      appearDelay={60}
      appear={transition.appear}
      appeared={transition.appeared}
      enter={transition.enter}
      entered={transition.entered}
      leaved={transition.leaved}
    >
      {children}
    </StackGrid>
  )
}
