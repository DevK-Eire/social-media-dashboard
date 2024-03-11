'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import iconmoon from "../app/assets/icon-down.svg";
import iconmoonup from "../app/assets/icon-up.svg";
import iconfacebook from "../app/assets/icon-facebook.svg";
import icontwitter from "../app/assets/icon-twitter.svg";
import iconinstagram from "../app/assets/icon-instagram.svg";
import iconyoutube from "../app/assets/icon-youtube.svg";



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);
  

  return (
    // <div className={`${darkMode && "dark"}`}>
    <main className="flex justify-center min-h-screen bg-white dark:bg-very-dark-blue-bg ">
      <div className="bg-light-grayish-blue  dark:bg-very-dark-blue-top-bg w-full h-52 dark:h-full p-8 md:p-24 justify-between flex-row ">
      
     <div className="flex-grow">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between bg-light-grayish-blue dark:bg-very-dark-blue-top-bg p-2 md:p-16">
        <div className="space-y-3">
        <h1 className="text-3xl md:text-3xl font-bold text-dark-gray dark:text-white">Social Media Dashboard</h1>
        <p className="font-bold text-dark-grayish-blue dark:text-desaturated-blue">Total Followers: 23,004</p>

        </div>
        
          <div className="text-dark-grayish-blue min-[1152px]:hidden" />
          <div className="flex justify-between min-[1152px]:gap-1.2 gap-2 items-center">
            <h2 className="font-bold text-dark-grayish-blue dark:text-desaturated-blue">
            {darkMode ? "Dark Mode" : "Light Mode"}
            </h2>
            <div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        
        
      </div>
        
        {/* Social Media Totals*/}

        {/* Facebook */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          <div className=" border-t-4 border-t-twitter space-x-2 rounded-t bg-light-grayish-blue  dark:bg-dark-desaturated-blue hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-center items-center gap-2 py-6">
              <Image src={iconfacebook} alt="Supervisor" width={20} height={20} />
              <h2 className="dark:text-desaturated-blue ">@nathanf</h2>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 mb-6">
              <span className="font-bold text-6xl dark:text-white">1987</span>            
                <p className="font-Inter text-xl tracking-widestx text-dark-grayish-blue dark:text-desaturated-blue"> Followers</p>
              <div className="flex justify-center items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">12 Today</span>              
            </div>            
            </div>            
          </div>

        {/* Twitter */}
          <div className="p-8 border-t-4 border-t-twitter space-x-2 rounded-t bg-light-grayish-blue dark:bg-dark-desaturated-blue hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
          <div className="flex justify-center items-center gap-2 mb-6">
              <Image src={icontwitter} alt="Supervisor" width={20} height={20} />
              <h2 className="dark:text-desaturated-blue ">@nathanf</h2>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 mb-6">
              <span className="font-bold text-6xl dark:text-white">1044</span>            
                <p className="font-Inter text-xl tracking-widestx text-dark-grayish-blue dark:text-desaturated-blue"> Followers</p>
              <div className="flex justify-center items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">99 Today</span>              
            </div>            
            </div>                   
            
          </div>

        {/* Instagram */}
          <div className="rounded-t space-x-2 rounded bg-light-grayish-blue dark:bg-dark-desaturated-blue hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
          <div className="rounded-t-2xl bg-gradient-to-r from-instagram-start to-instagram-end h-1 w-full"></div>
          <div className="p-8">
          <div className="flex justify-center items-center gap-2 mb-6">
              <Image src={iconinstagram} alt="Supervisor" width={20} height={20} />
              <h2 className="dark:text-desaturated-blue ">@realnathanf</h2>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 mb-6">
              <span className="font-bold text-6xl dark:text-white">11k</span>            
                <p className="font-Inter text-xl tracking-widestx text-dark-grayish-blue dark:text-desaturated-blue"> Followers</p>
              <div className="flex justify-center items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">1099 Today</span>              
            </div>            
            </div>       
            
            </div>
          </div>
          
          {/* Youtube */}
          <div className="p-8 border-t-4 border-t-bright-red space-x-2 rounded-t bg-light-grayish-blue dark:bg-dark-desaturated-blue hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer" >
          <div className="flex justify-center items-center gap-2 mb-6">
              <Image src={iconyoutube} alt="Supervisor" width={20} height={20} />
              <h2 className="dark:text-desaturated-blue ">Nathan F.</h2>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 mb-6">
              <span className="font-bold text-6xl dark:text-white">8239</span>            
                <p className="font-Inter text-xl tracking-widestx text-dark-grayish-blue dark:text-desaturated-blue"> Subscribers</p>
              <div className="flex justify-center items-center gap-2">
                <Image src={iconmoon} alt="Supervisor" width={15} height={15} />
              <span className="text-bright-red font-semibold">144 Today</span>              
            </div>            
            </div>                 
          </div>
        </div>
    
    {/* Overview */}
    <div className="text-2xl font-bold my-8 text-dark-grayish-blue dark:text-white ">
    <h2>Overview - Today</h2>
    </div>

    {/* Top Grid */}

    {/* Facebook */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-t mb-6">
      <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Page Views</h2>
              <Image src={iconfacebook} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white">87</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">3%</span>              
            </div>  
            </div>               
        </div>    

        {/* Facebook */}

        <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Likes</h2>
              <Image src={iconfacebook} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white ">52</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoon} alt="Supervisor" width={15} height={15} />
              <span className="text-bright-red font-semibold">2%</span>              
            </div>  
            </div>               
        </div>   

        {/* Instagram */}

        <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Likes</h2>
              <Image src={iconinstagram} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white ">5462</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">2257%</span>              
            </div>  
            </div>               
        </div>   
        
          {/* Instagram */}


        <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Profile Views</h2>
              <Image src={iconinstagram} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white">52k</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">1375%</span>              
            </div>  
            </div>               
        </div>        
     </div>

    {/* Bottom Grid */}

    {/* Twitter */}

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-t">
      <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Retweets</h2>
              <Image src={icontwitter} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white">117</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">303%</span>              
            </div>  
            </div>               
        </div>       
          
          {/* Twitter */}
          
        <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Page Views</h2>
              <Image src={icontwitter} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white ">507</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoonup} alt="Supervisor" width={15} height={15} />
              <span className="text-lime-green font-semibold">553%</span>              
            </div>  
            </div>               
        </div>   

        {/* Youtube */}

        <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Likes</h2>
              <Image src={iconyoutube} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white">107</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoon} alt="Supervisor" width={15} height={15} />
              <span className="text-bright-red font-semibold">19%</span>              
            </div>  
            </div>               
        </div>   

        {/* Youtube */}

        <div className="bg-light-grayish-blue dark:bg-dark-desaturated-blue px-6 py-3 hover:bg-light-gray hover:dark:bg-dark-gray-hover hover:cursor-pointer">
            <div className="flex justify-between items-center font-semibold gap-2 py-6">
            <h2 className="dark:text-desaturated-blue ">Total Views</h2>
              <Image src={iconyoutube} alt="Supervisor" width={20} height={20} />
              
            </div> 
            <div className="flex items-center justify-between ">
            <span className="font-bold text-2xl dark:text-white ">1407</span>
            <div className="flex justify-end items-center gap-2">
                <Image src={iconmoon} alt="Supervisor" width={15} height={15} />
              <span className="text-bright-red font-semibold">12%</span>              
            </div>  
            </div>
               
        </div>         
     </div>
     </div>
     </div>
    </main>
    // </div>
  );
}
