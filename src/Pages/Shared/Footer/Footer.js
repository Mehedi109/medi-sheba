import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          <section className="">
            <form action="" className="d-flex justify-content-center">
              <div className="row justify-content-around ms-5">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-12 d-flex justify-content-around">
                <div className="form-outline form-white mb-4 ms-5 ">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                  />
                  <label className="form-label" for="form5Example21">
                    Email address
                  </label>
                </div>

                <div className="col-auto ms-5">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Menu</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Login
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Social Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Facrbook
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Twiter
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Services</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Dermetology
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Neurology
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Orthopedic
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Chardiology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Medi-Sheba
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
