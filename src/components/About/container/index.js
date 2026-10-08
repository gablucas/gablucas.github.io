import React from 'react'
import { Container, Content } from './styles';
import Technologies from '../../Home/technologies';


const About = () => {
  return (
    <Container>
      <Content>
        <h2>Sobre mim</h2>
        <p>Sou desenvolvedor full stack, atuando desde 2024 com foco em C# e .NET no backend. Tenho experiência com e-commerce, incluindo plataformas B2B e de venda de ingressos, com fluxos completos de carrinho, pedidos, checkout e integração com gateways de pagamento.</p>
        <p>Também trabalhei em uma plataforma de visão computacional em tempo real, com microsserviços em .NET e Python, mensageria com RabbitMQ e dashboards em Blazor WebAssembly. No front-end, transito entre React, Next.js e Blazor, e já participei do desenvolvimento de um aplicativo em Flutter.</p>
        <p>Gosto de desafios que exigem soluções inovadoras e estou sempre aprendendo, buscando entregar resultados de qualidade.</p>

        <Technologies />

      </Content>
    </Container>
  )
}

export default About;