import { useState } from "react";
import {useNavigate } from "react-router-dom";
import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import {Button} from "@nextui-org/react";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,} from "@nextui-org/react";
import journalingLogo from "../assets/journaling_logo_blue-removebg.png"
import doneAll from "../assets/done_all_black-removebg.png"
import moneyOff from "../assets/money_off.png"
import star from "../assets/star.png"

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
          <Link color="foreground" href="#">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" to="about" smooth={true} duration={500}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            Demo
          </Link>
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
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tighter mb-8">Ditch the Paper and Pen, Embrace Journaling!</h1>

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

              <div className="flex-1 w-full mt-8 p-8 bg-gray-300 justify-center border rounded-lg">
                <div className="tecxt">
                  <p className="py-3 text-lg leading-relaxed ">- Write from anywhere using any device 📱</p>
                  <p className="py-3 text-lg leading-relaxed ">- Enjoy a clean and intuitive design 💻</p>
                  <p className="py-3 text-lg leading-relaxed ">- Set and achieve goals ✅</p>
                  <p className="py-3 text-lg leading-relaxed ">- Build new habits 🌱</p>
                  <p className="py-3 text-lg leading-relaxed ">- Records organized by month 🗓️</p>
                  <p className="py-3 text-lg leading-relaxed ">- Automatically synced across all devices 🗂️</p>
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


    </div>
    )
}
export default LandingPage