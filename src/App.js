import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div>
      {/* Logo */}
      <img
        src="https://zouk.co.in/cdn/shop/files/zouk_new_logo.webp?v=1655936518&width=236"
        className="mx-auto d-block"
        alt="Zouk Logo"
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BAGS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  LAUGGAGE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FOOTWEARS
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  COLLECTION
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      OFFERS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HAND BAGS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      OFFICE BAGS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">NEW ARRIVALS</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {[
            "https://zouk.co.in/cdn/shop/collections/footwear_banner-01_f8866ce7-274b-4f2f-95f3-73579e529f70.png?v=1718950005&width=2000",
            "https://zouk.co.in/cdn/shop/collections/collection_banners_free_gift-19.png?v=1729081983&width=2000",
            "https://zouk.co.in/cdn/shop/collections/luggage-03.png?v=1724408960&width=2000",
          ].map((src, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img src={src} className="d-block w-100" alt="slide" />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      {/* Product Cards */}
      <div className="container mt-4">
        <div className="row g-4">
          {[
            {
              title: "Nawabi Couture Women's Office Bag",
              price: "₹ 1,499.00",
              img: "https://zouk.co.in/cdn/shop/files/Nawabi_Couture_Women_s_Office_Bag.jpg?v=1719318323&width=1000",
            },
            {
              title: "FloMotif Harmony Sling Bag",
              price: "₹ 1,399.00",
              img: "https://zouk.co.in/cdn/shop/files/harmonysling1x1_0002_Layer15.jpg?v=1713860211&width=1000",
            },
            {
              title: "FloLov Structured Shoulder Bag",
              price: "₹ 1,399.00",
              img: "https://zouk.co.in/cdn/shop/files/Shoulder_Bag_79.jpg?v=1728473271&width=1000",
            },
          ].map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h5>{product.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-danger text-white py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Find us on</h5>
              <p>
                Zouk is a Modern Indian Lifestyle Brand for Bags, Luggage,
                Wallets & Footwear.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Order Delivery
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Newsletter</h5>
              <form>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-dark mt-2" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
