import React from 'react';
import { Link } from 'react-router-dom';

const DrawerControls = ({
  drawerOpen,
  searchTerm,
  setSearchTerm,
  models,
  closeDrawer
}) => {
  return (
    <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
      {/* Search Bar */}
      <div className="drawer-search">
        <i className="fa fa-search" />
        <input
          type="text"
          placeholder="Search models..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <hr />
      <h3>Uploaded Models</h3>
      <ul>
        {models.filter(model => model.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((model) => (
            <li key={model.id}>
              {/* Model link opens in a new tab with model details */}
              <Link
                to={`/model/${model.id}`}  // Model ID passed in URL
                target="_blank"  // Opens in a new tab
                onClick={closeDrawer}
              >
                {model.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DrawerControls;
