import React from 'react'

const Slide = ()=> {
      return (
            <>
                 <div class="carousel carousel-fullscreen carousel-slider home_carousel ">

                <div class="carousel-item" href="#carousel-slide-0!">
                    <div class="bg" style={{ backgroundImage: "url('assets/images/s1.jpg')" }}></div>
                    <div class="item-content center-align white-text">
                        <div class="spacer-large"></div>
                        <h3>Alix is PWA multi purpose Mobile App</h3>
                        <h5 class="light white-text">With pre built ready to use apps</h5>
                    </div>
                </div>
                <div class="carousel-item" href="#carousel-slide-1!">
                    <div class="bg" style={{ backgroundImage: "url('assets/images/s2.jpg')" }}></div>
                    <div class="item-content left-align white-text">
                        <div class="spacer-large"></div>
                        <h3>A premium PWA Mobile UI App template!</h3>
                        <h5 class="light white-text">Designed as one our of best mobile app.</h5>
                    </div>
                </div>
                <div class="carousel-item" href="#carousel-slide-2!">
                    <div class="bg" style={{ backgroundImage: "url('assets/images/s3.jpg')" }}></div>
                    <div class="item-content center-align white-text">
                        <div class="spacer-large"></div>
                        <h3>Numerous inbuilt UI elements and components</h3>
                        <h5 class="light white-text">All in one premium quality app.</h5>
                    </div>
                </div>
                <div class="carousel-item" href="#carousel-slide-3!">
                    <div class="bg" style={{ backgroundImage: "url('assets/images/s4.jpg')" }}></div>
                    <div class="item-content right-align white-text">
                        <div class="spacer-large"></div>
                        <h3>Alix is User Experience focused app</h3>
                        <h5 class="light white-text">Elegant, Fast and Responsive app.</h5>
                    </div>
                </div>

            </div> 
            </>
      )
}

export default Slide
