import React from 'react'
import Button from 'components/Button'

import Logo from 'components/icons/MainLogo'
export default function PreviewPage() {
  return (
    <div>
      <Button className='opened'>Button</Button>
      <Button>
        <Logo width={24} height={24} />
      </Button>
    </div>
  )
}
