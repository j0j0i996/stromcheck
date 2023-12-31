import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-8 border-t border-gray-200 py-8 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="footer-logo"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="16"
                    fill="url(#footer-logo)"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                to="#"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Allgemeine Geschäftsbedingungen (AGB)
              </Link>{" "}
              ·{" "}
              <Link
                to="#"
                className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline"
              >
                Datenschutzerklärung
              </Link>
            </div>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Wissen</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="https://www.linkedin.com/pulse/we-germans-great-being-geizig-thrifty-lets-use-energy-schulte%3FtrackingId=1Vv1B4%252BbRdiviCmVwPiSrg%253D%253D/?trackingId=1Vv1B4%2BbRdiviCmVwPiSrg%3D%3D"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Warum dynamische Tarife?
                </Link>
              </li>
              {/*
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Tutorials & Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Support Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Partners
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-800">Unternehmen</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Über uns
                </Link>
              </li>
              {/*
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Company values
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              */}
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="mb-2 font-medium text-gray-800">Newsletter</h6>
            <p className="mb-4 text-sm text-gray-600">
              Abboniere unseren Newsletter um zu Themen rund um dynamischen
              Stromtarife auf dem aktuellsten Stand zu bleiben.
            </p>
            <form>
              <div className="mb-4 flex flex-wrap">
                <div className="w-full">
                  <label className="sr-only block text-sm" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex max-w-xs items-center">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full px-3 py-2 pr-12 text-sm text-gray-800"
                      placeholder="Deine Email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto my-2 -ml-px w-px bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="mx-3 h-3 w-3 flex-shrink-0 fill-current text-blue-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="border-t border-gray-200 py-4 md:flex md:items-center md:justify-between md:py-8">
          {/* Social links */}
          <ul className="mb-4 flex md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <Link
                to="https://github.com/j0j0i996/stromcheck"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="Github"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="https://www.linkedin.com/in/j-schulte/"
                className="hover:bg-white-100 flex items-center justify-center rounded-full bg-white text-gray-600 shadow transition duration-150 ease-in-out hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="-8 -9 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
