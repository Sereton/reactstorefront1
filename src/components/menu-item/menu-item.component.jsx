import React from 'react'
import "./menu-item.styles.scss"

const MenuItem = ({title, subtitle,key, imageUrl,size}) => (
    <div className={`${size} menu-item`} key={key} style={{
      
      backgroundImage: `url(${imageUrl})`}}>
        <div className='content'>
          <div className='title'>{title}</div>
          <span className='subtitle'>{subtitle}</span>
        </div>
      </div>
)

export default MenuItem;