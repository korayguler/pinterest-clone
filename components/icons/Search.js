import * as React from 'react';

function SvgSearch(props) {
  return (
    <svg
      className='search_svg__gUZ search_svg__B9u search_svg__U9O search_svg__kVc'
      viewBox='0 0 24 24'
      aria-label='Arama simgesi'
      width='1em'
      height='1em'
      {...props}
    >
      <path
        fill='currentColor'
        d='M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0020 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 004.24 0 3 3 0 000-4.24'
      />
    </svg>
  );
}

export default SvgSearch;
