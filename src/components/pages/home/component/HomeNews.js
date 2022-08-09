import React from 'react'
import newsImages from './images/news/lewis.png'

export default function HomeNews() {
  return (
    <section className='home-news' id="news">
        <div className='home-news__container'>
           <h2 div className='section__title home-news__title'>News</h2>
            <div className='home-news__list'>
                <div className='list__item-news'>
                  <a href='/' className='item__link'>
                    <img src={newsImages} alt="" className='item__img' />
                  </a>
                  <h4 className='item__title'>.news-title</h4>
                </div>

                <div className='list__item-news'>
                  <a href='/' className='item__link'>
                    <img src={newsImages} alt="" className='item__img' />
                  </a>
                  <h4 className='item__title'>.news-title</h4>
                </div>

                <div className='list__item-news'>
                  <a href='/' className='item__link'>
                    <img src={newsImages} alt="" className='item__img' />
                  </a>
                  <h4 className='item__title'>.news-title</h4>
                </div>

                <div className='list__item-news'>
                  <a href='/' className='item__link'>
                    <img src={newsImages} alt="" className='item__img' />
                  </a>
                  <h4 className='item__title'>.news-title</h4>
                </div>
            </div>    
        </div>
    </section>
  )
}
