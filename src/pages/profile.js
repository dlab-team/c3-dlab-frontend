import React from "react";
import imageone from '../avatar.jpg'
import imagetwo from '../jenny.jpg'
import './profile.css'

const profile = () => {
  return (
    <container>
      <div>
      <div class="ui special cards">
        <div class="card">
          <div class="blurring dimmable image">
            <div class="ui dimmer">
              <div class="content">
                <div class="center">
                  <div class="ui inverted button">Add Friend</div>
                </div>
              </div>
            </div>
            <img src={imageone}/>
          </div>
          <div class="content">
            <a class="header">Job Ready</a>
            <span> icono</span>
          </div>
          <div class="extra content">
          <div class="meta">
              <span class="date">Estado Perfil</span>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="blurring dimmable image">
            <div class="ui inverted dimmer">
              <div class="content">
                <div class="center">
                  <div class="ui primary button">Add Friend</div>
                </div>
              </div>
            </div>
            <img src={imagetwo}/>
          </div>
          <div class="content">
            <a class="header">Team Hess</a>
            <div class="meta">
              <span class="date">Created in Aug 2014</span>
            </div>
          </div>
          <div class="extra content">
            <a>
              <i class="users icon"></i>
              2 Members
            </a>
          </div>
        </div>
      </div>      
    
     
    </div>
    </container>
  );
};


export default profile;
