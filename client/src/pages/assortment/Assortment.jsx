import React from 'react'
import assortment from './assortment.scss'
export default function Assortment() {
  return (
   <React.Fragment>
   <div class="row">
   <div class="col s3 m3">
     <div class="card">
       <div class="card-image">
         <img src="https://misterbant.ru/wp-content/gallery/arshavin/6687.png"></img>
         <span class="card-title">супир майка аршавин</span>
       </div>
       <div class="card-content">
         <p>Футболка с бафом на бег</p>
       </div>
       <div class="card-action">
         <a href="#">купить купить купить купить</a>
       </div>
     </div>
   </div>
   <div class="col s3 m3">
   <div class="card">
     <div class="card-image">
       <img src="https://misterbant.ru/wp-content/gallery/arshavin/6687.png"></img>
       <span class="card-title">супир майка аршавин</span>
     </div>
     <div class="card-content">
       <p>Футболка с бафом на бег</p>
     </div>
     <div class="card-action">
       <a href="#">купить купить купить купить</a>
     </div>
   </div>
 </div>
 </div>
   </React.Fragment>
  )
}
