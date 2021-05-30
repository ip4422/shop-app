import React from 'react'

import { ICardAvatarProps } from '../types'
export const CardAvatar = ({
  imageSrc,
  name,
}: ICardAvatarProps): JSX.Element => {
  return <img src={imageSrc} alt={name} style={{ maxWidth: '150px' }} />
}
