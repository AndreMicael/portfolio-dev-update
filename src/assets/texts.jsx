import React from 'react';
import Projeto1 from "../assets/projeto1.png";
import Projeto2 from "../assets/projeto2.png";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt,FaReact  } from "react-icons/fa";
import { RiJavascriptFill ,RiJavaLine} from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";

const HTML = <div className='text-orange-400'><FaHtml5 /></div>;
const CSS = <div className='text-blue-500'><FaCss3Alt /></div>;
const Javascript = <div className='text-amber-300'><RiJavascriptFill /></div>;
const ReactJs = <div className='text-cyan-400'><FaReact /></div>;
const Java = <div className='text-orange-500'><RiJavaLine /></div>;
const Springboot = <div className='text-green-500'><BiLogoSpringBoot /></div>;


export const getProject = [
  { id: 1, titulo: 'Ion Imóveis', desc: "A página tem como principal objetivo captar potenciais clientes para a imobiliária, fornecendo informações detalhadas sobre o empreendimento e incentivando a conversão através de formulários de contato e agendamentos de visitas.", stack: [HTML, CSS, Javascript], img: Projeto1, link: 'https://andremicael.github.io/Ion-Imoveis-LandingPage/',github:'https://github.com/AndreMicael/Ion-Imoveis-LandingPage' },
  { id: 2, titulo: 'My Book API / Site', desc: "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.", stack: [HTML, CSS,ReactJs,Java,Springboot], img: Projeto2 },
  { id: 3, titulo: 'Ion Imóveis', desc: "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.", stack: [HTML, CSS], img: "https://via.placeholder.com/1920x1080" },
  { id: 4, titulo: 'Ion Imóveis', desc: "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.", stack: [HTML, CSS], img: "https://via.placeholder.com/1920x1080" },
];