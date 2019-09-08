import React from 'react';
import styles from './style.scss';
import Particles from 'react-particles-js';

class Particle extends React.Component {
render() {
    return (

            <Particles className={styles.particles}
              params={{
                "particles": {
                      "number": {
                        "value": 90,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": ["#55efc4","#81ecec","#74b9ff","#a29bfe","#dfe6e9","#00b894","#00cec9","#0984e3","#6c5ce7","#b2bec3","#ffeaa7","#fab1a0","#ff7675","#fd79a8","#636e72","#fdcb6e","#e17055","#d63031","#e84393","#2d3436"]
                      },
                      "shape": {
                        "type": ["circle","square","star","triangle","polygon"],
                        "stroke": {
                          "width": 0,
                          "color": "#34495e"
                        },
                        "polygon": {
                          "nb_sides": 6
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 0.3,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 2,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 8,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 100,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 180,
                        "color": "#dfe6e9",
                        "opacity": 1.5,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 8,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 800
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "push",
                          "speed": 4
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 50,
                          "duration": 1,
                          "opacity": 1.5,
                          "speed": 4
                        },
                        "repulse": {
                          "distance": 150
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true,
                    "config_demo": {
                      "hide_card": false,
                      "background_image": "",
                      "background_repeat": "no-repeat",
                      "background_size": "cover",
                    }

                }}
            />
        );
    }
  }


export default Particle;