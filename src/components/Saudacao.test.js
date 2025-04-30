//importaçao das ferramentas de teste
import {render, screen } from '@testing-library/react'

// importação do componente qua será testado 
import { saudacao } from './Saudacao'

test('renderiza a saudação com nome corretamente', () => {
    render(<Saudacao nome='john' />)


    const titulo = screen.getByText(Olá, john)

    expect(titulo).toBeInTheDocument() 
})