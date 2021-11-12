import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    dotsEach: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="testimonials-container" id={props.id || ""}>
      <ScreenHeading
        title={"Testimonials"}
        subHeading={
          "Some nice things former coworkers have said about working with me :)"
        }
      />
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pharetra massa massa ultricies mi quis hendrerit.
                      Sit amet purus gravida quis blandit turpis cursus in. Duis
                      at consectetur lorem donec massa sapien faucibus. Netus et
                      malesuada fames ac turpis egestas sed tempus urna.{" "}
                      <i className="fa fa-quote-right" />{" "}
                    </p>
                  </div>
                  <div className="coworker-info">
                    <h5>Ivana Bailey - Abilene, TX</h5>
                    <p>5th Grade Teaching Partner</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pharetra massa massa ultricies mi quis hendrerit.
                      Sit amet purus gravida quis blandit turpis cursus in. Duis
                      at consectetur lorem donec massa sapien faucibus. Netus et
                      malesuada fames ac turpis egestas sed tempus urna.{" "}
                      <i className="fa fa-quote-right" />{" "}
                    </p>
                  </div>
                  <div className="coworker-info">
                    <h5>Tim Phamduy - Abilene, TX</h5>
                    <p>Fill in role here</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pharetra massa massa ultricies mi quis hendrerit.
                      Sit amet purus gravida quis blandit turpis cursus in. Duis
                      at consectetur lorem donec massa sapien faucibus. Netus et
                      malesuada fames ac turpis egestas sed tempus urna.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="coworker-info">
                    <h5>Faith Nunn - Abilene, TX</h5>
                    <p>6th Grade Math Teaching Partner</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 4 */}
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Bridgett and I taught on the fifth-grade team together at
                      Ortiz Elementary School. Working with her, I witnessed
                      time and time again her creativity, confidence, and
                      cooperation. She was constantly coming up with great
                      ideas. She had the confidence to share her suggestions
                      with the group, and the humility to receive critique
                      without taking offense. She was always a team player,
                      committing whole-heartedly to whatever the group decided
                      without demanding her own way. She would ask for help when
                      she needed it, but far more often she was the one offering
                      help to someone else. She will be an asset and a blessing
                      to anyone she works with, as she was to me and the rest of
                      our team.
                      <i className="fa fa-quote-right" />{" "}
                    </p>
                  </div>
                  <div className="coworker-info">
                    <h5>Cody Petree - Abilene, TX</h5>
                    <p>5th Grade Science Teacher</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 5 */}
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Mrs. Taylor was a great team player on the 5th grade team.
                      She was always filled with ideas during our lesson
                      planning and PLCs. She was anxious to help and create
                      engaging lessons. Her excitement was contagious and we
                      would all join in with her enthusiasm.
                      <i className="fa fa-quote-right" />{" "}
                    </p>
                  </div>
                  <div className="coworker-info">
                    <h5>Catherine Gibson - Abilene, TX</h5>
                    <p>5th Grade Team Lead</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 6 */}
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Pharetra massa massa ultricies mi quis hendrerit.
                      Sit amet purus gravida quis blandit turpis cursus in. Duis
                      at consectetur lorem donec massa sapien faucibus. Netus et
                      malesuada fames ac turpis egestas sed tempus urna.{" "}
                      <i className="fa fa-quote-right" />{" "}
                    </p>
                  </div>
                  <div className="coworker-info">
                    <h5>Jessica</h5>
                    <p>Focusmate Coworking Partner</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
