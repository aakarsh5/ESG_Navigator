import React, { useState } from 'react';
import './Updates.css';

const Alerts = () => {
  const [filters, setFilters] = useState({
    comments: true,
    likes: true,
    reviews: true,
    mentions: true,
    purchases: true,
    messages: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleApplyAll = () => {
    setFilters({
      comments: true,
      likes: true,
      reviews: true,
      mentions: true,
      purchases: true,
      messages: true,
    });
  };

  const handleClearAll = () => {
    setFilters({
      comments: false,
      likes: false,
      reviews: false,
      mentions: false,
      purchases: false,
      messages: false,
    });
  };

  return (
    <div className="alerts-page-container">
      <div className="alerts-main-content">
        <div className="alerts-top-bar">
          <input type="text" className="alerts-search-bar" placeholder="Search notifications" />
          <div className="alerts-user-actions">
            <button className="alerts-filter-button">Filter</button>
            <div className="alerts-icons">
              <span role="img" aria-label="envelope">✉️</span>
              <span role="img" aria-label="bell">🔔</span>
              <img src="https://via.placeholder.com/40" alt="Profile" className="alerts-profile-img" />
            </div>
          </div>
        </div>
        <div className="alerts-content">
          <div className="alerts-esg-updates">
            <h2>ESG Updates</h2>
            <div className="alerts-updates-list">
              <div className="alerts-update-item">
                <img src="https://via.placeholder.com/40" alt="Profile" />
                <div className="alerts-update-content">
                  <h3>ESG Update on Performance Metrics</h3>
                  <p>Stay informed, thank you</p>
                  <div className="alerts-update-actions">
                    <button>Like</button>
                    <button>Respond</button>
                  </div>
                </div>
                <span className="alerts-time">2 hour ago</span>
              </div>
              <div className="alerts-update-item">
                <img src="https://via.placeholder.com/40" alt="Profile" />
                <div className="alerts-update-content">
                  <h3>ESG Alert on Governance Practices</h3>
                  <p>Stay informed, thank you</p>
                  <div className="alerts-update-actions">
                    <button>Like</button>
                    <button>Respond</button>
                  </div>
                </div>
                <span className="alerts-time">1 hour ago</span>
              </div>
            </div>
          </div>
          <div className="alerts-notification-filters">
            <h2>Notification Filters</h2>
            <ul>
              <li>
                Comments <input type="checkbox" name="comments" checked={filters.comments} onChange={handleCheckboxChange} />
              </li>
              <li>
                Likes <input type="checkbox" name="likes" checked={filters.likes} onChange={handleCheckboxChange} />
              </li>
              <li>
                Reviews <input type="checkbox" name="reviews" checked={filters.reviews} onChange={handleCheckboxChange} />
              </li>
              <li>
                Mentions <input type="checkbox" name="mentions" checked={filters.mentions} onChange={handleCheckboxChange} />
              </li>
              <li>
                Purchases <input type="checkbox" name="purchases" checked={filters.purchases} onChange={handleCheckboxChange} />
              </li>
              <li>
                Messages <input type="checkbox" name="messages" checked={filters.messages} onChange={handleCheckboxChange} />
              </li>
            </ul>
            <div className="alerts-filter-actions">
              <button className="alerts-apply-all" onClick={handleApplyAll}>Apply All</button>
              <button className="alerts-clear-all" onClick={handleClearAll}>Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
