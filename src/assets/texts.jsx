import React from 'react';
import Projeto1 from "../assets/webp/projeto1.webp";
import Projeto2 from "../assets/webp/projeto2.webp";
import Projeto3 from "../assets/webp/projeto3.webp";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt,FaReact  } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
// import { BiLogoSpringBoot } from "react-icons/bi";
import { SiPuppeteer } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


const HTML = <div className='text-orange-400'><FaHtml5 /></div>;
const CSS = <div className='text-blue-500'><FaCss3Alt /></div>;
const Javascript = <div className='text-amber-300'><RiJavascriptFill /></div>;
const ReactJs = <div className='text-cyan-400'><FaReact /></div>;
// const Java = <div className='text-orange-500'><RiJavaLine /></div>;
// const Springboot = <div className='text-green-500'><BiLogoSpringBoot /></div>;
const Puppeteer = <div className='text-green-500'><SiPuppeteer /></div>
const PHP = <div className='text-purple-500'><SiPhp /></div>
const NextJS = <div className='text-purple-500'><RiNextjsFill /></div>
const MySQL = <div className='text-orange-500'>< SiMysql /></div>
const Tailwind = <div className='text-blue-500'>< RiTailwindCssFill /></div>


export const getProject = [
  { id: 3, titulo: 'Finans', desc: "Projeto em construção. Sistema de controle de gastos e orçamentos criado com PHP, MySql e Tailwind. Projeto criado para disciplina Programação WEB 1 (Universidade Federal de Mato Grosso)", stack: [HTML, CSS,PHP, MySQL,Tailwind], img: Projeto3,github:'https://github.com/AndreMicael/controle_gastos', link:'http://andremicael.com/finans' },
  { id: 1, titulo: 'Ion Imóveis', desc: "A página tem como principal objetivo captar potenciais clientes para a imobiliária, fornecendo informações detalhadas sobre o empreendimento e incentivando a conversão através de formulários de contato e agendamentos de visitas.", stack: [HTML, CSS, Javascript], img: Projeto1, link:'https://andremicael.github.io/Ion-Imoveis-LandingPage/',github:'https://github.com/AndreMicael/Ion-Imoveis-LandingPage' },
  { id: 2, titulo: 'Stock Wall', desc: "Projeto criado para analisar ações da Bolsa de Valores Brasileira. Os dados foram adquiridos, colocados no banco de dados MongoDB e enviados para o front-end onde serão analizados.", stack: [HTML, CSS,ReactJs,Puppeteer,NextJS], img: Projeto2,github:'https://github.com/AndreMicael/stock-wall', link:'https://stock-wall.vercel.app/' },
 
  
 
];