import React from 'react';
function Card(props) {
  return (
    <div className='box-container'>
    <div className='box'>
        <div className='picture-box'>
            <img  className='pfp' src={props.img} alt='Memeber-avatar'/>
            <div className="title"><h3>{props.name}</h3></div>
            <div className="title"><h4>{props.role}</h4></div>   
            <div class="socials">
                <div className="insta">
                <a href={props.insta}>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                  Instagram
                      </span>
                </button>
                </a>
                </div>
                <div className="linkedin">
               <a href={props.linkedin}>
               <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Linkedin
                    </span>
                </button>
               </a>
                </div>
                </div>
            </div> 
        </div>
    </div>

  )
}
export default Card;