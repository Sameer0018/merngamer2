import React from 'react'
//import footer from './Footer'
import './css/style.css'
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <>
    
    

        <section id="hero-image">
        <div className="hero-marketing-text">
            <h1>The Best <span>Games</span> Out There</h1>
            <h5>God of War Ragnarök is an upcoming action-adventure game by Santa Monica Studio and will be published by Sony Interactive Entertainment. It is scheduled to be released in 2022 for the PlayStation 4 and PlayStation 5. It will be the ninth installment in the God of War series,</h5>
            <button>Read More</button>
        </div>
    </section>
    
    
    <section id="latest-news">
        <div className="flex">
            <h5>Latest News</h5>
            <div id="latest-news-container">
                <div className="latest-news-item">
                    <span className="badge new">New</span>
                    <span className="latest-news-text"> Thief's End is a 2016 action-adventure game developed by Naughty Dog. </span>
                </div>
            </div>
        </div>
    </section>

    <section id="game-types-boxes">
        <div className="flex">
            <div className="box new">
                <div className="shade"></div>
                <span className="badge new">New</span>
                <div className="contents">
                    <h4>Grand Theft Auto V Reloaded GTA 5 Free Download PC Game setup in single direct link for Windows.</h4>
                    <p> GTA 5 is an amazing action and adventure game.</p>
                    <Link to="#" className="comments">3 Comments</Link>
                </div>
            </div>

            <div className="box strategy">
                <div className="shade"></div>
                <span className="badge strategy">New</span>
                <div className="contents">
                    <h4>Valorant is a free-to-play first-person hero shooter .</h4>
                    <p>5v5 character-based tactical where precise gunplay meets unique agent abilities VALORANT and its stylish</p>
                    <Link to="#" className="comments">3 Comments</Link>
                </div>
            </div>

            <div className="box rpg">
                <div className="shade"></div>
                <span className="badge rpg">New</span>
                <div className="contents">
                    <h4>it is an exciting action first person shooting game. The game is all about survival.</h4>
                    <p>This game is a survival instinct where you are surrounded by dangerous zombies all over. </p>
                    <Link to="#" className="comments">3 Comments</Link>
                </div>
            </div>

            <div className="box racing">
                <div className="shade"></div>
                <span className="badge racing">New</span>
                <div className="contents">
                    <h4>Red Dead Redemption 2 action-adventure game developed by Rockstar Games. </h4>
                    <p>It's The Godfather of video games, The Black Album of video games, and the magnum opus of Rockstar so far. </p>
                    <Link to="#" className="comments">3 Comments</Link>
                </div>
            </div>
        </div>
    </section>


    <section id="recent-reviews">
        <h1>Recent Reviews</h1>
        <div className="flex">
            <div className="box">
                <span className="rating-badge gold">9.9</span>
                <div className="recent-reviews-image">
                    <img src="https://wallpapercave.com/wp/wp6012294.jpg" alt="not attach" />
                </div>
                <div>
                    <h4>Valorant</h4>
                    <p>Valorant is a free-to-play first-person hero shooter .</p>
                </div>
            </div>

            <div className="box">
                <span className="rating-badge purple">9.5</span>
                <div className="recent-reviews-image">
                    <img src="https://wallpapercave.com/wp/wp4501560.jpg"alt="not attach" />
                </div>
                <div>
                    <h4>Gta V</h4>
                    <p>Grand Theft Auto V Reloaded GTA 5 Free Download PC Game setup in single direct link for Windows.</p>
                </div>
            </div>

            <div className="box">
                <span className="rating-badge green">9.1</span>
                <div className="recent-reviews-image">
                    <img src="https://wallpapercave.com/wp/wp2101616.jpg" alt="not attach" />
                </div>
                <div>
                    <h4>Uncharted</h4>
                    <p>A Thief's End is a 2016 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment.</p>
                </div>
            </div>

            <div className="box">
                <span className="rating-badge violet">9.7</span>
                <div className="recent-reviews-image">
                    <img src="https://wallpapercave.com/wp/wp7972806.jpg" alt="not attach" />
                </div>
                <div>
                    <h4>Watch Dogs</h4>
                    <p>Watch Dogs: Legion is a 2020 action-adventure game developed by Ubisoft Toronto and published by Ubisoft. </p>
                </div>
            </div>
        </div>
    </section>












        </>   
    )
}

export default Home
