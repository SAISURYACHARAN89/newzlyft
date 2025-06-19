import React, { useEffect, useState } from "react";
import { MagnifyingGlass } from 'react-loader-spinner'
import assortment from "../../images/assortment-citrus-fruits.png";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import medicine-related product images
// import med1 from "../../images/med-category-1.jpg";
// import med2 from "../../images/med-category-2.jpg";
// import med3 from "../../images/med-category-3.jpg";
// import med4 from "../../images/med-category-4.jpg";
// import med5 from "../../images/med-category-5.jpg";
// import med6 from "../../images/med-category-6.jpg";
// import med7 from "../../images/med-category-7.jpg";
// import med8 from "../../images/med-category-8.jpg";
// import med9 from "../../images/med-category-9.jpg";
// import med10 from "../../images/med-category-10.jpg";
import ScrollToTop from "../ScrollToTop";

function Medicines() {
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loaderStatus ? (
        <div className="loader-container">
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperclassName="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#0aad0a"
          />
        </div>
      ) : (
        <>
          <ScrollToTop/>
          <div className="container">
            <div className="row">
              {/* Vertical Dropdowns Column */}
              <h5 className="mb-3 mt-8">Categories</h5>
              <div className="col-md-3">
                {medicinesDropdownData.map((dropdown, index) => (
                  <ul className="nav flex-column" key={index}>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#"
                        onClick={() => toggleDropdown(index)}
                        aria-expanded={
                          openDropdowns.includes(index) ? "true" : "false"
                        }
                        aria-controls={`categoryFlush${index + 1}`}
                      >
                        {dropdown.title} <i className="fa fa-chevron-down" />
                      </Link>
                      <div
                        className={`collapse ${
                          openDropdowns.includes(index) ? "show" : ""
                        }`}
                        id={`categoryFlush${index + 1}`}
                      >
                        <div>
                          <ul className="nav flex-column ms-3">
                            {dropdown.items.map((item, itemIndex) => (
                              <li className="nav-item" key={itemIndex}>
                                <Link className="nav-link" to="#">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
                
                {/* Rest of the sidebar content (stores, price, rating, etc.) */}
                {/* ... (same as in your Grocery page) ... */}
                
              </div>
              
              {/* Cards Column */}
              <div className="col-lg-9 col-md-8">
                {/* card */}
                <div className="card mb-4 bg-light border-0">
                  {/* card body */}
                  <div className=" card-body p-9">
                    <h1 className="mb-0">Medicines & Healthcare</h1>
                  </div>
                </div>
                
                {/* list icon */}
                <div className="d-md-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-3 mb-md-0">
                      <span className="text-dark">24</span> Products found
                    </p>
                  </div>
                  {/* icon */}
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/MedicinesList" className="text-muted me-3">
                      <i className="bi bi-list-ul" />
                    </Link>
                    <Link to="/MedicinesGrid" className="me-3 active">
                      <i className="bi bi-grid" />
                    </Link>
                    <Link to="/Medicines" className="me-3 text-muted">
                      <i className="bi bi-grid-3x3-gap" />
                    </Link>
                    <div className="me-2">
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Show: 50</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                      </select>
                    </div>
                    <div>
                      {/* select option */}
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Sort by: Featured</option>
                        <option value="Low to High">Price: Low to High</option>
                        <option value="High to Low">Price: High to Low</option>
                        <option value="Release Date">Release Date</option>
                        <option value="Avg. Rating">Avg. Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Medicines Products Grid */}
                <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                  {/* Medicine Product 1 */}
                  <div className="col">
                    <div className="card card-product">
                      <div className="card-body">
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-success">Prescription</span>
                          </div>
                          <Link to="#!">
                            <img
                            //   src={med1}
                              alt="Medicine"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action buttons */}
                          <div className="card-product-action">
                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                              <i className="bi bi-eye" data-bs-toggle="tooltip" title="Quick View" />
                            </Link>
                            <Link to="wishlist.html" className="btn-action" data-bs-toggle="tooltip" title="Wishlist">
                              <i className="bi bi-heart" />
                            </Link>
                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" title="Compare">
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Pain Relief</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Paracetamol 500mg
                          </Link>
                        </h2>
                        <div>
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                          </small>
                          <span className="text-muted small">4.5(249)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$5.99</span>
                          </div>
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                              </svg> Add
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Medicine Product 2 */}
                  <div className="col">
                    <div className="card card-product">
                      <div className="card-body">
                        <div className="text-center position-relative">
                          <div className="position-absolute top-0 start-0">
                            <span className="badge bg-info">OTC</span>
                          </div>
                          <Link to="#!">
                            <img
                            //   src={med2}
                              alt="Medicine"
                              className="mb-3 img-fluid"
                            />
                          </Link>
                          {/* action buttons */}
                          <div className="card-product-action">
                            <Link to="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                              <i className="bi bi-eye" data-bs-toggle="tooltip" title="Quick View" />
                            </Link>
                            <Link to="wishlist.html" className="btn-action" data-bs-toggle="tooltip" title="Wishlist">
                              <i className="bi bi-heart" />
                            </Link>
                            <Link to="#!" className="btn-action" data-bs-toggle="tooltip" title="Compare">
                              <i className="bi bi-arrow-left-right" />
                            </Link>
                          </div>
                        </div>
                        <div className="text-small mb-1">
                          <Link to="#!" className="text-decoration-none text-muted">
                            <small>Vitamins & Supplements</small>
                          </Link>
                        </div>
                        <h2 className="fs-6">
                          <Link to="#!" className="text-inherit text-decoration-none">
                            Vitamin C 1000mg
                          </Link>
                        </h2>
                        <div>
                          <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </small>
                          <span className="text-muted small">4.0(189)</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div>
                            <span className="text-dark">$12.99</span>
                            <span className="text-decoration-line-through text-muted">$15.99</span>
                          </div>
                          <div>
                            <Link to="#!" className="btn btn-primary btn-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                              </svg> Add
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Continue with more medicine products... */}
                  
                </div>
                
                {/* Pagination */}
                <div className="row mt-8">
                  <div className="col">
                    <nav>
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <Link className="page-link mx-1 rounded-3" to="#" aria-label="Previous">
                            <i className="fa fa-chevron-left" />
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 active" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#">
                            ...
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#">
                            12
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link mx-1 rounded-3 text-body" to="#" aria-label="Next">
                            <i className="fa fa-chevron-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const medicinesDropdownData = [
  {
    title: "Medicine Types",
    items: [
      "Prescription Medicines",
      "Over-the-Counter (OTC)",
      "Ayurvedic",
      "Homeopathic",
      "Generic Medicines",
      "Branded Medicines"
    ],
  },
  {
    title: "Health Conditions",
    items: [
      "Diabetes",
      "Blood Pressure",
      "Heart Disease",
      "Allergy",
      "Asthma",
      "Arthritis",
      "Thyroid"
    ],
  },
  {
    title: "Wellness Products",
    items: [
      "Vitamins & Supplements",
      "Protein Supplements",
      "Weight Management",
      "Sexual Wellness",
      "Elderly Care",
      "Mother & Baby Care"
    ],
  },
  {
    title: "Healthcare Devices",
    items: [
      "Thermometers",
      "Blood Pressure Monitors",
      "Nebulizers",
      "Oximeters",
      "Diabetes Care",
      "First Aid"
    ],
  },
];

export default Medicines;