document.addEventListener("DOMContentLoaded", function() {
  new SweetScroll({});
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 700
        }
      },
      color: {
        value: "#e1e1e1"
      },
      shape: {
        type: "triangle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.40246529723245905,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 70,
        color: "#000000",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

  const ctx = document.querySelector('#particles-js > canvas').getContext('2d');
  let grad;
  onresize();
  addEventListener('resize', onresize);

  function onresize() {
    grad = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    grad.addColorStop(0, 'yellow');
    grad.addColorStop(1, 'green');
  }

  // must be ran after Particles.js' own anim loop has began
  // se we are always pushed after their drawings
  requestAnimationFrame(anim);

  function anim() {
    ctx.fillStyle = grad;
    ctx.globalCompositeOperation = "source-atop";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(anim);
  }
}, false);
