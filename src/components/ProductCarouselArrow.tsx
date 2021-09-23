import React, { FC } from 'react'

import arrowRight from '../_images/arrow-right.svg'

const ProductCarouselArrow: FC<IProps> = ({ direction, handleClick }): JSX.Element => (
  <button className="w-12 h-12 bg-white rounded-full" onClick={handleClick}>
    {direction === 'right' && <img className="p-3" src={arrowRight} />}
    {direction === 'left' && <img className="p-3 rotate-180" src={arrowRight} />}
  </button>
)

type IProps = {
  direction: 'left' | 'right'
  handleClick: (arg: React.MouseEvent) => void
}

export default ProductCarouselArrow