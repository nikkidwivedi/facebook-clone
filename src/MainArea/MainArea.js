import React from "react";
import './MainArea.css';
import { FiUsers  } from "react-icons/fi";
import { TiArrowRepeatOutline, TiBookmark, TiCreditCard, TiGroupOutline, TiVideoOutline  } from 'react-icons/ti';
import { BsBarChart, BsBox2Heart, BsCake2, BsCalendar2Event, BsCloudSun, BsShopWindow  } from 'react-icons/bs';
import { FaEllipsisH, FaFacebookMessenger, FaRegBookmark, FaRegShareSquare, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { MdOutlineSearch, MdVideoCall } from "react-icons/md";

function MainArea(){
  return (
    <div className="Main">
      <div className="Rside">
        <div className="feature">
          <img src="/images/dp1.jpg" alt="dp"/>
          <h3>User Name</h3>
        </div>
        <div className="feature">
          <FiUsers fontSize="4rem" />
          <h3>Find friends</h3>
        </div>
        <div className="feature">
          <TiArrowRepeatOutline fontSize="4rem" />
          <h3>Memories</h3>
        </div>
        <div className="feature">
          <TiBookmark fontSize="4rem" />
          <h3>Saved</h3>
        </div>
        <div className="feature">
          <TiGroupOutline fontSize="4rem" />
          <h3>Groups</h3>
        </div>
        <div className="feature">
          <TiVideoOutline fontSize="4rem" />
          <h3>Video</h3>
        </div>
        <div className="feature">
          <BsShopWindow  fontSize="4rem" />
          <h3>Marketplace</h3>
        </div>
        <div className="feature">
          <BsCalendar2Event fontSize="4rem" />
          <h3>Events</h3>
        </div>
        <div className="feature">
          <BsBarChart fontSize="4rem" />
          <h3>Ads Manager</h3>
        </div>
        <div className="feature">
          <BsBox2Heart fontSize="4rem" />
          <h3>Fundraisers</h3>
        </div>
        <div className="feature">
          <BsCake2 fontSize="4rem" />
          <h3>Birthday</h3>
        </div>
        <div className="feature">
          <BsCloudSun fontSize="4rem" />
          <h3>Climate Science Center</h3>
        </div>
        <div className="feature">
          <TiCreditCard fontSize="4rem" />
          <h3>Facebook Pay</h3>
        </div>
        <div className="feature">
          <FaFacebookMessenger fontSize="4rem" />
          <h3>Messenger</h3>
        </div>
      </div>

      <div className="Mside">
        <div className="category">
          <div className="category-title">
            <h3>Stories</h3>
            <h3>Reels</h3>
            <h3>Rooms</h3>
          </div>
          <hr style={{margin:"1rem"}}/>
          <div className="addStory">
            <div className="Story">
              <img src="/images/a1.jpg" alt="story imge"/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <p>User Name</p>
            </div>
            <div className="Story">
              <img src="/images/a2.jpg" alt="story imge"/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <p>Friend Name</p>
            </div>
            <div className="Story">
              <img src="/images/a3.jpg" alt="story imge"/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <p>Friend Name</p>
            </div>
            <div className="Story">
              <img src="/images/a4.jpg" alt="story imge"/>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <p>Friend Name</p>
            </div>
          </div>
        </div>
        <div className="channel">
          <div className="channel-head">
            <div className="ctitle">
              <img src="/images/dp3.jpg" alt="story imge"/>
              <h3>name</h3>
            </div>
            <div className="channel-icon">
              <div className="channel-icons">
                <MdVideoCall fontSize="2.5rem" />
              </div>
              <div className="channel-icons">
                <MdOutlineSearch fontSize="2.5rem" />
              </div>
              <div className="channel-icons">
                <FaEllipsisH fontSize="2.5rem" />
              </div>
            </div>
          </div>
          <div className="channel-body">
            <img src="/images/f3.jpg" alt="post" />
          </div>
          <div className="channel-foot">
            <div className="foot-icon">
              <FaRegThumbsUp fontSize="2rem" /> 
              <FaRegThumbsDown fontSize="2rem" />   
              <FaRegBookmark fontSize="2rem" />   
              <FaRegShareSquare fontSize="2rem" />
            </div>
          </div>
        </div>
        <div className="channel">
          <div className="channel-head">
            <div className="ctitle">
              <img src="/images/dp4.jpg" alt="story image"/>
              <h3>name</h3>
            </div>
            <div className="channel-icon">
              <div className="channel-icons">
                <MdVideoCall fontSize="2.5rem" />
              </div>
              <div className="channel-icons">
                <MdOutlineSearch fontSize="2.5rem" />
              </div>
              <div className="channel-icons">
                <FaEllipsisH fontSize="2.5rem" />
              </div>
            </div>
          </div>
          <div className="channel-body">
            <img src="/images/f7.jpg" alt="post" />
          </div>
          <div className="channel-foot">
            <div className="foot-icon">
              <FaRegThumbsUp fontSize="2rem" /> 
              <FaRegThumbsDown fontSize="2rem" />   
              <FaRegBookmark fontSize="2rem" />   
              <FaRegShareSquare fontSize="2rem" />
            </div>
          </div>
        </div>
        <div className="channel">
          <div className="channel-head">
            <div className="ctitle">
              <img src="/images/dp5.jpg" alt="story image"/>
              <h3>name</h3>
            </div>
            <div className="channel-icon">
              <div className="channel-icons">
                <MdVideoCall fontSize="2.5rem" />
              </div>
              <div className="channel-icons">
                <MdOutlineSearch fontSize="2.5rem" />
              </div>
              <div className="channel-icons">
                <FaEllipsisH fontSize="2.5rem" />
              </div>
            </div>
          </div>
          <div className="channel-body">
            <img src="/images/f1.jpg" alt="post" />
          </div>
          <div className="channel-foot">
            <div className="foot-icon">
              <FaRegThumbsUp fontSize="2rem" /> 
              <FaRegThumbsDown fontSize="2rem" />   
              <FaRegBookmark fontSize="2rem" />   
              <FaRegShareSquare fontSize="2rem" />
            </div>
          </div>
        </div>
      </div>

      <div className="Lside">
        <div className="Contact">
          <div className="Contacts">
            Contacts
          </div>
          <div className="Chaticon">
            <div className="icons">
              <MdVideoCall fontSize="2.5rem" />
            </div>
            <div className="icons">
              <MdOutlineSearch fontSize="2.5rem" />
            </div>
            <div className="icons">
              <FaEllipsisH fontSize="2.5rem" />
            </div>
          </div>
        </div>
        <div className="concise">
          <div className="Profile">
            <img src="/images/dp2.jpg" alt="profile pic"/>
            <h3>Friend Name</h3>
          </div>
          <div className="Profile">
            <img src="/images/dp3.jpg" alt="profile pic"/>
            <h3>Friend Name</h3>
          </div>
          <div className="Profile">
            <img src="/images/dp4.jpg" alt="profile pic"/>
            <h3>Friend Name</h3>
          </div>
          <div className="Profile">
            <img src="/images/dp5.jpg" alt="profile pic"/>
            <h3>Friend Name</h3>
          </div>
        </div>
        <hr />
        <div className="Contact">
          <div className="Contacts">
            Groups
          </div>
        </div>
        <div className="concise">
          <div className="GroupBox">
            <img src="/images/dp2.jpg" alt="profile pic"/>
            <img src="/images/dp3.jpg" alt="profile pic"/>
            <img src="/images/dp4.jpg" alt="profile pic"/>
            <img src="/images/dp5.jpg" alt="profile pic"/>
            <h3>Group Name</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainArea