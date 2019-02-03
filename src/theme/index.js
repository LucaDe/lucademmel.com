const theme = {
  colors: {
    primary: '#414345',
    white: '#FFFFFF'
  },
  fontFamily: 'Poppins, Arial sans-serif',
  containerWidth: '1400px',
  spacing: {
    xs: '10px',
    s: '15px',
    m: '20px',
    l: '50px',
    xl: '60px',
    xxl: '70px',
  },
  font: {
    s: '16px',
    m: '18px',
    l: '24px',
    xl: '32px',
    xxl: '72px',
  },
  borderRadius: '8px',
}

export default theme

export const particleConfig =  {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1104.8066982851817
      }
    },
    color: {
      value: theme.colors.primary
    },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
        },
        opacity: {
          value: 0.29987610382026364,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
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
          distance: 150,
          color: "#666262",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
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
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
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
            distance: 113.69080972218832,
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
};