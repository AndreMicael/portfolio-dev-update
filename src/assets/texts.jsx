import React from 'react';
import Projeto1 from "../assets/projeto1.png";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

const HTML = <FaHtml5 />;
const CSS = <FaCss3Alt />;
const Javascript = <RiJavascriptFill />;

export const getProject = [
  { id: 1, titulo: 'Ion Imóveis', desc: "A página tem como principal objetivo captar potenciais clientes para a imobiliária, fornecendo informações detalhadas sobre o empreendimento e incentivando a conversão através de formulários de contato e agendamentos de visitas.", stack: [HTML, CSS, Javascript], img: Projeto1 },
  { id: 2, titulo: 'Ion Imóveis', desc: "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.", stack: [HTML, CSS], img: "https://via.placeholder.com/1920x1080" },
  { id: 3, titulo: 'Ion Imóveis', desc: "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.", stack: [HTML, CSS], img: "https://via.placeholder.com/1920x1080" },
  { id: 4, titulo: 'Ion Imóveis', desc: "Mussum Ipsum, cacilds vidis litro abertis. Nulla id gravida magna, ut semper sapien.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.", stack: [HTML, CSS], img: "https://via.placeholder.com/1920x1080" },
];