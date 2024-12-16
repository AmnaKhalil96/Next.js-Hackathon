'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import topLogo from '@public/images/logo/favicon.svg';
import logo from '@public/images/logo/logo.svg';
import wishlistIcon from '@public/images/icons/wishlist.svg';
import cartIcon from '@public/images/icons/cart.svg';
import searchIcon from '@public/images/icons/search.svg';
import menuIcon from '@public/images/icons/menu.svg';
import crossIcon from '@public/images/icons/cross.svg';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Desktop Header */}
      <div className="hidden lg:block">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-10 bg-light-gray">
          <Image src={topLogo} alt="Top Logo" />

          <ul className="flex space-x-6 py-3">
            <li className="flex items-center border-r border-black pr-6">
              <Link href="#" className="leading-[14px]">
                Find a Store
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/contact-us" className="leading-[14px]">
                Help
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/join-us" className="leading-[14px]">
                Join Us
              </Link>
            </li>
            <li className="flex items-center pr-6">
              <Link href="/login" className="leading-[14px]">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <div className="flex px-10 justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={25} />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="/all-products">New & Featured</Link>
            </li>
            <li>
              <Link href="/Men">Men</Link>
            </li>
            <li>
              <Link href="/all-products">Women</Link>
            </li>
            <li>
              <Link href="/all-products">Kids</Link>
            </li>
            <li>
              <Link href="/all-products">Sale</Link>
            </li>
            <li>
              <Link href="/all-products">SNKRS</Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            {/* Search Bar */}
            <div className="flex px-4 py-2 rounded-full bg-light-gray">
              <Image src={searchIcon} alt="search" width={20} height={20} />
              <input
                className="pl-4 focus-visible:outline-none bg-light-gray"
                type="text"
                placeholder="Search"
              />
            </div>

            {/* Wishlist Icon */}
            <Link href="/wishlist">
              <Image src={wishlistIcon} alt="wishlist" width={24} height={24} />
            </Link>

            {/* Cart Icon */}
            <Link href="/cartinfo">
              <Image src={cartIcon} alt="cart" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={90} height={25} />
        </Link>

        {/* Mobile Menu */}
        <div className="flex gap-6 items-center">
          {/* Wishlist */}
          <Link href="/wishlist">
            <Image src={wishlistIcon} alt="wishlist" width={24} height={24} />
          </Link>

          {/* Cart */}
          <Link href="/cartinfo">
            <Image src={cartIcon} alt="cart" width={24} height={24} />
          </Link>

          {/* Menu Icon */}
          <button onClick={toggleMenu}>
            <Image src={menuIcon} alt="menu" width={30} height={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-white w-3/4 h-full p-6 overflow-y-scroll">
          {/* Close Menu */}
          <div className="flex justify-between items-center mb-6">
            <Image src={logo} alt="Logo" width={100} height={30} />
            <button onClick={toggleMenu}>
              <Image src={crossIcon} alt="close" width={30} height={30} />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex px-4 py-2 rounded-full bg-light-gray mb-6">
            <Image src={searchIcon} alt="search" width={20} height={20} />
            <input
              className="pl-4 focus-visible:outline-none bg-light-gray w-full"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Navigation Links */}
          <ul className="space-y-6">
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/Men" onClick={toggleMenu}>
                Men
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Women
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Kids
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Sale
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                SNKRS
              </Link>
            </li>

            {/* Footer Links */}
            <li className="border-t-2 pt-6">
              <Link href="#" onClick={toggleMenu}>
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={toggleMenu}>
                Help
              </Link>
            </li>
            <li>
              <Link href="/join-us" onClick={toggleMenu}>
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={toggleMenu}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
