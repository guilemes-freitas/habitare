import { useContext, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../providers/User";
import {
  FaCompressArrowsAlt,
  FaGithub,
  FaGitlab,
  FaHands,
  FaHouseDamage,
  FaLeaf,
  FaLinkedinIn,
  FaMoneyBillWave,
  FaMoon,
} from "react-icons/fa";
import {
  CategoryContainer,
  CategoryContent,
  DifficultyWrapper,
  FifthSection,
  FirstSection,
  FourthSection,
  HomeContainer,
  HowItWorksCard,
  HowItWorksCards,
  HowItWorksWrapper,
  PresentationWrapper,
  SecondSection,
  SVGBottomCategory,
  SVGDifficultyWrapṕer,
  SVGHomeBottom,
  SVGHomeTop,
  ThirtySection,
  WhoDoesCard,
  WhoDoesCards,
  WhoDoesWrapper,
} from "./styles";

import Lottie from "react-lottie";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import animationData from "../../assets/lotties/home.json";
import SpiritLottie from "../../assets/lotties/spirit.json";
import FitLottie from "../../assets/lotties/fit.json";
import HouseLottie from "../../assets/lotties/house.json";
import MoneyLottie from "../../assets/lotties/money.json";
import NightLottie from "../../assets/lotties/night.json";
import FocusLottie from "../../assets/lotties/focus.json";

import HabitImage from "../../assets/svg/habits.svg";
import GroupsImage from "../../assets/svg/groups.svg";
import AchievementsImage from "../../assets/svg/achivements.svg";

import BrunoImage from "../../assets/images/bruno.jpeg";
import GuilhermeImage from "../../assets/images/guilherme.jpeg";
import LeomarImage from "../../assets/images/leomar.jpeg";
import WesleyImage from "../../assets/images/wesley.jpeg";

const Home = () => {
  const { authenticated } = useContext(UserContext);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const SVGTop = useRef(null);
  const SVGTopLine = useRef(null);
  const SVGBottom = useRef(null);
  const presentationContent = useRef(null);
  const rocket = useRef(null);
  const secondSection = useRef(null);
  const howItWorksCard = useRef([]);
  const spiritContent = useRef(null);
  const spiritImage = useRef(null);
  const moneyContent = useRef(null);
  const moneyImage = useRef(null);
  const focusContent = useRef(null);
  const focusImage = useRef(null);
  const fitContent = useRef(null);
  const fitImage = useRef(null);
  const houseContent = useRef(null);
  const houseImage = useRef(null);
  const nightContent = useRef(null);
  const nightImage = useRef(null);
  const difficultyWrapper = useRef(null)
  const tableOne = useRef([]);
  const tableTwo = useRef([]);
  const starOne = useRef([]);
  const starTwo = useRef([]);
  const girl = useRef(null);
  const whoDoesCard = useRef([])

  useEffect(() => {
    const totalLengtTop = Math.ceil(SVGTopLine.current?.getTotalLength());
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(SVGTopLine.current, {
      strokeDasharray: totalLengtTop,
      strokeDashoffset: totalLengtTop,
      opacity: 0,
    });

    gsap
      .timeline()
      .from(SVGTop.current, {
        duration: 1.5,
        opacity: 0,
      })
      .from(
        SVGBottom.current,
        {
          duration: 1.5,
          opacity: 0,
        },
        "<"
      )
      .from(
        secondSection.current,
        {
          duration: 1.3,
          opacity: 0,
        },
        "<"
      )
      .to(
        SVGTopLine.current,
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 3,
        },
        "-=1"
      )
      .from(
        presentationContent.current,
        {
          opacity: 0,
          translateY: 50,
        },
        "<"
      )
      .fromTo(
        rocket.current,
        {
          translateY: 200,
          translateX: -500,
        },
        {
          opacity: 1,
          translateY: 0,
          translateX: 0,
          duration: 1.5,
        },
        "<"
      );

    gsap.from(howItWorksCard.current, {
      opacity: 0,
      translateY: 50,
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: howItWorksCard.current,
        scrub: 1,
        start: "top 80%",
        end: "top 40%",
      },
    });

    gsap.from(spiritImage.current, {
      opacity: 0,
      translateX: 400,
      scale: 2,
      scrollTrigger: {
        trigger: spiritImage.current,
        scrub: 2,
        start: "center 90%",
        end: "top 20%",
      },
    });

    gsap.from(spiritContent.current, {
      opacity: 0,
      translateX: -400,
      scrollTrigger: {
        trigger: spiritContent.current,
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      },
    });

    gsap.from(moneyImage.current, {
      opacity: 0,
      translateX: -400,
      scale: 2,
      scrollTrigger: {
        trigger: moneyImage.current,
        scrub: 2,
        start: "center 90%",
        end: "top 20%",
      },
    });

    gsap.from(moneyContent.current, {
      opacity: 0,
      translateX: 400,
      scrollTrigger: {
        trigger: moneyContent.current,
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      },
    });

    gsap.from(focusImage.current, {
      opacity: 0,
      translateX: 400,
      scale: 2,
      scrollTrigger: {
        trigger: focusImage.current,
        scrub: 2,
        start: "center 90%",
        end: "top 20%",
      },
    });

    gsap.from(focusContent.current, {
      opacity: 0,
      translateX: -400,
      scrollTrigger: {
        trigger: focusContent.current,
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      },
    });

    gsap.from(fitImage.current, {
      opacity: 0,
      translateX: -400,
      scale: 2,
      scrollTrigger: {
        trigger: fitImage.current,
        scrub: 2,
        start: "center 90%",
        end: "top 20%",
      },
    });

    gsap.from(fitContent.current, {
      opacity: 0,
      translateX: 400,
      scrollTrigger: {
        trigger: fitContent.current,
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      },
    });

    gsap.from(houseImage.current, {
      opacity: 0,
      translateX: 400,
      scale: 2,
      scrollTrigger: {
        trigger: houseImage.current,
        scrub: 2,
        start: "center 90%",
        end: "top 20%",
      },
    });

    gsap.from(houseContent.current, {
      opacity: 0,
      translateX: -400,
      scrollTrigger: {
        trigger: houseContent.current,
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      },
    });

    gsap.from(nightImage.current, {
      opacity: 0,
      translateX: -400,
      scale: 2,
      scrollTrigger: {
        trigger: nightImage.current,
        scrub: 2,
        start: "center 90%",
        end: "top 20%",
      },
    });

    gsap.from(nightContent.current, {
      opacity: 0,
      translateX: 400,
      scrollTrigger: {
        trigger: nightContent.current,
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
      },
    });


    gsap.timeline({scrollTrigger: {
      trigger: difficultyWrapper.current,
      start: "center 80%",
      end: "top 10%",
      scrub: 2
    }})
      .from(girl.current, {
        opacity: 0,
        translateX: 800
      })
      .from(tableOne.current, {
        opacity: 0,
        scaleX: 0
      })
      .from(tableTwo.current, {
        opacity: 0,
        scaleX: 0
      }, "<")
      .from(starOne.current, {
        opacity: 0,
        rotate: 360,
        translateX: -200,
        transformOrigin: "center center"
      })
      .from(starTwo.current, {
        opacity: 0,
        rotate: 360,
        translateX: -200,
        transformOrigin: "center center"

      }, "<");


      gsap.from(whoDoesCard.current, {
        opacity: 0,
        translateY: 80,
        scale: .5,
        scrollTrigger: {
          trigger: whoDoesCard.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: 2
        }
      })

  });

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <HomeContainer>
      <FirstSection>
        <PresentationWrapper>
          <div ref={(el) => (presentationContent.current = el)}>
            <h1>Tenha bons hábitos, voe rumo ao topo do seu potencial!</h1>
            <h2>
              Domine seus hábitos e construa a melhor versão de si mesmo no
              Habitare
            </h2>
          </div>
          <div ref={(el) => (rocket.current = el)}>
            <Lottie
              options={{ ...lottieOptions, animationData: animationData }}
            />
          </div>
        </PresentationWrapper>
        <SVGHomeTop>
          <svg
            width="721"
            height="459"
            viewBox="0 0 721 459"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M136.522 330.218C136.522 413.141 41.3965 446.436 -6.16637 452.718V459L-113 398.064V-276H576.296V-125.231C583.126 -78.953 595.64 44.2241 667.764 74.5385C738.01 104.064 738.01 143.013 664.105 176.936C589.468 219.026 528.734 245.41 582.882 330.218C616.929 383.542 429.217 382.987 343.604 314.513C227.99 226.564 136.522 247.295 136.522 330.218Z"
              fill="#C45FD3"
              ref={(el) => (SVGTop.current = el)}
            />
            <path
              d="M-40 347.388C11 392.888 104.31 397.682 165.5 344.388C243 276.888 236 241.888 294.5 241.888C367.515 241.888 440.65 315.971 486.5 326.888C560 344.388 608.1 298.982 592.5 248.582C576.9 198.182 597.24 157.699 636 108.5C682 50.1119 571.6 -62.2 530 -101C488.4 -139.8 730.167 -56.612 719.5 -63.112"
              stroke="#010B14"
              stroke-width="3"
              ref={(el) => (SVGTopLine.current = el)}
            />
          </svg>
        </SVGHomeTop>

        <SVGHomeBottom ref={(el) => (SVGBottom.current = el)}>
          <div class="custom-shape-divider-bottom-1623850126">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </SVGHomeBottom>
      </FirstSection>

      <SecondSection ref={(el) => (secondSection.current = el)}>
        <HowItWorksWrapper>
          <div>
            <h2>Como funciona?</h2>
            <p>
              Liste, organize, faça o check-in, encontre grupos de pessoas que
              estão no mesmo objetivo que você, se ajudem e desbloqueie
              conquistas!
            </p>
          </div>

          <HowItWorksCards>
            <HowItWorksCard ref={(el) => howItWorksCard.current.push(el)}>
              <img src={HabitImage} alt="Criando hábitos" />
              <div>
                <h3>1. Crie seus hábitos</h3>
                <p>
                  Faça uma lista de hábitos para criar sua nova rotina diária e
                  iniciar sua jornada rumo ao topo!
                </p>
              </div>
            </HowItWorksCard>
            <HowItWorksCard ref={(el) => howItWorksCard.current.push(el)}>
              <img src={GroupsImage} alt="Criando grupos" />
              <div>
                <h3>2. Crie metas em grupos</h3>
                <p>
                  Encontre pessoas que possuem o mesmo objetivo que você e se
                  ajudem nessa motivação.
                </p>
              </div>
            </HowItWorksCard>
            <HowItWorksCard ref={(el) => howItWorksCard.current.push(el)}>
              <img src={AchievementsImage} alt="Ganhando conquistas" />
              <div>
                <h3>3. Receba conquistas</h3>
                <p>
                  Cumpra seus hábitos como esperado, mantenha o Habitare
                  atualizado e seja recompensado!
                </p>
              </div>
            </HowItWorksCard>
          </HowItWorksCards>
        </HowItWorksWrapper>
      </SecondSection>
      <ThirtySection>
        <CategoryContainer categoryColor="var(--colorSpirit)">
          <CategoryContent>
            <div
              className="infos-category"
              ref={(el) => (spiritContent.current = el)}
            >
              <h1>
                <FaHands /> Corpo e mente saudáveis
              </h1>
              <p>
                Sabe aquele meditação no inicío da manhã que você sempre quis
                fazer e nunca se organizou para que acontecesse de fato?
                <br />
                No Habitare você encontrará a categoria CORPO E MENTE SAUDÁVEIS,
                onde poderá organizar seus hábitos em prol da sua saúde mental e
                espiritual.
              </p>
            </div>
            <div
              className="image-category"
              ref={(el) => (spiritImage.current = el)}
            >
              <Lottie
                options={{ ...lottieOptions, animationData: SpiritLottie }}
              />
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorMoney)">
          <CategoryContent>
            <div
              className="image-category"
              ref={(el) => (moneyImage.current = el)}
            >
              <Lottie
                options={{ ...lottieOptions, animationData: MoneyLottie }}
              />
            </div>
            <div
              className="infos-category"
              ref={(el) => (moneyContent.current = el)}
            >
              <h1>
                <FaMoneyBillWave /> Me poupe
              </h1>
              <p>
                Você é mais uma pessao que tem milhoes de sonhos, mas não
                consegue se organizar financeiramente para realiza-los? <br />
                Entre agora pro Habitare, liste os hábitos que você acredita
                serem imprecindiveis para este objetivo, os organize na
                categoria ME POUPE e veja sua evolução!
              </p>
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorFocus)">
          <CategoryContent category="focus">
            <div
              className="infos-category"
              ref={(el) => (focusContent.current = el)}
            >
              <h1>
                <FaCompressArrowsAlt /> Foco, força e fé
              </h1>
              <p>
                Sabe aquela ideia que quer muito realizar mas nem você acredita
                que um dia vai conseguir tirar da sua cabeça? <br /> Tenha Foco
                Força e Fé que você consegue!!! <br /> Afinal, chegou a hora de
                aprender um novo idioma ou talvez finalmente zerar a caixa de
                entrada com 4000 mil e-mails.
              </p>
            </div>
            <div
              className="image-category"
              ref={(el) => (focusImage.current = el)}
            >
              <Lottie
                options={{ ...lottieOptions, animationData: FocusLottie }}
              />
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorFit)">
          <CategoryContent category="fit">
            <div
              className="image-category"
              ref={(el) => (fitImage.current = el)}
            >
              <Lottie
                options={{ ...lottieOptions, animationData: FitLottie }}
              />
            </div>
            <div
              className="infos-category"
              ref={(el) => (fitContent.current = el)}
            >
              <h1>
                <FaLeaf /> Ficando em forma
              </h1>
              <p>
                Você é igual eu que todo fim de ano faz a mesma promessa? Ano
                que vem vou ser fitness! Mas esse que vem nunca chega? Com a
                categoria FICANDO EM FORMA esse sonho passa a se tornar um pouco
                mais realidade a cada check-in marcado.
                <br /> Que tal começar a fazer uma caminhada, ir para academia
                ou finalmente marcar aquele futebol com os amigos?
              </p>
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorHouse)">
          <CategoryContent>
            <div
              className="infos-category"
              ref={(el) => (houseContent.current = el)}
            >
              <h1>
                <FaHouseDamage /> Lar doce lar
              </h1>
              <p>
                Final de dia, você já está cansado do trabalho e ao chegar na
                sua casa encontra ela toda desorganizada? Ninguém merece né?
                <br /> Uma boa organização pessoal começa com uma casa
                organizada, para isso criamos a categoria LAR DOCE LAR, para
                você lembrar de tarefas como varrer o chão, lavar os pratos e
                quando chegar em casa, sua cama já estar arrumada!
              </p>
            </div>
            <div
              className="image-category"
              ref={(el) => (houseImage.current = el)}
            >
              <Lottie
                options={{ ...lottieOptions, animationData: HouseLottie }}
              />
            </div>
          </CategoryContent>
        </CategoryContainer>
        <CategoryContainer categoryColor="var(--colorNight)">
          <CategoryContent category="night">
            <div
              className="image-category"
              ref={(el) => (nightImage.current = el)}
            >
              <Lottie
                options={{ ...lottieOptions, animationData: NightLottie }}
              />
            </div>
            <div
              className="infos-category"
              ref={(el) => (nightContent.current = el)}
            >
              <h1>
                <FaMoon /> Boa noite
              </h1>
              <p>
                Uma boa noite de sono faz bem para o corpo e para a alma. Mas
                como conseguir se desligar num mundo que fica 24 horas online ?{" "}
                <br /> Com o Habitare você cria hábitos como desconectar-se do
                celular uma hora antes de dormir, dormir ao menos 8 horas por
                dia e evitar comer aquele torresmo tarde, que vai te assombrar
                por toda a noite, para isto use nossa categoria BOA NOITE!
              </p>
            </div>
          </CategoryContent>
        </CategoryContainer>
        <SVGBottomCategory>
          <div class="custom-shape-divider-top-1623850440">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </SVGBottomCategory>
      </ThirtySection>
      <FourthSection>
        <DifficultyWrapper ref={el => difficultyWrapper.current = el}>
          <h1>É mesmo difícil manter bons hábitos?</h1>
          <div>
            <div className="image">
              <SVGDifficultyWrapṕer>
                <svg
                  viewBox="0 0 723 468"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <g ref={el=> girl.current = el}>
                      <path
                        d="M593.447 280.19C593.925 280.052 594.414 279.951 594.908 279.888L614.651 241.109L608.624 232.374L621.072 221.857L636.72 240.368L604.849 285.206C605.633 286.901 605.865 288.788 605.513 290.614C605.161 292.44 604.242 294.119 602.879 295.428C601.516 296.737 599.773 297.614 597.881 297.942C595.99 298.27 594.04 298.034 592.291 297.264C590.542 296.495 589.077 295.229 588.09 293.635C587.104 292.042 586.642 290.195 586.768 288.341C586.893 286.488 587.599 284.715 588.792 283.259C589.985 281.803 591.609 280.733 593.446 280.19L593.447 280.19Z"
                        fill="#A0616A"
                      />
                      <path
                        d="M627.156 227.22C626.887 227.494 626.578 227.729 626.24 227.918L606.04 239.238C605.554 239.51 605.016 239.682 604.458 239.742C603.9 239.803 603.336 239.751 602.8 239.59C602.264 239.429 601.768 239.162 601.345 238.806C600.921 238.45 600.578 238.013 600.338 237.523L590.514 217.458C590.096 216.614 590.006 215.652 590.26 214.749C590.515 213.846 591.097 213.061 591.9 212.538L604.422 204.304C605.204 203.79 606.146 203.557 607.088 203.643C608.029 203.73 608.909 204.131 609.577 204.778L627.079 221.756C627.823 222.478 628.248 223.453 628.262 224.472C628.276 225.492 627.88 226.477 627.156 227.219L627.156 227.22Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M655.51 449.428L644.845 452.234L628.581 413.801L644.322 409.661L655.51 449.428Z"
                        fill="#A0616A"
                      />
                      <path
                        d="M636.403 451.288L656.971 445.878L660.495 458.397L626.976 467.213C626.041 463.893 626.509 460.349 628.277 457.363C630.045 454.376 632.968 452.191 636.403 451.288V451.288Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M564.336 457.298H553.283L548.027 416.084H564.336V457.298Z"
                        fill="#A0616A"
                      />
                      <path
                        d="M545.385 454.239H566.702V467.213H531.964C531.964 463.772 533.378 460.472 535.895 458.039C538.412 455.606 541.826 454.239 545.385 454.239Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M575.984 190.626C588.213 190.626 598.127 181.042 598.127 169.221C598.127 157.399 588.213 147.815 575.984 147.815C563.755 147.815 553.841 157.399 553.841 169.221C553.841 181.042 563.755 190.626 575.984 190.626Z"
                        fill="#A0616A"
                      />
                      <path
                        d="M563.66 427.91H548.555C547.523 427.909 546.529 427.527 545.777 426.844C545.024 426.161 544.568 425.226 544.502 424.23C540.001 355.067 542.634 305.453 552.787 268.1C552.831 267.936 552.886 267.776 552.951 267.619L553.76 265.664C554.059 264.935 554.579 264.309 555.25 263.869C555.922 263.43 556.716 263.196 557.527 263.198H588.588C589.173 263.198 589.752 263.32 590.283 263.556C590.815 263.793 591.288 264.138 591.668 264.568L595.887 269.326C595.969 269.419 596.046 269.513 596.12 269.613C615.144 295.258 632.192 345.394 651.937 412.784C652.229 413.764 652.113 414.814 651.615 415.712C651.117 416.61 650.275 417.285 649.27 417.592L633.038 422.613C632.106 422.897 631.099 422.848 630.202 422.475C629.304 422.102 628.575 421.43 628.147 420.581L586.023 336.126C585.729 335.536 585.246 335.053 584.645 334.749C584.044 334.445 583.358 334.336 582.689 334.438C582.019 334.54 581.401 334.848 580.927 335.317C580.453 335.785 580.147 336.388 580.055 337.037L567.678 424.528C567.542 425.466 567.061 426.325 566.323 426.948C565.584 427.571 564.639 427.916 563.659 427.919L563.66 427.91Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M594.186 269.671C594.144 269.671 594.102 269.67 594.059 269.669L556.331 268.517C555.361 268.491 554.433 268.129 553.717 267.496C553 266.863 552.543 266.003 552.428 265.071C547.646 227.648 560.762 217.622 566.624 215.049C567.114 214.836 567.538 214.503 567.856 214.084C568.174 213.666 568.375 213.174 568.438 212.659L568.945 208.736C569.032 208.043 569.309 207.386 569.747 206.831C578.937 195.323 591.486 191.637 598.149 190.466C598.689 190.372 599.243 190.385 599.778 190.505C600.313 190.625 600.817 190.848 601.26 191.162C601.703 191.476 602.075 191.873 602.354 192.33C602.633 192.787 602.813 193.295 602.883 193.821L603.643 199.453C603.72 199.991 603.942 200.499 604.286 200.928C623.452 225.149 602.1 260.911 597.625 267.834C597.259 268.396 596.752 268.86 596.151 269.181C595.55 269.502 594.874 269.671 594.187 269.672L594.186 269.671Z"
                        fill="#CCCCCC"
                      />
                      <path
                        d="M620.655 171.626C615.716 164.903 609.792 158.908 603.071 153.83C597.483 149.611 591.262 146.006 584.4 144.282C577.538 142.557 569.959 142.851 563.698 146.068C557.437 149.285 550.964 155.676 550.924 162.53C550.912 164.732 551.491 167.711 553.734 167.33L554.383 167.413C559.795 166.356 565.206 165.3 570.617 164.243C572.922 171.975 575.227 179.707 577.532 187.439C578.018 189.069 578.669 190.891 580.269 191.586C581.777 192.241 583.519 191.624 585.044 191.009C585.295 190.907 587.45 186.231 587.45 186.231C587.504 186.085 587.597 185.956 587.72 185.856C587.843 185.757 587.992 185.69 588.15 185.665C588.308 185.639 588.471 185.655 588.621 185.71C588.771 185.766 588.903 185.859 589.003 185.98L590.283 187.527C590.528 187.822 590.865 188.033 591.244 188.126C591.624 188.22 592.024 188.192 592.385 188.046C601.21 184.485 610.035 180.924 618.86 177.362C620.08 176.87 621.443 176.227 621.797 174.996C622.136 173.817 621.39 172.624 620.657 171.626L620.655 171.626Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M722.108 468H450.74C450.501 468 450.272 467.908 450.103 467.745C449.934 467.581 449.839 467.359 449.839 467.128C449.839 466.897 449.934 466.676 450.103 466.512C450.272 466.349 450.501 466.257 450.74 466.257H722.108C722.347 466.257 722.576 466.349 722.745 466.512C722.914 466.676 723.009 466.897 723.009 467.128C723.009 467.359 722.914 467.581 722.745 467.745C722.576 467.908 722.347 468 722.108 468Z"
                        fill="#3F3D56"
                      />
                      <path
                        d="M574.983 332.184C574.37 332.182 573.773 331.991 573.28 331.639L569.176 328.757C568.836 328.516 568.425 328.387 568.003 328.387C567.582 328.387 567.171 328.516 566.83 328.757L562.727 331.639C562.232 331.986 561.636 332.174 561.024 332.174C560.412 332.174 559.816 331.987 559.321 331.639C558.826 331.291 558.458 330.801 558.269 330.239C558.079 329.677 558.079 329.071 558.268 328.508L559.836 323.845C559.967 323.457 559.967 323.04 559.837 322.652C559.707 322.264 559.453 321.927 559.111 321.688L555.007 318.805C554.512 318.458 554.144 317.968 553.955 317.405C553.766 316.843 553.766 316.237 553.955 315.674C554.144 315.112 554.512 314.622 555.007 314.274C555.502 313.927 556.098 313.739 556.71 313.739H561.783C562.204 313.74 562.615 313.611 562.956 313.372C563.297 313.132 563.551 312.794 563.681 312.407L565.248 307.743C565.437 307.181 565.805 306.69 566.3 306.343C566.795 305.995 567.391 305.808 568.003 305.808C568.615 305.808 569.211 305.995 569.706 306.343C570.201 306.69 570.569 307.181 570.758 307.743L572.326 312.407C572.456 312.794 572.709 313.132 573.05 313.372C573.391 313.611 573.802 313.74 574.224 313.739H579.296C579.908 313.739 580.504 313.927 580.999 314.274C581.494 314.622 581.863 315.112 582.052 315.674C582.241 316.237 582.241 316.843 582.052 317.405C581.863 317.968 581.494 318.458 580.999 318.805L576.895 321.688C576.554 321.927 576.3 322.264 576.169 322.652C576.039 323.04 576.04 323.457 576.171 323.845L577.738 328.508C577.934 329.07 577.938 329.678 577.748 330.242C577.558 330.806 577.186 331.296 576.686 331.639C576.192 331.991 575.596 332.182 574.983 332.184H574.983Z"
                        fill="#7A5AED"
                      />
                      <path
                        d="M590.67 322.868C591.829 322.082 592.796 321.06 593.502 319.874C594.209 318.688 594.637 317.366 594.758 316.002C594.879 314.639 594.689 313.266 594.202 311.981C593.715 310.696 592.942 309.53 591.938 308.565L598.946 226.755L578.081 229.53L577.684 309.016C576.119 310.754 575.267 312.987 575.291 315.291C575.315 317.595 576.212 319.811 577.813 321.518C579.413 323.225 581.606 324.306 583.976 324.555C586.346 324.804 588.728 324.204 590.671 322.869L590.67 322.868Z"
                        fill="#A0616A"
                      />
                      <path
                        d="M600.308 238.532C599.917 238.532 599.528 238.477 599.153 238.37L576.753 232.001C576.215 231.848 575.715 231.589 575.286 231.24C574.856 230.89 574.506 230.459 574.258 229.972C574.01 229.485 573.87 228.954 573.845 228.412C573.82 227.87 573.912 227.329 574.115 226.823L582.404 206.122C582.75 205.247 583.409 204.522 584.262 204.079C585.115 203.635 586.104 203.503 587.049 203.706L601.848 206.816C602.772 207.011 603.597 207.511 604.18 208.23C604.763 208.949 605.068 209.843 605.042 210.757L604.353 234.716C604.324 235.736 603.885 236.704 603.13 237.416C602.375 238.128 601.363 238.528 600.308 238.531V238.532Z"
                        fill="#CCCCCC"
                      />
                    </g>
                    <mask id="path-15-inside-1" fill="white">
                      <path d="M389.471 340.76H6.31087C4.6377 340.758 3.03359 340.114 1.85048 338.971C0.667374 337.827 0.0018851 336.276 0 334.659V223.978C0.0018851 222.36 0.667374 220.809 1.85048 219.666C3.03359 218.522 4.6377 217.879 6.31087 217.877H389.471C391.144 217.879 392.748 218.522 393.931 219.666C395.114 220.809 395.78 222.36 395.782 223.978V334.659C395.78 336.276 395.114 337.827 393.931 338.971C392.748 340.114 391.144 340.758 389.471 340.76ZM6.31087 219.62C5.11576 219.621 3.96999 220.081 3.12492 220.898C2.27985 221.715 1.80449 222.822 1.8031 223.978V334.659C1.80449 335.814 2.27985 336.922 3.12492 337.739C3.96999 338.556 5.11576 339.015 6.31087 339.017H389.471C390.666 339.015 391.812 338.556 392.657 337.739C393.502 336.922 393.977 335.814 393.978 334.659V223.978C393.977 222.822 393.502 221.715 392.657 220.898C391.812 220.081 390.666 219.621 389.471 219.62H6.31087Z" />
                    </mask>
                    <path
                      d="M389.471 340.76L389.471 343.76L389.474 343.76L389.471 340.76ZM6.31087 340.76L6.3076 343.76H6.31087V340.76ZM0 334.659L-3 334.659L-3 334.663L0 334.659ZM0 223.978L-3 223.974V223.978H0ZM6.31087 217.877L6.31087 214.877L6.3076 214.877L6.31087 217.877ZM389.471 217.877L389.474 214.877H389.471V217.877ZM395.782 223.978L398.782 223.978L398.782 223.974L395.782 223.978ZM395.782 334.659L398.782 334.663V334.659H395.782ZM6.31087 219.62L6.31087 216.62L6.30751 216.62L6.31087 219.62ZM1.8031 223.978L-1.1969 223.974V223.978H1.8031ZM1.8031 334.659L-1.1969 334.659L-1.19689 334.663L1.8031 334.659ZM6.31087 339.017L6.30751 342.017H6.31087V339.017ZM389.471 339.017L389.471 342.017L389.474 342.017L389.471 339.017ZM393.978 334.659L396.978 334.663V334.659H393.978ZM393.978 223.978L396.978 223.978L396.978 223.974L393.978 223.978ZM389.471 219.62L389.474 216.62H389.471V219.62ZM389.471 337.76H6.31087V343.76H389.471V337.76ZM6.31413 337.76C5.40331 337.759 4.54968 337.407 3.93556 336.814L-0.234593 341.128C1.51751 342.821 3.87209 343.757 6.3076 343.76L6.31413 337.76ZM3.93556 336.814C3.32488 336.224 3.00092 335.445 3 334.656L-3 334.663C-2.99715 337.108 -1.99013 339.431 -0.234593 341.128L3.93556 336.814ZM3 334.659V223.978H-3V334.659H3ZM3 223.981C3.00092 223.191 3.32488 222.413 3.93556 221.823L-0.234593 217.509C-1.99013 219.206 -2.99715 221.529 -3 223.974L3 223.981ZM3.93556 221.823C4.54968 221.229 5.40331 220.878 6.31413 220.877L6.3076 214.877C3.87209 214.88 1.51751 215.815 -0.234593 217.509L3.93556 221.823ZM6.31087 220.877H389.471V214.877H6.31087V220.877ZM389.467 220.877C390.378 220.878 391.232 221.229 391.846 221.823L396.016 217.509C394.264 215.815 391.909 214.88 389.474 214.877L389.467 220.877ZM391.846 221.823C392.457 222.413 392.781 223.191 392.782 223.981L398.782 223.974C398.779 221.529 397.772 219.206 396.016 217.509L391.846 221.823ZM392.782 223.978V334.659H398.782V223.978H392.782ZM392.782 334.656C392.781 335.445 392.457 336.224 391.846 336.814L396.016 341.128C397.772 339.431 398.779 337.108 398.782 334.663L392.782 334.656ZM391.846 336.814C391.232 337.407 390.378 337.759 389.467 337.76L389.474 343.76C391.909 343.757 394.264 342.821 396.016 341.128L391.846 336.814ZM6.30751 216.62C4.35009 216.622 2.45388 217.374 1.03985 218.741L5.21 223.055C5.4861 222.788 5.88143 222.62 6.31423 222.62L6.30751 216.62ZM1.03985 218.741C-0.377626 220.111 -1.19452 221.991 -1.19689 223.974L4.8031 223.981C4.8035 223.654 4.93733 223.318 5.21 223.055L1.03985 218.741ZM-1.1969 223.978V334.659H4.8031V223.978H-1.1969ZM-1.19689 334.663C-1.19452 336.646 -0.377611 338.526 1.03985 339.896L5.21 335.582C4.93732 335.318 4.80349 334.983 4.8031 334.655L-1.19689 334.663ZM1.03985 339.896C2.45385 341.263 4.35004 342.014 6.30751 342.017L6.31423 336.017C5.88148 336.016 5.48613 335.849 5.21 335.582L1.03985 339.896ZM6.31087 342.017H389.471V336.017H6.31087V342.017ZM389.474 342.017C391.431 342.014 393.328 341.263 394.742 339.896L390.572 335.582C390.295 335.849 389.9 336.016 389.467 336.017L389.474 342.017ZM394.742 339.896C396.159 338.526 396.976 336.646 396.978 334.663L390.978 334.656C390.978 334.983 390.844 335.318 390.572 335.582L394.742 339.896ZM396.978 334.659V223.978H390.978V334.659H396.978ZM396.978 223.974C396.976 221.991 396.159 220.111 394.742 218.741L390.572 223.055C390.844 223.318 390.978 223.654 390.978 223.981L396.978 223.974ZM394.742 218.741C393.328 217.374 391.431 216.622 389.474 216.62L389.467 222.62C389.9 222.62 390.295 222.788 390.572 223.055L394.742 218.741ZM389.471 216.62H6.31087V222.62H389.471V216.62Z"
                      fill="#010B14"
                      mask="url(#path-15-inside-1)"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <path
                      d="M238.974 398.21C237.974 398.206 237.001 397.894 236.196 397.32L229.499 392.617C228.942 392.225 228.272 392.014 227.584 392.014C226.896 392.014 226.226 392.225 225.67 392.617L218.973 397.32C218.165 397.887 217.193 398.193 216.194 398.193C215.196 398.193 214.223 397.887 213.416 397.32C212.608 396.753 212.007 395.953 211.698 395.035C211.389 394.118 211.389 393.129 211.698 392.211L214.256 384.601C214.47 383.968 214.47 383.287 214.258 382.654C214.045 382.022 213.63 381.47 213.073 381.08L206.376 376.377C205.568 375.81 204.967 375.01 204.658 374.092C204.35 373.174 204.35 372.185 204.658 371.267C204.967 370.349 205.568 369.55 206.376 368.982C207.184 368.415 208.156 368.109 209.155 368.109H217.433C218.121 368.111 218.791 367.901 219.348 367.51C219.904 367.119 220.318 366.567 220.53 365.934L223.088 358.324C223.396 357.406 223.997 356.606 224.805 356.039C225.613 355.471 226.586 355.166 227.584 355.166C228.583 355.166 229.556 355.471 230.363 356.039C231.171 356.606 231.772 357.406 232.081 358.324L234.639 365.934C234.85 366.567 235.264 367.119 235.821 367.51C236.377 367.901 237.048 368.111 237.736 368.109H246.014C247.012 368.109 247.985 368.415 248.793 368.982C249.6 369.55 250.201 370.349 250.51 371.267C250.819 372.185 250.819 373.174 250.51 374.092C250.202 375.01 249.601 375.81 248.793 376.377L242.096 381.08C241.538 381.47 241.123 382.022 240.911 382.654C240.698 383.287 240.699 383.968 240.913 384.601L243.471 392.211C243.79 393.128 243.796 394.12 243.487 395.04C243.177 395.961 242.57 396.76 241.753 397.32C240.948 397.894 239.975 398.206 238.974 398.21H238.974Z"
                      fill="#7A5AED"
                      ref={(el) => starTwo.current.push(el)}
                    />
                    <path
                      d="M306.843 398.21C305.843 398.206 304.87 397.894 304.064 397.32L297.367 392.616C296.812 392.224 296.141 392.013 295.453 392.013C294.765 392.013 294.095 392.224 293.539 392.616L286.842 397.32C286.034 397.887 285.062 398.193 284.063 398.193C283.065 398.193 282.092 397.887 281.284 397.32C280.477 396.753 279.875 395.953 279.567 395.035C279.258 394.117 279.258 393.129 279.567 392.211L282.125 384.6C282.339 383.968 282.339 383.287 282.127 382.654C281.914 382.022 281.499 381.471 280.941 381.081L274.244 376.377C273.437 375.809 272.835 375.009 272.527 374.092C272.219 373.174 272.219 372.185 272.527 371.267C272.836 370.349 273.437 369.549 274.244 368.982C275.052 368.415 276.025 368.109 277.023 368.109H285.301C285.989 368.111 286.66 367.901 287.217 367.51C287.773 367.119 288.187 366.567 288.399 365.934L290.956 358.324C291.265 357.406 291.866 356.606 292.674 356.038C293.482 355.471 294.454 355.166 295.453 355.166C296.451 355.166 297.424 355.471 298.232 356.038C299.04 356.606 299.641 357.406 299.949 358.324L302.507 365.934C302.719 366.567 303.133 367.119 303.689 367.51C304.246 367.901 304.916 368.11 305.604 368.109H313.882C314.881 368.109 315.853 368.415 316.661 368.982C317.469 369.549 318.07 370.349 318.379 371.267C318.687 372.185 318.687 373.174 318.379 374.092C318.07 375.009 317.469 375.809 316.661 376.377L309.964 381.08C309.407 381.47 308.992 382.021 308.779 382.654C308.567 383.287 308.568 383.968 308.781 384.6L311.34 392.211C311.659 393.128 311.665 394.12 311.356 395.04C311.046 395.96 310.438 396.76 309.622 397.32C308.817 397.894 307.844 398.206 306.843 398.209L306.843 398.21Z"
                      fill="#7A5AED"
                      ref={(el) => starTwo.current.push(el)}
                    />
                    <path
                      d="M351.93 398.663C350.831 398.659 349.762 398.317 348.878 397.687C347.981 397.071 347.313 396.193 346.973 395.182C346.633 394.171 346.64 393.081 346.991 392.073L349.549 384.463C349.732 383.921 349.733 383.337 349.551 382.795C349.369 382.253 349.013 381.781 348.535 381.447L341.838 376.743C340.951 376.12 340.29 375.241 339.952 374.233C339.613 373.225 339.613 372.139 339.952 371.13C340.291 370.122 340.951 369.244 341.838 368.621C342.725 367.997 343.794 367.662 344.891 367.662H353.169C353.758 367.663 354.333 367.483 354.81 367.148C355.287 366.813 355.642 366.34 355.823 365.797L358.381 358.187C358.72 357.179 359.381 356.3 360.268 355.677C361.155 355.053 362.224 354.718 363.321 354.718C364.417 354.718 365.486 355.053 366.373 355.677C367.261 356.3 367.921 357.179 368.26 358.187L370.818 365.797C370.999 366.34 371.354 366.813 371.831 367.148C372.308 367.483 372.882 367.663 373.472 367.662H381.75C382.847 367.662 383.915 367.998 384.802 368.621C385.69 369.244 386.35 370.122 386.689 371.131C387.028 372.139 387.028 373.225 386.689 374.233C386.35 375.241 385.69 376.12 384.803 376.743L378.106 381.447C377.628 381.781 377.272 382.253 377.09 382.795C376.908 383.337 376.908 383.921 377.091 384.463L379.65 392.073C379.989 393.082 379.988 394.168 379.65 395.176C379.311 396.184 378.65 397.063 377.763 397.686C376.876 398.309 375.807 398.645 374.71 398.645C373.614 398.645 372.545 398.309 371.658 397.686L364.961 392.983C364.485 392.647 363.91 392.466 363.32 392.466C362.731 392.466 362.156 392.647 361.68 392.983L354.983 397.686C354.098 398.317 353.029 398.659 351.93 398.663H351.93ZM363.32 390.143C364.417 390.143 365.486 390.479 366.372 391.104L373.069 395.807C373.546 396.143 374.121 396.323 374.71 396.323C375.299 396.323 375.874 396.143 376.351 395.808C376.828 395.473 377.183 395.001 377.365 394.459C377.547 393.917 377.547 393.333 377.365 392.791L374.807 385.181C374.466 384.173 374.465 383.086 374.804 382.077C375.143 381.069 375.804 380.19 376.693 379.568L383.39 374.864C383.867 374.529 384.222 374.057 384.404 373.515C384.586 372.973 384.586 372.39 384.404 371.848C384.222 371.306 383.867 370.834 383.39 370.499C382.913 370.164 382.339 369.984 381.75 369.984H373.472C372.374 369.986 371.305 369.651 370.417 369.027C369.53 368.404 368.87 367.524 368.533 366.515L365.975 358.905C365.792 358.363 365.438 357.89 364.961 357.555C364.484 357.22 363.909 357.04 363.32 357.04C362.731 357.04 362.156 357.22 361.679 357.555C361.202 357.89 360.847 358.363 360.665 358.905L358.107 366.515C357.77 367.524 357.11 368.404 356.223 369.027C355.335 369.651 354.266 369.986 353.169 369.984H344.89C344.301 369.984 343.727 370.164 343.25 370.499C342.773 370.834 342.418 371.306 342.236 371.848C342.054 372.39 342.054 372.973 342.236 373.515C342.418 374.057 342.773 374.529 343.25 374.864L349.947 379.568C350.836 380.19 351.497 381.069 351.836 382.077C352.175 383.086 352.174 384.173 351.834 385.181L349.275 392.791C349.093 393.333 349.093 393.917 349.275 394.459C349.457 395 349.812 395.473 350.289 395.808C350.766 396.142 351.34 396.323 351.93 396.323C352.519 396.323 353.093 396.142 353.57 395.807L360.268 391.104C361.154 390.48 362.223 390.143 363.32 390.143H363.32Z"
                      fill="#3F3D56"
                      ref={(el) => starTwo.current.push(el)}
                    />
                    <path
                      d="M49.5854 244.022C48.0312 244.022 46.5407 244.619 45.4417 245.682C44.3427 246.744 43.7253 248.185 43.7253 249.687C43.7253 251.19 44.3427 252.631 45.4417 253.693C46.5407 254.755 48.0312 255.352 49.5854 255.352H346.196C347.75 255.352 349.241 254.755 350.34 253.693C351.439 252.631 352.056 251.19 352.056 249.687C352.056 248.185 351.439 246.744 350.34 245.682C349.241 244.619 347.75 244.022 346.196 244.022H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <path
                      d="M49.5854 273.654C48.0312 273.654 46.5407 274.251 45.4417 275.313C44.3427 276.375 43.7253 277.816 43.7253 279.319C43.7253 280.821 44.3427 282.262 45.4417 283.324C46.5407 284.387 48.0312 284.983 49.5854 284.983H346.196C347.75 284.983 349.241 284.387 350.34 283.324C351.439 282.262 352.056 280.821 352.056 279.319C352.056 277.816 351.439 276.375 350.34 275.313C349.241 274.251 347.75 273.654 346.196 273.654H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <path
                      d="M49.5854 303.285C48.0312 303.285 46.5407 303.882 45.4417 304.944C44.3427 306.007 43.7253 307.448 43.7253 308.95C43.7253 310.452 44.3427 311.893 45.4417 312.956C46.5407 314.018 48.0312 314.615 49.5854 314.615H346.196C347.75 314.615 349.241 314.018 350.34 312.956C351.439 311.893 352.056 310.452 352.056 308.95C352.056 307.448 351.439 306.007 350.34 304.944C349.241 303.882 347.75 303.285 346.196 303.285H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <path
                      d="M49.5854 244.022C48.0312 244.022 46.5407 244.619 45.4417 245.682C44.3427 246.744 43.7253 248.185 43.7253 249.687C43.7253 251.19 44.3427 252.631 45.4417 253.693C46.5407 254.755 48.0312 255.352 49.5854 255.352H346.196C347.75 255.352 349.241 254.755 350.34 253.693C351.439 252.631 352.056 251.19 352.056 249.687C352.056 248.185 351.439 246.744 350.34 245.682C349.241 244.619 347.75 244.022 346.196 244.022H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <path
                      d="M49.5854 273.654C48.0312 273.654 46.5407 274.251 45.4417 275.313C44.3427 276.375 43.7253 277.816 43.7253 279.319C43.7253 280.821 44.3427 282.262 45.4417 283.324C46.5407 284.387 48.0312 284.983 49.5854 284.983H346.196C347.75 284.983 349.241 284.387 350.34 283.324C351.439 282.262 352.056 280.821 352.056 279.319C352.056 277.816 351.439 276.375 350.34 275.313C349.241 274.251 347.75 273.654 346.196 273.654H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <path
                      d="M49.5854 303.285C48.0312 303.285 46.5407 303.882 45.4417 304.944C44.3427 306.007 43.7253 307.448 43.7253 308.95C43.7253 310.452 44.3427 311.893 45.4417 312.956C46.5407 314.018 48.0312 314.615 49.5854 314.615H346.196C347.75 314.615 349.241 314.018 350.34 312.956C351.439 311.893 352.056 310.452 352.056 308.95C352.056 307.448 351.439 306.007 350.34 304.944C349.241 303.882 347.75 303.285 346.196 303.285H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableTwo.current.push(el)}
                    />
                    <mask id="path-26-inside-2" fill="white">
                      <path d="M389.471 122.883H6.31087C4.6377 122.881 3.03359 122.238 1.85048 121.094C0.667374 119.95 0.0018851 118.4 0 116.782V6.10056C0.0018851 4.48315 0.667374 2.93251 1.85048 1.78883C3.03359 0.645147 4.6377 0.00182228 6.31087 0H389.471C391.144 0.00182228 392.748 0.645147 393.931 1.78883C395.114 2.93251 395.78 4.48315 395.782 6.10056V116.782C395.78 118.4 395.114 119.95 393.931 121.094C392.748 122.238 391.144 122.881 389.471 122.883ZM6.31087 1.74302C5.11576 1.74435 3.96999 2.20388 3.12492 3.02078C2.27985 3.83769 1.80449 4.94528 1.8031 6.10056V116.782C1.80449 117.937 2.27985 119.045 3.12492 119.862C3.96999 120.679 5.11576 121.138 6.31087 121.14H389.471C390.666 121.138 391.812 120.679 392.657 119.862C393.502 119.045 393.977 117.937 393.978 116.782V6.10056C393.977 4.94527 393.502 3.83767 392.657 3.02076C391.812 2.20384 390.666 1.74433 389.471 1.74302H6.31087Z" />
                    </mask>
                    <path
                      d="M389.471 122.883L389.471 125.883L389.474 125.883L389.471 122.883ZM6.31087 122.883L6.3076 125.883H6.31087V122.883ZM0 116.782L-3 116.782L-3 116.786L0 116.782ZM0 6.10056L-3 6.09706V6.10056H0ZM6.31087 0L6.31087 -3L6.3076 -3L6.31087 0ZM389.471 0L389.474 -3H389.471V0ZM395.782 6.10056L398.782 6.10056L398.782 6.09706L395.782 6.10056ZM395.782 116.782L398.782 116.786V116.782H395.782ZM6.31087 1.74302L6.31087 -1.25699L6.30751 -1.25698L6.31087 1.74302ZM1.8031 6.10056L-1.1969 6.09697V6.10056H1.8031ZM1.8031 116.782L-1.1969 116.782L-1.19689 116.786L1.8031 116.782ZM6.31087 121.14L6.30751 124.14H6.31087V121.14ZM389.471 121.14L389.471 124.14L389.474 124.14L389.471 121.14ZM393.978 116.782L396.978 116.786V116.782H393.978ZM393.978 6.10056L396.978 6.10056L396.978 6.09703L393.978 6.10056ZM389.471 1.74302L389.474 -1.25698H389.471V1.74302ZM389.471 119.883H6.31087V125.883H389.471V119.883ZM6.31413 119.883C5.40331 119.882 4.54968 119.531 3.93556 118.937L-0.234593 123.251C1.51751 124.945 3.87209 125.88 6.3076 125.883L6.31413 119.883ZM3.93556 118.937C3.32488 118.347 3.00092 117.568 3 116.779L-3 116.786C-2.99715 119.231 -1.99013 121.554 -0.234593 123.251L3.93556 118.937ZM3 116.782V6.10056H-3V116.782H3ZM3 6.10406C3.00092 5.31448 3.32487 4.53612 3.93556 3.94578L-0.234593 -0.368127C-1.99013 1.3289 -2.99715 3.65182 -3 6.09706L3 6.10406ZM3.93556 3.94578C4.54969 3.35212 5.40332 3.00099 6.31413 3L6.3076 -3C3.87208 -2.99735 1.51749 -2.06183 -0.234593 -0.368127L3.93556 3.94578ZM6.31087 3H389.471V-3H6.31087V3ZM389.467 3C390.378 3.00099 391.232 3.35212 391.846 3.94578L396.016 -0.368127C394.264 -2.06183 391.909 -2.99735 389.474 -3L389.467 3ZM391.846 3.94578C392.457 4.53612 392.781 5.31448 392.782 6.10406L398.782 6.09706C398.779 3.65182 397.772 1.3289 396.016 -0.368127L391.846 3.94578ZM392.782 6.10056V116.782H398.782V6.10056H392.782ZM392.782 116.779C392.781 117.568 392.457 118.347 391.846 118.937L396.016 123.251C397.772 121.554 398.779 119.231 398.782 116.786L392.782 116.779ZM391.846 118.937C391.232 119.531 390.378 119.882 389.467 119.883L389.474 125.883C391.909 125.88 394.264 124.945 396.016 123.251L391.846 118.937ZM6.30751 -1.25698C4.35009 -1.25479 2.45388 -0.503084 1.03985 0.863828L5.21 5.17774C5.4861 4.91084 5.88143 4.7435 6.31423 4.74301L6.30751 -1.25698ZM1.03985 0.863828C-0.377626 2.23406 -1.19452 4.11388 -1.19689 6.09697L4.8031 6.10415C4.8035 5.77667 4.93733 5.44132 5.21 5.17774L1.03985 0.863828ZM-1.1969 6.10056V116.782H4.8031V6.10056H-1.1969ZM-1.19689 116.786C-1.19452 118.769 -0.377626 120.649 1.03985 122.019L5.21 117.705C4.93733 117.441 4.8035 117.106 4.8031 116.779L-1.19689 116.786ZM1.03985 122.019C2.45388 123.386 4.35009 124.137 6.30751 124.14L6.31423 118.14C5.88143 118.139 5.4861 117.972 5.21 117.705L1.03985 122.019ZM6.31087 124.14H389.471V118.14H6.31087V124.14ZM389.474 124.14C391.431 124.138 393.328 123.386 394.742 122.019L390.572 117.705C390.295 117.972 389.9 118.139 389.467 118.14L389.474 124.14ZM394.742 122.019C396.159 120.649 396.976 118.769 396.978 116.786L390.978 116.779C390.978 117.106 390.844 117.441 390.572 117.705L394.742 122.019ZM396.978 116.782V6.10056H390.978V116.782H396.978ZM396.978 6.09703C396.976 4.11392 396.159 2.23406 394.742 0.863802L390.572 5.17771C390.844 5.44128 390.978 5.77662 390.978 6.10409L396.978 6.09703ZM394.742 0.863802C393.328 -0.503131 391.431 -1.25483 389.474 -1.25698L389.467 4.74302C389.9 4.74349 390.295 4.91082 390.572 5.17771L394.742 0.863802ZM389.471 -1.25698H6.31087V4.74302H389.471V-1.25698Z"
                      fill="#010B14"
                      mask="url(#path-26-inside-2)"
                      ref={(el) => tableOne.current.push(el)}
                    />
                    <path
                      d="M237.92 180.69C236.912 180.686 235.932 180.372 235.121 179.794L228.376 175.057C227.816 174.663 227.141 174.45 226.448 174.45C225.755 174.45 225.08 174.663 224.52 175.057L217.775 179.794C216.961 180.365 215.982 180.673 214.976 180.673C213.971 180.673 212.991 180.365 212.177 179.794C211.364 179.223 210.758 178.417 210.448 177.493C210.137 176.568 210.137 175.573 210.447 174.648L213.024 166.983C213.239 166.346 213.24 165.66 213.026 165.023C212.811 164.385 212.394 163.83 211.832 163.438L205.087 158.7C204.274 158.129 203.668 157.323 203.357 156.399C203.047 155.474 203.047 154.479 203.358 153.554C203.668 152.63 204.274 151.824 205.087 151.253C205.901 150.681 206.881 150.374 207.886 150.374H216.223C216.916 150.375 217.592 150.163 218.152 149.77C218.713 149.376 219.13 148.82 219.343 148.183L221.919 140.518C222.23 139.593 222.835 138.788 223.649 138.216C224.462 137.645 225.442 137.337 226.448 137.337C227.453 137.337 228.433 137.645 229.246 138.216C230.06 138.788 230.665 139.593 230.976 140.518L233.553 148.183C233.766 148.82 234.182 149.376 234.743 149.77C235.304 150.163 235.979 150.375 236.672 150.374H245.009C246.015 150.374 246.995 150.681 247.808 151.253C248.621 151.824 249.227 152.63 249.538 153.554C249.848 154.479 249.849 155.474 249.538 156.399C249.227 157.323 248.622 158.129 247.808 158.7L241.063 163.438C240.502 163.83 240.084 164.385 239.87 165.023C239.656 165.66 239.656 166.346 239.872 166.983L242.448 174.648C242.77 175.572 242.776 176.571 242.464 177.498C242.153 178.425 241.54 179.23 240.718 179.794C239.907 180.372 238.927 180.686 237.919 180.69H237.92Z"
                      fill="#7A5AED"
                      ref={(el) => starOne.current.push(el)}
                    />
                    <path
                      d="M282.727 180.96C281.62 180.956 280.544 180.612 279.653 179.977C278.75 179.357 278.077 178.473 277.735 177.454C277.392 176.436 277.399 175.338 277.752 174.323L280.329 166.659C280.514 166.113 280.514 165.525 280.331 164.979C280.147 164.433 279.789 163.957 279.308 163.621L272.563 158.883C271.669 158.255 271.004 157.37 270.662 156.355C270.321 155.339 270.321 154.245 270.663 153.23C271.004 152.214 271.669 151.329 272.563 150.702C273.456 150.074 274.532 149.736 275.637 149.736H283.975C284.568 149.737 285.147 149.556 285.628 149.219C286.108 148.881 286.465 148.405 286.648 147.858L289.225 140.194C289.566 139.178 290.231 138.293 291.125 137.666C292.018 137.038 293.094 136.7 294.199 136.7C295.303 136.7 296.38 137.038 297.273 137.666C298.167 138.293 298.832 139.178 299.173 140.194L301.75 147.858C301.932 148.405 302.289 148.881 302.77 149.219C303.25 149.556 303.829 149.737 304.423 149.736H312.761C313.865 149.736 314.941 150.074 315.835 150.702C316.728 151.33 317.394 152.215 317.735 153.23C318.076 154.245 318.076 155.339 317.735 156.355C317.394 157.37 316.729 158.255 315.835 158.883L309.09 163.621C308.609 163.957 308.25 164.433 308.067 164.979C307.883 165.525 307.884 166.113 308.068 166.659L310.645 174.323C310.986 175.339 310.986 176.433 310.645 177.448C310.303 178.464 309.638 179.349 308.745 179.976C307.851 180.604 306.775 180.942 305.67 180.942C304.566 180.942 303.49 180.604 302.596 179.976L295.851 175.239C295.371 174.901 294.793 174.719 294.199 174.719C293.605 174.719 293.026 174.901 292.546 175.239L285.801 179.976C284.91 180.611 283.833 180.956 282.727 180.96H282.727ZM294.199 172.379C295.304 172.379 296.38 172.718 297.273 173.347L304.018 178.084C304.499 178.422 305.077 178.603 305.671 178.604C306.264 178.604 306.843 178.422 307.323 178.085C307.804 177.747 308.161 177.272 308.344 176.726C308.528 176.18 308.528 175.592 308.344 175.046L305.768 167.381C305.425 166.366 305.424 165.271 305.765 164.255C306.107 163.24 306.773 162.355 307.668 161.728L314.413 156.991C314.894 156.653 315.251 156.178 315.434 155.632C315.618 155.086 315.618 154.498 315.434 153.953C315.251 153.407 314.893 152.931 314.413 152.594C313.933 152.257 313.355 152.075 312.761 152.075H304.423C303.318 152.077 302.241 151.74 301.347 151.112C300.453 150.484 299.789 149.598 299.449 148.581L296.873 140.916C296.689 140.371 296.332 139.895 295.851 139.557C295.371 139.22 294.793 139.038 294.199 139.038C293.605 139.038 293.027 139.22 292.546 139.557C292.066 139.895 291.709 140.371 291.525 140.916L288.949 148.581C288.609 149.598 287.945 150.484 287.051 151.112C286.157 151.74 285.08 152.077 283.975 152.075H275.637C275.044 152.075 274.465 152.257 273.985 152.594C273.505 152.931 273.147 153.407 272.964 153.952C272.78 154.498 272.78 155.086 272.964 155.632C273.147 156.178 273.504 156.653 273.985 156.991L280.73 161.728C281.625 162.355 282.292 163.24 282.633 164.256C282.975 165.272 282.974 166.366 282.63 167.381L280.053 175.046C279.87 175.592 279.87 176.18 280.053 176.726C280.237 177.271 280.594 177.747 281.075 178.084C281.555 178.422 282.133 178.603 282.727 178.603C283.321 178.603 283.899 178.422 284.379 178.084L291.125 173.347C292.018 172.718 293.094 172.379 294.199 172.379H294.199Z"
                      fill="#3F3D56"
                      ref={(el) => starOne.current.push(el)}
                    />
                    <path
                      d="M351.678 181.143C350.571 181.139 349.495 180.795 348.604 180.16C347.7 179.54 347.028 178.656 346.685 177.637C346.343 176.619 346.349 175.521 346.703 174.507L349.28 166.842C349.464 166.296 349.465 165.708 349.281 165.162C349.098 164.616 348.74 164.14 348.259 163.804L341.513 159.066C340.62 158.438 339.954 157.553 339.613 156.538C339.272 155.522 339.272 154.428 339.613 153.413C339.955 152.398 340.62 151.513 341.513 150.885C342.407 150.257 343.483 149.919 344.588 149.919H352.925C353.519 149.921 354.098 149.739 354.578 149.402C355.059 149.064 355.416 148.588 355.598 148.042L358.175 140.377C358.517 139.361 359.182 138.476 360.075 137.849C360.969 137.221 362.045 136.883 363.15 136.883C364.254 136.883 365.33 137.221 366.224 137.849C367.117 138.476 367.783 139.361 368.124 140.377L370.7 148.042C370.883 148.588 371.24 149.064 371.72 149.402C372.201 149.739 372.78 149.92 373.374 149.919H381.711C382.816 149.919 383.892 150.257 384.786 150.885C385.679 151.513 386.344 152.398 386.686 153.413C387.027 154.429 387.027 155.522 386.686 156.538C386.344 157.553 385.679 158.438 384.786 159.066L378.04 163.804C377.559 164.14 377.201 164.616 377.017 165.162C376.834 165.708 376.834 166.296 377.019 166.842L379.596 174.507C379.937 175.522 379.937 176.616 379.596 177.631C379.254 178.647 378.589 179.532 377.695 180.159C376.802 180.787 375.726 181.125 374.621 181.125C373.516 181.125 372.44 180.787 371.547 180.159L364.802 175.422C364.322 175.084 363.743 174.902 363.149 174.902C362.555 174.902 361.977 175.084 361.497 175.422L354.752 180.159C353.861 180.795 352.784 181.139 351.677 181.143H351.678ZM363.15 172.562C364.255 172.562 365.331 172.901 366.224 173.53L372.969 178.267C373.449 178.605 374.028 178.787 374.621 178.787C375.215 178.787 375.794 178.605 376.274 178.268C376.754 177.93 377.112 177.455 377.295 176.909C377.479 176.363 377.479 175.775 377.295 175.229L374.719 167.564C374.375 166.549 374.374 165.455 374.716 164.439C375.057 163.423 375.724 162.538 376.619 161.911L383.364 157.174C383.844 156.836 384.202 156.361 384.385 155.815C384.569 155.269 384.568 154.681 384.385 154.136C384.202 153.59 383.844 153.114 383.364 152.777C382.884 152.44 382.305 152.258 381.712 152.258H373.374C372.269 152.26 371.192 151.923 370.298 151.295C369.404 150.667 368.739 149.781 368.4 148.764L365.823 141.099C365.64 140.554 365.282 140.078 364.802 139.741C364.322 139.403 363.743 139.222 363.15 139.222C362.556 139.222 361.977 139.403 361.497 139.741C361.017 140.078 360.659 140.554 360.476 141.099L357.899 148.764C357.56 149.781 356.895 150.667 356.001 151.295C355.108 151.923 354.03 152.26 352.925 152.258H344.588C343.994 152.258 343.416 152.44 342.936 152.777C342.455 153.114 342.098 153.59 341.914 154.136C341.731 154.681 341.731 155.269 341.914 155.815C342.098 156.361 342.455 156.836 342.935 157.174L349.681 161.911C350.576 162.538 351.242 163.423 351.584 164.439C351.925 165.455 351.924 166.549 351.581 167.564L349.004 175.229C348.821 175.775 348.821 176.363 349.004 176.909C349.187 177.455 349.545 177.93 350.025 178.267C350.506 178.605 351.084 178.786 351.678 178.786C352.271 178.786 352.85 178.605 353.33 178.267L360.075 173.53C360.968 172.901 362.045 172.562 363.15 172.562H363.15Z"
                      fill="#3F3D56"
                      ref={(el) => starOne.current.push(el)}
                    />

                    <path
                      d="M49.5854 26.145C48.0312 26.145 46.5407 26.7418 45.4417 27.8042C44.3427 28.8666 43.7253 30.3074 43.7253 31.8098C43.7253 33.3122 44.3427 34.7531 45.4417 35.8154C46.5407 36.8778 48.0312 37.4746 49.5854 37.4746H346.196C347.75 37.4746 349.241 36.8778 350.34 35.8154C351.439 34.7531 352.056 33.3122 352.056 31.8098C352.056 30.3074 351.439 28.8666 350.34 27.8042C349.241 26.7418 347.75 26.145 346.196 26.145H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableOne.current.push(el)}
                    />
                    <path
                      d="M49.5854 55.7764C48.0312 55.7764 46.5407 56.3732 45.4417 57.4356C44.3427 58.4979 43.7253 59.9388 43.7253 61.4412C43.7253 62.9436 44.3427 64.3844 45.4417 65.4468C46.5407 66.5091 48.0312 67.106 49.5854 67.106H346.196C347.75 67.106 349.241 66.5091 350.34 65.4468C351.439 64.3844 352.056 62.9436 352.056 61.4412C352.056 59.9388 351.439 58.4979 350.34 57.4356C349.241 56.3732 347.75 55.7764 346.196 55.7764H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableOne.current.push(el)}
                    />
                    <path
                      d="M49.5854 85.4077C48.0312 85.4077 46.5407 86.0045 45.4417 87.0669C44.3427 88.1293 43.7253 89.5701 43.7253 91.0725C43.7253 92.5749 44.3427 94.0158 45.4417 95.0781C46.5407 96.1405 48.0312 96.7373 49.5854 96.7373H346.196C347.75 96.7373 349.241 96.1405 350.34 95.0781C351.439 94.0158 352.056 92.5749 352.056 91.0725C352.056 89.5701 351.439 88.1293 350.34 87.0669C349.241 86.0045 347.75 85.4077 346.196 85.4077H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableOne.current.push(el)}
                    />
                    <path
                      d="M49.5854 26.145C48.0312 26.145 46.5407 26.7418 45.4417 27.8042C44.3427 28.8666 43.7253 30.3074 43.7253 31.8098C43.7253 33.3122 44.3427 34.7531 45.4417 35.8154C46.5407 36.8778 48.0312 37.4746 49.5854 37.4746H346.196C347.75 37.4746 349.241 36.8778 350.34 35.8154C351.439 34.7531 352.056 33.3122 352.056 31.8098C352.056 30.3074 351.439 28.8666 350.34 27.8042C349.241 26.7418 347.75 26.145 346.196 26.145H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableOne.current.push(el)}
                    />
                    <path
                      d="M49.5854 55.7764C48.0312 55.7764 46.5407 56.3732 45.4417 57.4356C44.3427 58.4979 43.7253 59.9388 43.7253 61.4412C43.7253 62.9436 44.3427 64.3844 45.4417 65.4468C46.5407 66.5091 48.0312 67.106 49.5854 67.106H346.196C347.75 67.106 349.241 66.5091 350.34 65.4468C351.439 64.3844 352.056 62.9436 352.056 61.4412C352.056 59.9388 351.439 58.4979 350.34 57.4356C349.241 56.3732 347.75 55.7764 346.196 55.7764H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableOne.current.push(el)}
                    />
                    <path
                      d="M49.5854 85.4077C48.0312 85.4077 46.5407 86.0045 45.4417 87.0669C44.3427 88.1293 43.7253 89.5701 43.7253 91.0725C43.7253 92.5749 44.3427 94.0158 45.4417 95.0781C46.5407 96.1405 48.0312 96.7373 49.5854 96.7373H346.196C347.75 96.7373 349.241 96.1405 350.34 95.0781C351.439 94.0158 352.056 92.5749 352.056 91.0725C352.056 89.5701 351.439 88.1293 350.34 87.0669C349.241 86.0045 347.75 85.4077 346.196 85.4077H49.5854Z"
                      fill="#CCCCCC"
                      ref={(el) => tableOne.current.push(el)}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="723" height="468" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </SVGDifficultyWrapṕer>
            </div>
            <div className="content">
              <p>
                No Habitare você irá classificar todos seus hábitos e metas
                conforme a dificuldade que acredita ter para mantê-los.
              </p>
              <p>
                Com o passar do tempo iŕa perceber que aquele objetivo tão
                sonhado não era tão difícil assim!
              </p>
            </div>
          </div>
        </DifficultyWrapper>
      </FourthSection>
      <FifthSection>
        <WhoDoesWrapper>
          <h1>Quem faz o Habitare?</h1>
          <div>
            <p>
              Somos um grupo de jovens desenvolvedores que acredita no uso da
              tecnologia como veículo de mudança e de impacto positivo na vida
              de todas as pessoas.
            </p>
            <p>
              Pequenas mudanças farão você se sentir muito melhor, e o Habitare
              nasce com o intuito de te levar motivação para a maior conquista
              de todas: ter uma vida mais feliz, saudável e produtiva!
            </p>
          </div>
          <WhoDoesCards>
            <WhoDoesCard ref={el => whoDoesCard.current.push(el)}>
              <div>
                <img src={BrunoImage} alt="Foto de Bruno Belarmino" />
              </div>
              <div>
                <h4>Bruno Belarmino</h4>
                <div>
                  <a
                    href="https://www.linkedin.com/in/bruno-belarmino-nog/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/BrunoBelarminoNog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://gitlab.com/BrunoBelarminoNog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGitlab />
                  </a>
                </div>
              </div>
            </WhoDoesCard>
            <WhoDoesCard ref={el => whoDoesCard.current.push(el)}>
              <div>
                <img src={GuilhermeImage} alt="Foto de Guilherme Lemes" />
              </div>
              <div>
                <h4>Guilherme Lemes</h4>
                <div>
                  <a href="https://www.linkedin.com/in/guilemes-freitas/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/guilemes-freitas" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://gitlab.com/guilemes-freitas" target="_blank" rel="noopener noreferrer">
                    <FaGitlab />
                  </a>
                </div>
              </div>
            </WhoDoesCard>
            <WhoDoesCard ref={el => whoDoesCard.current.push(el)}>
              <div>
                <img src={LeomarImage} alt="Foto de Leomar Romanzini" />
              </div>
              <div>
                <h4>Leomar Romanzini</h4>
                <div>
                  <a href="https://www.linkedin.com/in/leomarromanzini/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/leomarromazini" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://gitlab.com/leomarromanzini" target="_blank" rel="noopener noreferrer">
                    <FaGitlab />
                  </a>
                </div>
              </div>
            </WhoDoesCard>
            <WhoDoesCard ref={el => whoDoesCard.current.push(el)}>
              <div>
                <img src={WesleyImage} alt="Wesley da Costa" />
              </div>
              <div>
                <h4>Wesley da Costa</h4>
                <div>
                  <a
                    href="https://www.linkedin.com/in/wesley-da-costa-matos-731243b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/wesleydcm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://gitlab.com/wesleydcm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGitlab />
                  </a>
                </div>
              </div>
            </WhoDoesCard>
          </WhoDoesCards>
        </WhoDoesWrapper>
      </FifthSection>
    </HomeContainer>
  );
};

export default Home;
