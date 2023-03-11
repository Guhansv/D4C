import React from 'react'

function Card(props) {
  return (
    <div className='box-container'>
    <div className='box'>
        <div className='picture-box'>
            <img  className='pfp' src={props.img} alt='Memeber-avatar'/>
            <div className="title"><h3>{props.name}</h3></div>
            <div className="title"><h4>{props.role}</h4></div>   
            <div class="socials">
                <div className="insta"><button class="btn btn-outline-danger"><a href={props.insta}>Instagram</a></button></div>
                <div className="linkedin"><button class="btn btn-outline-primary"><a href={props.linkedin}>Linkedin</a></button></div></div>
            </div> 
        </div>
    </div>

  )
}
export default Card;