import { Link, Outlet } from "react-router-dom"
import style from './nav.module.css'
import { useState } from "react";

let disk_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18" fill="var(--white)"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5"/></svg>;
let resume_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="var(--white)"><path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"></path></svg> 
let facebook_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="var(--white)"><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg>
let github_i = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" fill="var(--white)"><path d="M5.88401 18.6533C5.58404 18.4526 5.32587 18.1975 5.0239 17.8369C4.91473 17.7065 4.47283 17.1524 4.55811 17.2583C4.09533 16.6833 3.80296 16.417 3.50156 16.3089C2.9817 16.1225 2.7114 15.5499 2.89784 15.0301C3.08428 14.5102 3.65685 14.2399 4.17672 14.4263C4.92936 14.6963 5.43847 15.1611 6.12425 16.0143C6.03025 15.8974 6.46364 16.441 6.55731 16.5529C6.74784 16.7804 6.88732 16.9182 6.99629 16.9911C7.20118 17.1283 7.58451 17.1874 8.14709 17.1311C8.17065 16.7489 8.24136 16.3783 8.34919 16.0358C5.38097 15.3104 3.70116 13.3952 3.70116 9.63971C3.70116 8.40085 4.0704 7.28393 4.75917 6.3478C4.5415 5.45392 4.57433 4.37284 5.06092 3.15636C5.1725 2.87739 5.40361 2.66338 5.69031 2.57352C5.77242 2.54973 5.81791 2.53915 5.89878 2.52673C6.70167 2.40343 7.83573 2.69705 9.31449 3.62336C10.181 3.41879 11.0885 3.315 12.0012 3.315C12.9129 3.315 13.8196 3.4186 14.6854 3.62277C16.1619 2.69 17.2986 2.39649 18.1072 2.52651C18.1919 2.54013 18.2645 2.55783 18.3249 2.57766C18.6059 2.66991 18.8316 2.88179 18.9414 3.15636C19.4279 4.37256 19.4608 5.45344 19.2433 6.3472C19.9342 7.28337 20.3012 8.39208 20.3012 9.63971C20.3012 13.3968 18.627 15.3048 15.6588 16.032C15.7837 16.447 15.8496 16.9105 15.8496 17.4121C15.8496 18.0765 15.8471 18.711 15.8424 19.4225C15.8412 19.6127 15.8397 19.8159 15.8375 20.1281C16.2129 20.2109 16.5229 20.5077 16.6031 20.9089C16.7114 21.4504 16.3602 21.9773 15.8186 22.0856C14.6794 22.3134 13.8353 21.5538 13.8353 20.5611C13.8353 20.4708 13.836 20.3417 13.8375 20.1145C13.8398 19.8015 13.8412 19.599 13.8425 19.4094C13.8471 18.7019 13.8496 18.0716 13.8496 17.4121C13.8496 16.7148 13.6664 16.2602 13.4237 16.051C12.7627 15.4812 13.0977 14.3973 13.965 14.2999C16.9314 13.9666 18.3012 12.8177 18.3012 9.63971C18.3012 8.68508 17.9893 7.89571 17.3881 7.23559C17.1301 6.95233 17.0567 6.54659 17.199 6.19087C17.3647 5.77663 17.4354 5.23384 17.2941 4.57702L17.2847 4.57968C16.7928 4.71886 16.1744 5.0198 15.4261 5.5285C15.182 5.69438 14.8772 5.74401 14.5932 5.66413C13.7729 5.43343 12.8913 5.315 12.0012 5.315C11.111 5.315 10.2294 5.43343 9.40916 5.66413C9.12662 5.74359 8.82344 5.69492 8.57997 5.53101C7.8274 5.02439 7.2056 4.72379 6.71079 4.58376C6.56735 5.23696 6.63814 5.77782 6.80336 6.19087C6.94565 6.54659 6.87219 6.95233 6.61423 7.23559C6.01715 7.8912 5.70116 8.69376 5.70116 9.63971C5.70116 12.8116 7.07225 13.9683 10.023 14.2999C10.8883 14.3971 11.2246 15.4769 10.5675 16.0482C10.3751 16.2156 10.1384 16.7802 10.1384 17.4121V20.5611C10.1384 21.5474 9.30356 22.2869 8.17878 22.09C7.63476 21.9948 7.27093 21.4766 7.36613 20.9326C7.43827 20.5204 7.75331 20.2116 8.13841 20.1276V19.1381C7.22829 19.1994 6.47656 19.0498 5.88401 18.6533Z"></path></svg>

function Nav(){ 
   let [cursBuddySwitch, setCursBuddySwitch] = useState(true);
   let character = document.getElementById('character');
   let budBtn = document.querySelector('data-cursor-buddy');
   if(cursBuddySwitch){
      character.style.display = "block";
      //budBtn.classList.add("budOf");
   }else{
      character.style.display = "none";
      //budBtn.classList.add("budOn");
   }

   const goToWebsiteLink = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
   };
   
   return(
      <>
         <nav className={`${style.nav}`}>
            <section className={`${style.music_resume}`}>
               <div className={`${style.music_box} rend_px circle_size brd_rds_clr`}>
                  <button className={`${style.btn_icon} disable_unesary att`}>
                     {disk_i}
                  </button>
               </div>
               <div className={`${style.resume_box} rend_px circle_size brd_rds_clr`}>
                  <button className={`${style.btn_icon} disable_unesary att`}>
                     {resume_i}
                  </button>
               </div>
            </section>

            <section className={`${style.main_links}`}>
               <header className={`${style.page_links_con} brd_rds_clr`}>
                  <div className={`${style.page_links} rend_px`}>
                     <ul>
                        <li>
                           <Link to='/' className={`att`}>Home</Link>
                        </li>
                        <li>
                           <Link to='/project' className={`att`}>Projects</Link>
                        </li>
                        <li>
                           <Link to='/about' className={`att`}>About</Link>
                        </li>
                     </ul>
                  </div>
               </header>

               <section className={`${style.fb_gHub_con}`}>
                  <div className={`${style.fb_link} rend_px circle_size brd_rds_clr`}>
                     <button onClick={()=>{goToWebsiteLink("https://www.facebook.com/anica.cruz.58")}} className={`${style.btn_icon} att`}>
                        {facebook_i}
                     </button>
                  </div>
                  <div className={`${style.gHub_link} rend_px circle_size brd_rds_clr`}>
                     <button onClick={()=>{goToWebsiteLink("https://github.com/Cybeles-Eos")}} className={`${style.btn_icon} att`}>
                        {github_i}
                     </button>
                  </div>
               </section>
            </section>

            <div className={`${style.clock}`}>
               <pre className={``}>10  :  23  :  02    |</pre> 

               <button onClick={()=>{
                  setCursBuddySwitch(!cursBuddySwitch);
                  //console.log(cursBuddySwitch)
               }} data-cursor-buddy title="Cursor buddy">{cursBuddySwitch ? "Off" : "On"}</button>
            </div>
         </nav>

         <Outlet />
      </>
   )
}

export default Nav