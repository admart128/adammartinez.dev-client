import React, { useState, useEffect, useRef } from 'react';

const AboutMe = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);
  const aboutMeRef = useRef(null);

  const handleIntersection = (entries) => {
    const isAboutMeVisible = entries[0].isIntersecting;
    setIsImage1Visible(isAboutMeVisible);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 1.0
    });

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <article className="flex justify-center items-center flex-col p-5">
      <div className="relative">
        <div className="absolute -mt-32" ref={aboutMeRef}></div>
      </div>

      <header>
        <h3 className="text-2xl md:text-3xl lg:text-4xl p-5 self-center">About Me</h3>
      </header>

      <figure className="relative w-48 h-48 md:w-64 md:h-64  bg-gray-800">
        <img
          src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/adam-1.png"
          alt="Adam 1"
          className={`w-48 h-48 md:w-64 md:h-64 transition-opacity duration-1200 ease-in-out absolute top-0 ${
            isImage1Visible ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img
          src="https://s3.us-east-2.amazonaws.com/adammartinez.dev/adam-2.png"
          alt="Adam 2"
          className={`w-48 h-48 md:w-64 md:h-64 transition-opacity duration-1200 ease-in-out absolute top-0 ${
            isImage1Visible ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </figure>

      <div className="flex flex-col lg:text-xl md:w-2/3">
        <p className="pt-5 pb-2 px-2 flex-start">
          Hi, I'm Adam. I'm a software developer from the Twin Cities (Minnesota), where I'm
          currently located.{' '}
          <span className="font-bold bg-pink-300">
            I'm seeking a full-time position in Colorado, or fully-remote from anywhere.

          </span>{' '} So if you're hiring, read on! 😃 
        </p>
        <p className="p-2">
          I graduated from the University of Minnesota - Twin Cities in 2014 with a B.A. History.
          Although I majored in history, I sampled as broadly as possible during college, studying
          mostly physical and biological sciences. I also studied Japanese language and culture for
          one semester in Chiba, Japan, in 2013.
        </p>
        <p className="p-2">
          After college, I moved to Sejong City, South Korea, where I taught elementary school
          English in Korean public schools for six years. During that time, I developed an original
          "alphabet-gardening" Windows desktop game,{' '}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 hover:scale-110 transition-all ease-in-out duration-200"
            href="http://www.wordbirdkids.com"
            target="_blank"
          >
            🌷 Grab & Grow ABC Garden
          </a>
          , which has been played at school and home by more than 1,000 of my students in grades 3
          and 4.
        </p>
        <p className="p-2">
          I returned home in October 2022, and by December, I began learning web development using
          free, open-source coursework, docs, articles, YouTube videos, etc. See my latest work <a href="#Portfolio" className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>🙂☝ above</a> and get in touch with me <a href="#Contact" className='text-blue-600 hover:text-blue-800 visited:text-purple-600'>🙃👇 below</a>. Thank you for your time!
        </p>
      </div>
    </article>
  );
};

export default AboutMe;
