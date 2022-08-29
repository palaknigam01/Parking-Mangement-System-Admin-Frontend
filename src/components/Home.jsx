import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div>
          <div className="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span className="admin_name">Palak , Alisha</span>
            <i className="bx bx-chevron-down"></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Bookings</div>
                <div className="number">75</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Recent Slots</div>
                <div className="number">25</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bxs-cart-add cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Profit</div>
                <div className="number">₹ 12,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className="bx bx-cart cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Coustomers</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className="bx bx-down-arrow-alt down"></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Booked</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li>
                    <a href="#">24 Aug 2022</a>
                  </li>
                  <li>
                    <a href="#">25 Aug 2022</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li>
                    <a href="#">Palak Nigam</a>
                  </li>
                  <li>
                    <a href="#">Alisha Khan</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Status</li>
                  <li>
                    <a href="#">Booked</a>
                  </li>
                  <li>
                    <a href="#">UnBooked</a>
                  </li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li>
                    <a href="#">₹204.98</a>
                  </li>
                  <li>
                    <a href="#">₹24.55</a>
                  </li>
                </ul>
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
