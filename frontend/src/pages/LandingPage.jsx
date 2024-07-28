import { useState } from "react";
import {useNavigate } from "react-router-dom";
import React from "react";
import {Button} from "@nextui-org/react";
import {Avatar, AvatarGroup} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
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
          <Link color="foreground" href="#">
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

      <section className= "">
        <div className="hero bg-base lg:py-20 lg:px-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl" 
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
      </section>


      <section className="mt-20 p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
        <span className="text-xs text-[10px] opacity-50">Featured on</span>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          title="Featured on Product Hunt"
        >
          <img
            className="w-[5.5rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
            src={producthunt}
            alt="Producthunt"
          />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          title="Featured on Youtube"
        >
          <img
            className="w-[5.5rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
            src={youtube}
            alt="Youtube"
          />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          title="Featured on Linkedin"
        >
          <img
            className="w-[5.5rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
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
            className="w-[5.5rem] md:w-10 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
            src={hackernews}
            alt="Hackernews"
          />
        </a>
      </section>

      <img src={star} alt="" />


    </div>
    )
}
export default LandingPage