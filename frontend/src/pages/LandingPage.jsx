import { useState } from "react";
import {useNavigate } from "react-router-dom";
import React from "react";
import {Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {Button} from "@nextui-org/react";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem,} from "@nextui-org/react";

import journalingLogo from "../assets/journaling_logo_blue-removebg.png"
import journalingLogoW from "../assets/journaling_logo_blue_w-removebg.png"
import doneAll from "../assets/done_all_black-removebg.png"
import moneyOff from "../assets/money_off.png"
import star from "../assets/star.png"
import doneOne from "../assets/done_one.png"
import close from "../assets/close.png"

import youtube from "../assets/icons/youtube.png" 
import producthunt from "../assets/icons/producthunt.png" 
import hackernews from "../assets/icons/hackernews.png" 
import linkedin from "../assets/icons/linkedin.png" 



function LandingPage() {
    return(
        <div>

    <Navbar position="static">
      <NavbarBrand>
        <img src={journalingLogo} alt="Full-logo" className="w-40  mt-5"/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <ScrollLink color="foreground" href="#" to="pricing" smooth={true} duration={700}>
            Pricing
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink color="foreground" href="#" to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </NavbarItem>
        <NavbarItem>
          <ScrollLink color="foreground" href="#" aria-current="page" to="demo" smooth={true} duration={600}>
            Demo
          </ScrollLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

      <section className= "min-h-screen">
        <div className="hero bg-base lg:py-20 lg:px-8 ">
          <div className="hero-content justify-center flex-col lg:flex-row-reverse">
            <img
              src={doneAll}
              className="rounded-lg shadow-2xl w-" 
              />
            <div className="text-left itens-start">
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter ">
                <span>Track your life</span><br />
                <span>with </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" >Journaling</span>
              </h1>
                <p className="py-6 text-lg leading-relaxed ">
                Create and track habits, set goals, and write about the best part of your day. Journaling helps you stay organized, 
                motivated, and focused on achieving your personal growth and wellness objectives.
                </p>
                <Button color="primary" className="mt-8 h-12 w-60 text-white">
                  <img src={doneAll} alt="Logo" className="h-5 w-5"/>
                  Get Journaling
                </Button>
                <div className="mt-4 flex">
                    <img className="w-5" src={moneyOff} alt="" />
                    <span className="mr-1 text-green-500">80% off </span><span>for the first 100 costumers!</span>
                </div>

                <div className="mt-14 flex">
                    <div className="mr-6">
                    <AvatarGroup >
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    </AvatarGroup>
                    </div>
                    <div className="flex flex-col  "> {/* Container flexível em coluna */}
                        <div className="flex"> {/* Espaçamento horizontal entre as imagens */}
                            <img className="w-5" src={star} alt="star" />
                            <img className="w-5" src={star} alt="star" />
                            <img className="w-5" src={star} alt="star" />
                            <img className="w-5" src={star} alt="star" />
                            <img className="w-5" src={star} alt="star" />
                        </div>
                        <div>
                            <span>everybody loves it.</span>
                        </div>
                    </div>
                </div>

                
                
                

            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-14  p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <span className="text-xs text-[10px] opacity-50">Featured on</span>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            title="Featured on Product Hunt"
          >
            <img
              className="w-[2rem] sm:w-[4rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
              src={producthunt}
              alt="Producthunt"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtNKDPkfef8kW4q3vhqCf8A"
            target="_blank"
            rel="noreferrer"
            title="Featured on Youtube"
          >
            <img
              className="w-[2rem] sm:w-[4rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
              src={youtube}
              alt="Youtube"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arthur-barbosa-b0429a302/"
            target="_blank"
            rel="noreferrer"
            title="Featured on Linkedin"
          >
            <img
              className="w-[2rem] sm:w-[4rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
              src={linkedin}
              alt="Linkedin"
            />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            title="Featured on Hackernews"
          >
            <img
              className="w-[2rem] sm:w-[4rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
              src={hackernews}
              alt="Hackernews"
            />
          </a>
        </div>

      </section>


      

      <div id="about" className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center ">
          <div className="">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8">Ditch the Paper and Pen, Embrace Journaling!</h1>

            <div className="flex flex-col lg:flex-row  mb-20 gap-20">
              <div className="flex-1 w-full">
                  <p className="py-6 text-lg leading-relaxed mb-8">
                  Why rely on traditional paper journals when you can have a sleek, web-based solution at your fingertips?
                  Our app is designed to revolutionize your journaling experience by making it easier, more accessible, and far more efficient.
                  </p>
                  <div className="mb-8">
                    <img src={doneAll} alt="" />
                    <img src={doneAll} alt="" />
                  </div>
                  
                  <p className="font-bold">
                  Say goodbye to the hassle of carrying a physical diary and hello to the convenience of a digital solution that syncs across all your devices.
                  </p>
              </div>

              <div className="flex-1 w-full mt-8 p-8 bg-blue-100 justify-center border rounded-lg">
                <div className="tecxt">
                  <p className="py-3 text-lg leading-relaxed font-bold text-blue-500">- Write from anywhere using any device 📱</p>
                  <p className="py-3 text-lg leading-relaxed font-bold text-blue-500">- Set and achieve goals ✅</p>
                  <p className="py-3 text-lg leading-relaxed font-bold text-blue-500">- Build new habits 🌱</p>
                  <p className="py-3 text-lg leading-relaxed font-bold text-blue-500">- Records organized by month 🗓️</p>
                  <p className="py-3 text-lg leading-relaxed font-bold text-blue-500">- Enjoy a clean and intuitive design 💻</p>
                  <p className="py-3 text-lg leading-relaxed font-bold text-blue-500">- Automatically synced across all devices 🗂️</p>
                </div>
                
              </div>

            </div>
            <Button color="primary" className="mt-10 h-12 w-60 text-white">
                  <img src={doneAll} alt="Logo" className="h-5 w-5"/>
                  Get Started
            </Button>
          </div> 
        </div>
      </div>

      <div id="demo" className="py-24 max-md:px-8 max-w-3xl mx-auto">
        <div className="text-center flex flex-col items-center">
          <p className="py-3 text-lg leading-relaxed font-bold">How it works?</p>
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/8M1jmcYBl-U"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

        </div>
      </div>

      

      


        <div id="pricing" className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center flex-col">
            <div className="mb-20">
              <p className="py-3 text-lg leading-relaxed font-bold text-blue-600">Pricing</p>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8">Join the team</h1>
              <span className="mr-1 text-green-500">80% off </span><span>for the first 100 customers!</span>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="card bg-base-100 max-w-sm sm:w-96 shadow-xl">
                <div className="card-body">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg text-gray-500 line-through">$100</span>
                    <span className="text-4xl text-base-content font-bold">$20</span>
                    <span className="text-sm text-gray-500">USD</span>
                  </div>
                  <h2 className="card-title mt-4 mb-6">Starter</h2>

                  {/* Listagem de Funcionalidades */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Day highlight</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Set goals</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Track habits</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Monitor measures</span>
                    </li>
                    <li className="flex items-center">
                      <img src={close} alt="Icon" className="w-5 h-5 mr-2" />
                      <span className="text-gray-400">Future features</span>
                    </li>
                  </ul>

                  <div className="card-actions justify-center">
                    <Button color="primary" className="mt-8 h-12 w-60 text-white">
                      <img src={doneAll} alt="Logo" className="h-5 w-5" />
                      Get Journaling
                    </Button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 max-w-sm sm:w-96 shadow-xl ">
                <div className="card-body">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-lg text-gray-500 line-through">$100</span>
                    <span className="text-4xl text-base-content font-bold">$20</span>
                    <span className="text-sm text-gray-500">USD</span>
                  </div>
                  <h2 className="card-title mt-4 mb-6">All in</h2>

                  {/* Listagem de Funcionalidades */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Day highlight</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Set goals</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Track habits</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Monitor measures</span>
                    </li>
                    <li className="flex items-center">
                      <img src={doneOne} alt="Icon" className="w-5 h-5 mr-2" />
                      <span>Future features</span>
                    </li>
                  </ul>

                  <div className="card-actions justify-center">
                    <Button color="primary" className="mt-8 h-12 w-60 text-white">
                      <img src={doneAll} alt="Logo" className="h-5 w-5" />
                      Get Journaling
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>

      



      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
        <img src={journalingLogoW} alt="Full-logo" className="w-40" />
          <p className="">
          Track your life with Journaling<br/>
          Copyright © 2024 - All rights reserved
          </p>
        </aside>
        <nav className="felx justify-center">
          <h6 className="footer-title">Company</h6>
          <a href="mailto:support@journaling.com" className="link link-hover">Contact: support@journaling.com</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover" href="/tou">Terms of use</a>
          <a className="link link-hover" href="/pp">Privacy policy</a>
        </nav>
      </footer>


    </div>
    )
}
export default LandingPage