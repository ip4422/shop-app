import React from 'react'

interface CardAvatarProps {
  imageSrc?: string
  name?: string
}

export const CardAvatar = ({
  imageSrc,
  name,
}: CardAvatarProps): JSX.Element => {
  return <img src={imageSrc} alt={name} style={{ maxWidth: '150px' }} />
}
