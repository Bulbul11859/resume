import About from "./Component/AboutMe/About";
import Home from "./Component/Home/Home";
import Resume from "./Component/Resume/Resume";



function App() {
  return (
    <div className="App">
       
       <Home/>
       <About/>
       <Resume/>
       <div style={{marginTop:"100px"}} className='Footer'>
       <h1 className='Footer_head'>Contact</h1>
        <p className='resume_choose_me'>Contact with me</p>
        <p className='public_underline'> <span className='public_underline_span'><span></span></span></p>

        <div style={{marginTop:"35px"}} className='Contact'>
            
            <div>
            <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT Me</span>
           
          </div>
          <div class="app-contact">Contact Number :  +8801991041204</div>
          <div class="app-contact">Email : bulbul.11859@gmail.com</div>
          <div class="app-contact2">  <a href='https://github.com/Bulbul11859' target="_blank">
            <i class="fa-brands fa-github"></i></a>
          <a href='https://www.linkedin.com/in/bulbul-rahman-38420b237' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          <a href='https://www.facebook.com/swiftness.BB/' target="_blank"><i class="fa-brands fa-facebook"></i></a>
          </div>
         
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" value="Bulbul Rahman"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credits">
      inspired by
      <a class="credits-link" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">
        <svg class="dribbble" viewBox="0 0 200 200">
          <g stroke="#ffffff" fill="none">
            <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
            <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" stroke-width="20"></path>
            <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" stroke-width="20"></path>
            <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" stroke-width="20"></path>
          </g>
        </svg>
        Bulbul
      </a>
    </div>
  </div>
</div>

            </div>
        </div>
      
        
        </div>
    </div>
  );
}

export default App;
