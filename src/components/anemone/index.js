import Particles, { initParticlesEngine } from "@tsparticles/react";
import  { ISourceOptions } from "@tsparticles/engine";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

const Anemone = (props) => {
  // A variável 'init' é inicializada para indicar se o motor de partículas foi inicializado
  // Se você planeja usá-la posteriormente, mantenha-a
  // Se não, você pode removê-la
  // const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      // Se 'init' for utilizado posteriormente, você pode setá-lo como true aqui
      // setInit(true);
    });
    // Se você não precisa da variável 'init', você pode remover o array de dependências vazio abaixo
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        number: {
          value: 2000,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: ["#ffffff"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
          value: 3,
          random: {
            enable: true,
            minimumValue: 1
          }
        },
        move: {
          size: true,
          enable: true,
          speed: 0.25,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out"
          },
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          },
          trail: {
            enable: true,
            length: 5,
            fillColor: "#222"
          },
          warp: true
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 4
          }
        }
      },
      detectRetina: true,
      absorbers: {
        orbits: true,
        destroy: true,
        opacity: 1,
        color: "#000",
        size: {
          value: 5,
          limit: 10,
          random: false,
          density: 50
        },
        position: {
          x: 50,
          y: 50
        }
      },
      background: {
        color: "#222"
      }
    }),
    [],
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default Anemone;
