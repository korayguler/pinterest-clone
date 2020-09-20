import * as React from 'react';

function SvgNotification(props) {
  return (
    <svg
      className='notification_svg__gUZ notification_svg__B9u notification_svg__U9O notification_svg__kVc'
      viewBox='0 0 24 24'
      aria-hidden='true'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z'
      />
    </svg>
  );
}

export default SvgNotification;
