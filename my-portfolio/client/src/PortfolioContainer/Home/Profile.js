import React from 'react'
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className='profile-container'> 
        <div className='profile-parent'>
            <div className='profile-details'>
                    
                <div className='colz'>
                    <a href="https://github.com/ZevLipsky">
                    <i class="bi bi-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/zev-lipsky-945a52238/'>
                    <i class="bi bi-linkedin"></i>
                    </a>

               
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'm <span className='highlighted-text'>Zev</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "Ethusiastic Dev 🔥",
                            1000,
                            "Full Stack Developer 💻",
                            1000,
                            "React Dev 📱",
                            1000,
                            
                        ]}
                        />
                    </h1>
                </span>
            </div>
            </div>

            </div>

        </div>
    </div>
  )
}
