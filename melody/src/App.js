import logo from './logo.svg';
import './App.css';
import { FaPhoneAlt, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";
import { PiPianoKeysLight, PiGuitarLight, PiMicrophoneLight, PiMusicNotesSimpleLight } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { GiTrumpet, GiHeadphones, GiPodiumWinner } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";




function App() {
  return (
    <div>
      {/* =============================top header start====================== */}
      <header>
        <div className="tophd">
          <div className="container">
            <div className="top_hd">
              <img src={require('./image/logo1.png')}></img>
              <div className='icon1'>
                <div className='icon'>
                  <a><FaPhoneAlt></FaPhoneAlt></a>
                </div>
                <div className='icon_info'>
                  <ul>
                    <li>1-800-1234-567</li>
                    <li>1-800-1234-567</li>
                  </ul>
                </div>
              </div>
              <div className='icon1'>
                <div className='icon'>
                  <a><FaLocationDot></FaLocationDot></a>
                </div>
                <div className='icon_info'>
                  <ul>
                    <li>2130 Fulton Street</li>
                    <li>San Diego, CA 94117-1080</li>
                  </ul>
                </div>
              </div>
              <div className='btn1'>
                <a>BOOK A LESSION</a>
              </div>
            </div>
          </div>
          {/* =================================navbar start====================== */}
          <div className='nav'>
            <div className='container'>
              <div className='navbar'>
                <div className='left_nav'>
                  <ul className='menu'>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>CLASSES</a></li>
                    <li><a>BLOG<span><RiArrowDownSLine></RiArrowDownSLine></span></a></li>
                    <li><a>TEACHERS</a></li>
                    <li><a>PAGES<span><RiArrowDownSLine></RiArrowDownSLine></span></a></li>
                    <li><a>CONTACTS</a></li>
                  </ul>
                </div>
                <div className='right_nav'>
                  <a><FaSearch></FaSearch></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ========================top header end=========================== */}

      <main>
        {/* ==========================slider start======================= */}

        <div className='slider1'>
          <div className='slider'>
            <img src={require('./image/slider1.jpg')}></img>
            <div className='slider_info'>
              <div className='sl_hd'>Music<i>for</i></div>
              <div className='sl_hd2'>Everyone</div>
              <div className='sl_btn'>
                <a>START LEARNING</a>
              </div>
            </div>
          </div>
        </div>

        {/* =============================slider end====================== */}

        {/* ================================section 1 start====================== */}

        <div className='container'>
          <div className='sec_1 space'>
            <div className='first_sec'>
              <img src={require('./image/sec1.jpg')}></img>
            </div>
            <div className='second_sec'>
              <h1>Welcome to Melody!</h1>
              <p>Melody Music School offers comprehensive musicianship through active learning for children and adults. Our music educators are highly qualified and share a love of teaching.</p>
              <p>Our curriculum offers group experiences, private lessons, ensemble participation, theater, and camps. We believe that learning music can be fun, and we believe in the effectiveness of learning in groups.</p>
              <div className='btn2'>
                <a>READ MORE</a>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================section 1 end========================== */}
        {/* =======================================section 2 start============================= */}
        <div className='sec_2'>
          <div className='container'>
            <div className='sec2_info space'>
              <div className='sec2_heading'>
                <h1>Music Classes</h1>
              </div>
              <div className='sec2_blog'>
                <div className='sec2_item'>
                  <div className='item1'>
                    <div className='blog1'>
                      <a><PiPianoKeysLight></PiPianoKeysLight></a>
                      <h3>Piano</h3>
                      <p>Want to learn to play piano? Our Piano Lessons are open to everyone.</p>
                    </div>
                  </div>
                  <div className='item1'>
                    <div className='blog1'>
                      <a><PiGuitarLight></PiGuitarLight></a>
                      <h3>Guitar</h3>
                      <p>Learn to play the world’s popular instrument with our guitar classes.</p>
                    </div>
                  </div>
                  <div className='item1'>
                    <div className='blog1'>
                      <a><PiMicrophoneLight></PiMicrophoneLight></a>
                      <h3>vocal</h3>
                      <p>Melody offers a wide variety of vocal classes for all ages and skills.</p>
                    </div>
                  </div>
                </div>
                <div className='sec2_item'>
                  <div className='item1'>
                    <div className='blog1'>
                      <a><GiTrumpet></GiTrumpet></a>
                      <h3>Trumpet</h3>
                      <p>We offer extensive trumpet learning program at our music school.</p>
                    </div>
                  </div>
                  <div className='item1'>
                    <div className='blog1'>
                      <a><GiHeadphones></GiHeadphones></a>
                      <h3>DJ</h3>
                      <p>DJ music class provides in-depth knowledge and training for aspiring DJs.</p>
                    </div>
                  </div>
                  <div className='item1'>
                    <div className='blog1'>
                      <a><PiMusicNotesSimpleLight></PiMusicNotesSimpleLight></a>
                      <h3>Hearing</h3>
                      <p>Hearing curriculum at our School develops students aural skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========================================section 2 end================================ */}

        {/* ========================================section 3 start================================ */}

        <div className='container'>
          <div className='sec3_info space'>
            <div className='sec3_heading'>
              <h1>Music Groups</h1>
              <p>Our music school offers a variety of groups to learn music and sharpen your skills. If you prefer private lessons, we have what to offer you and your children.</p>
            </div>
            <div className='sec3_img'>
              <div className='sec_img'>
                <img src={require('./image/sec3_1.jpg')}></img>
                <h2>Kids</h2>
              </div>
              <div className='sec_img'>
                <img src={require('./image/sec3_2.jpg')}></img>
                <h2>Teens</h2>
              </div>
              <div className='sec_img'>
                <img src={require('./image/sec3_3.jpg')}></img>
                <h2>Adults</h2>
              </div>
              <div className='sec_img'>
                <img src={require('./image/sec3_4.jpg')}></img>
                <h2>Private lessons</h2>
              </div>
            </div>
          </div>
        </div>
        {/* ========================================section 3 end================================= */}

        {/* ======================================section 4 parallex stat========================== */}
        <div className='parallex space'>
          <div className='container'>
            <div className='sec4_info'>
              <h1>Choose <i>the Best</i></h1>
              <h1>Time for Lessons</h1>
              <p>Our students can select any time for their music lessons that fits their timetable, whether it’s a weekday evening or weekend morning.</p>
              <div className='btn3'>
                <a>LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
        {/* ======================================section 4 parallex end========================== */}

        {/* ======================================section 5 testimonial start======================= */}
        <div className='container'>
          <div className='sec5 space'>
            <div className='sec5_info'>
              <div className='sec5_item'>
                <div className='sec5_img'>
                  <img src={require('./image/sec5_1.jpg')}></img>
                </div>
                <div className='sec5img_info'>
                  <h4>Albert Webb</h4>
                  <p>Student, Piano Class</p>
                </div>
              </div>
              <p>I began as adult student that never had any musical training. Your teachers spent time to understand my objectives and even gave me one trial lesson. It became a great beginning of my piano class.</p>
            </div>
            <div className='sec5_info'>
              <div className='sec5_item'>
                <div className='sec5_img'>
                  <img src={require('./image/sec5_2.jpg')}></img>
                </div>
                <div className='sec5img_info'>
                  <h4>Kelly McMillan</h4>
                  <p>Student, Vocal Class</p>
                </div>
              </div>
              <p>I’ve learned so much with you. You don’t simply observe and correct mistakes. The suggestions you make always have broader implications; you explain the detailed performance of a certain piece.</p>
            </div>
            <div className='sec5_info'>
              <div className='sec5_item'>
                <div className='sec5_img'>
                  <img src={require('./image/sec5_3.jpg')}></img>
                </div>
                <div className='sec5img_info'>
                  <h4>Harold Barnett</h4>
                  <p>Student, Hearing Class</p>
                </div>
              </div>
              <p>I am not a seasoned musician but I have some experience in music. Your hearing classes have given me more confidence in identifying notes and chords. I’m very glad to recommend your lessons to everyone.</p>
            </div>
          </div>
        </div>
        {/* ======================================section 5 testimonial start======================= */}

        {/* =========================================section 6 parallex start======================= */}
        <div className='parallex2 space'>
          <div className='container'>
            <div className='sec6_info'>
              <h1>Some Facts About Our School</h1>
              <p>We have been helping people sharpen their music skills since our foundation. Below are just some facts and numbers from our history that will tell you more about us.</p>
              <div className='sec6'>
                <div className='sec6_info2'>
                  <a><GiPodiumWinner></GiPodiumWinner></a>
                  <h1>12</h1>
                  <p>International Awards</p>
                </div>
                <div className='sec6_info2'>
                  <a><PiMusicNotesSimpleLight></PiMusicNotesSimpleLight></a>
                  <h1>238</h1>
                  <p>Satisfied Students</p>
                </div>
                <div className='sec6_info2'>
                  <a><CiStar></CiStar></a>
                  <h1>19</h1>
                  <p>Years of Experience</p>
                </div>
                <div className='sec6_info2'>
                  <a><HiOutlineUsers></HiOutlineUsers></a>
                  <h1>54</h1>
                  <p>Qualified Teachers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =========================================section 6 parallex end ======================= */}

        {/* ============================================section 7 start =========================== */}
        <div className='container'>
          <div className='sec7 space'>
            <div className='sec7_heading'>
              <h1>Our Teachers</h1>
            </div>
            <div className='sec7_info'>
              <div className='sec7_img'>
                <img src={require('./image/sec7_1.jpg')}></img>
                <a>Nathalie Porter</a>
                <p>Founder, Vocal Teacher</p>
              </div>
              <div className='sec7_img'>
                <img src={require('./image/sec7_2.jpg')}></img>
                <a>Nathalie Porter</a>
                <p>Founder, Vocal Teacher</p>
              </div>
              <div className='sec7_img'>
                <img src={require('./image/sec7_3.jpg')}></img>
                <a>Nathalie Porter</a>
                <p>Founder, Vocal Teacher</p>
              </div>
              <div className='sec7_img'>
                <img src={require('./image/sec7_4.jpg')}></img>
                <a>Nathalie Porter</a>
                <p>Founder, Vocal Teacher</p>
              </div>
            </div>
          </div>
        </div>
        {/* ============================================section 7 end =========================== */}

        {/* ========================================section 8 start============================ */}
        <div className='sec_8'>
          <div className='conatainer'>
            <div className='sec8 space'>
              <p>Start Learning <i>Your Favorite Instrument</i> Right Now!</p>
              <div className='btn4'>
                <a>GET STARTED</a>
              </div>
            </div>
          </div>
        </div>
        {/* ========================================section 8 end============================== */}

        {/* ======================================section 9 start============================== */}
        <div className='container'>
          <div className='sec9 space'>
            <div className='sec9_heading'>
              <h1>Upcoming Events</h1>
            </div>
            <div className='sec9_blog'>
              <div className='sec_9'>
                <div className='sec9_item'>
                  <img src={require('./image/sec9_1.jpg')}></img>
                </div>
                <div className='sec9_info'>
                  <h1>String Instruments Masterclass</h1>
                  <div className='sec9_blog_info'>
                    <a>by Theresa Barnes</a>
                    <a>Apr 21, 2021 at 12:05 pm</a>
                    <a>Events</a>
                  </div>
                  <p>This Friday, our teachers and students will organize a special masterclass open to everyone who is interested in string instruments. You can learn more about this event by contacting...</p>
                </div>
              </div>
              <div className='sec_9'>
                <div className='sec9_item'>
                  <img src={require('./image/sec9_2.jpg')}></img>
                </div>
                <div className='sec9_info'>
                  <h1>Melody Music School Live DJ Set</h1>
                  <div className='sec9_blog_info'>
                    <a>by Theresa Barnes</a>
                    <a>Apr 21, 2021 at 12:05 pm</a>
                    <a>Events</a>
                  </div>
                  <p>Come visit our school next Sunday to enjoy a great track selections and DJ sets by our students and their teacher John Thompson. The event will also include live performances by...</p>
                </div>
              </div>
            </div>
            <div className='btn1'>
              <a>VIEW ALL EVENTS</a>
            </div>
          </div>
        </div>
        {/* =========================================section 9 end============================= */}

        {/* ==========================================section 10 start========================== */}
        <div className='container'>
          <div className='sec10 space'>
            <div className='sec10_item'>
              <a><FaPhoneAlt></FaPhoneAlt></a>
              <p>1-800-1234-678</p>
            </div>
            <div className='sec10_item'>
              <a><IoMdMail></IoMdMail></a>
              <p>info@demolink.org</p>
            </div>
            <div className='sec10_item border'>
              <a><FaLocationDot></FaLocationDot></a>
              <p>2130 Fulton Street San Diego, CA 94117-1080 USA</p>
            </div>
          </div>
        </div>
        {/* ==========================================section 10 end========================== */}

        {/* =======================================footer start====================== */}
        <div className='ft_clr'>
          <div className='container'>
            <div className='footer'>
              <div className='ft_info'>
                <div className='ft_item1'>
                  <h1>About Us</h1>
                  <p>Our music school was founded in 1999 to help students of all ages from all over the state to pursue their dream of becoming musicians. If you would like to learn how to play any musical instrument, our school is the place for you, regardless of your age and social status. We offer group and private lessons for children and adults.</p>
                </div>
                <div className='ft_item2'>
                  <h1>Recent Blog Posts</h1>
                  <p>Traditional or Online Music School: Which One to Pick and Why</p>
                  <a>by Theresa Barnes 2 days ago</a>
                  <p>Are Grades Important for Getting into Music School?</p>
                  <a>by Theresa Barnes 2 days ago</a>
                </div>
                <div className='ft_item3'>
                  <h1>Our Gallery</h1>
                  <div className='ft_img'>
                    <img src={require('./image/ft_1.jpg')}></img>
                    <img src={require('./image/ft_2.jpg')}></img>
                    <img src={require('./image/ft_3.jpg')}></img>
                    <img src={require('./image/ft_4.jpg')}></img>
                  </div>
                  <div className='ft_img'>
                    <img src={require('./image/ft_5.jpg')}></img>
                    <img src={require('./image/ft_6.jpg')}></img>
                    <img src={require('./image/ft_7.jpg')}></img>
                    <img src={require('./image/ft_8.jpg')}></img>
                  </div>
                </div>
              </div>
              <div className='footer_menu'>
                <div className='footer_left'>
                  <ul className='ft_menu'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CLASSES</li>
                    <li>GALLERY</li>
                    <li>BLOG</li>
                    <li>CONTACTS</li>
                  </ul>
                </div>
                <div className='footer_right'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FaGoogle></FaGoogle></a>
                  <a><FaLinkedinIn></FaLinkedinIn></a>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* =======================================footer end====================== */}
        {/* ======================================sd footer start================ */}
        <div className='sdfooter'>
          <div className='container'>
            <div className='sd_ft'>
              <div className='sd_ft_img'><img src={require('./image/logo2.png')}></img></div>
              <div><p>© 2023 All Rights Reserved. Terms of Use and Privacy Policy</p></div>
            </div>
          </div>
        </div>
        {/* ======================================sd footer end================ */}






      </main>
    </div>
  );
}

export default App;