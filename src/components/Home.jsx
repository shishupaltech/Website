import React from 'react';
import vg from '../assets/2.webp';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillInstagram,
    AiFillYoutube
} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id="home">
        <main>
        <h1>TechyStar</h1>

        <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2" >
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore maxime, pariatur at molestiae doloremque facilis adipisci alias natus, velit consequuntur nesciunt modi minus deserunt nihil accusantium ab neque amet eaque cumque illo id commodi recusandae ipsa. Beatae enim deleniti consequuntur magnam soluta ipsam harum? Quam sint doloremque ex, optio provident vel debitis ipsam recusandae? Eaque rem autem, placeat commodi quasi totam amet temporibus dolore velit mollitia pariatur consequuntur tenetur provident nulla obcaecati odio a veniam, assumenda qui esse. Provident facilis dolore, vero ex nihil neque veritatis.</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s",}}>
                <AiFillGoogleCircle/>
                <p>Goolge</p>
                </div>
                <div style={{animationDelay:"0.5s",}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s",}}>
                <AiFillInstagram/>
                <p>Instagram</p>
                </div>
                <div style={{animationDelay:"0.1s",}}>
                <AiFillYoutube/>
                <p>Youtube</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home