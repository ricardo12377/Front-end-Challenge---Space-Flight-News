import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Card from './Card'

describe("Testando o formulário", () => {
   
    it("should render form", () => {
        render(<Card />)
        
        const element = screen.getByTestId('form-element')

        expect(element).toBeInTheDocument()
    })

})