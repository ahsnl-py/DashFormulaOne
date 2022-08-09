import React from 'react'

export default function HomeStats() {
  return (
    <section className='home-stats' id="stats">
            <div className='home-stats__nav'>
                <ul className='nav__lists'>
                    <li className='list__item nav--item'>
                        <a href="/" className='item__tab'>Driver</a>
                    </li>
                    <li className='list__item nav--item'>
                        <a href="/" className='item__tab'>Constructor</a>
                    </li>
                    <li className='list__item nav--item'>
                        <a href="/" className='item__tab'>Race</a>
                    </li>
                </ul>
            </div>
            
            <div className='home-stats__stats'>
                <div className='stats__charts'>.charts</div>
                <div className='stats__table'>
                    <table border={1} cellPadding={2}>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                    <a href="/" className='section__btn btn__stats'>Full Stats</a>
                </div>
                {/* <div className='stats-driver__constructor'>.constructor</div>
                <div className='stats-driver__race'>.race</div> */}
            </div>
            
    </section>
  )
}
