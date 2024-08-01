import { useState } from "react";
import {useNavigate } from "react-router-dom";
import React from "react";
import {Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import {Button} from "@nextui-org/react";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import {Link, Navbar, NavbarBrand, NavbarContent, NavbarItem,} from "@nextui-org/react";

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

      <div id="demo" className="hero bg-base min-h-screen">
        <div className="hero-content text-center flex-col ">
          <p className="py-3 text-lg leading-relaxed font-bold">How it works?</p>
          <div className="">
            <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      


      <div id="pricing" className="hero bg-base-200 min-h-screen">
        <div class="hero-content text-center flex-col">
          <div class="mb-20">
            <p className="py-3 text-lg leading-relaxed font-bold text-blue-600">Pricing</p>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tighter mb-8">Join the team.</h1>
            <span className="mr-1 text-green-500">80% off </span><span>for the first 100 costumers!</span>
          </div>

          <div className="flex space-x-4">
            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>

      



      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current">
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>


    </div>
    )
}
export default LandingPage