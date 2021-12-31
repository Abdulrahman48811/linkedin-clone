import React from 'react'
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
 const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
      <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
      </div>
    )


  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>


      {newsArticle("My first clone!", "Top news - 9999 readers")}
      {newsArticle("Hundreds of Colorado homes lost and tens of thousands of residents told to evacuate due to fast-growing wildfires", "Top news - 3509 readers")}
      {newsArticle("State data: 656 state employees or contractors fired, 332 quit over COVID-19 vaccination mandate", "Covid-19 Updates - 329 readers")}
      {newsArticle("Biden and Putin exchange warnings during phone call amid rising Ukraine tensions", "Political news - 5643 readers")}
      {newsArticle("Health data suggests South Africa's Omicron peak has passed with no major spike in deaths", "Health news - 892 readers")}
      {newsArticle("Maps show improvement in drought conditions amid storms, but California needs 'much more' rain, snow!", "Weather - 269 readers")}
      {newsArticle("California Man on Deadly Mission to White House Is Arrested, Officials Say", "Daily news - 119 readers")}
      {newsArticle("U.S. hits record high with nearly 500,000 COVID-19 cases in a single day", "Covid-19 Updates - 4000 readers")}

    </div>
  )
}

export default Widgets
