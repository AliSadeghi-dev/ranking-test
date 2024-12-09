'use client'
import React from 'react';
import './scrollanimation.css'
import dynamic from 'next/dynamic';

const Player = dynamic(()=>import("@lottiefiles/react-lottie-player").then((lottie)=>lottie.Player),{
  ssr:false
})
const ScrollDownAnimation = () => {
  const animationData3 = {"v":"5.5.2","fr":120,"ip":0,"op":124,"w":192,"h":192,"nm":"Comp 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Arrow-Down Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[96,91,0],"to":null,"ti":null},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":38,"s":[96,108,0],"to":null,"ti":null},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[96,70,0],"to":null,"ti":null},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":77,"s":[96,100,0],"to":null,"ti":null},{"t":88,"s":[96,91,0]}],"ix":2},"a":{"a":0,"k":[12,12,0],"ix":1},"s":{"a":0,"k":[825,825,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[12,18],[12,6]],"o":[[12,18],[12,6]],"v":[[12,18],[12,6]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":38,"s":[32]},{"t":60,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.6196,0.9804,0.7882,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":38,"s":[0,0],"to":null,"ti":null},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":60,"s":[0,-1],"to":null,"ti":null},{"t":77,"s":[0,0]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-5,-2.5],[0,2.5],[5,-2.5]],"o":[[-5,-2.5],[0,2.5],[5,-2.5]],"v":[[-5,-2.5],[0,2.5],[5,-2.5]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":38,"s":[{"i":[[-2.612,-1.742],[-0.064,2.431],[2.484,-1.742]],"o":[[-2.612,-1.742],[-0.064,2.431],[2.484,-1.742]],"v":[[-2.612,-1.742],[-0.064,2.431],[2.484,-1.742]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":60,"s":[{"i":[[-5.966,-2.5],[-0.05,2.5],[5.865,-2.5]],"o":[[-5.966,-2.5],[-0.05,2.5],[5.865,-2.5]],"v":[[-5.966,-2.5],[-0.05,2.5],[5.865,-2.5]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":77,"s":[{"i":[[-4.103,-2.5],[-0.016,2.5],[4.071,-2.5]],"o":[[-4.103,-2.5],[-0.016,2.5],[4.071,-2.5]],"v":[[-4.103,-2.5],[-0.016,2.5],[4.071,-2.5]],"c":false}]},{"t":88,"s":[{"i":[[-5,-2.5],[0,2.5],[5,-2.5]],"o":[[-5,-2.5],[0,2.5],[5,-2.5]],"v":[[-5,-2.5],[0,2.5],[5,-2.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.6196,0.9804,0.7882,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[12,16.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[87.834,87.834],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":1215,"st":0,"bm":0,"completed":true}],"markers":[],"__complete":true}
  return (
    <div>
        <Player
        autoplay
        loop
         src={animationData3}
        className='scrollAnimation-container'
      />
    </div>
  );
};

export default ScrollDownAnimation;