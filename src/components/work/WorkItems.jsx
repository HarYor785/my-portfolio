import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <div className='work__img-container'>
          <img src={item.image} alt={item.title} className='work__img' />
          {item.image2 && <img src={item.image2} alt={item.title} className='work__img-hover' />}
        </div>
        <h3 className="work__title">{item.title}</h3>
        <span className="work__subtitle">{item.subTitle}</span>
        <div className="work__buttons">
          <a href={item.link} className="work__button" target='_blank' rel='noreferrer'>
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          <a href={item.github} className='work__button' target='_blank' rel='noreferrer'>
            <i class='bx bxl-github work__button-icon'></i>
          </a>
        </div>
    </div>
  )
}

export default WorkItems