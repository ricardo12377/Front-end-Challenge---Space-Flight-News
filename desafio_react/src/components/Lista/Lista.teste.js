import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Lista from './Lista'

describe("Testando o formulário", () => {
   
    it("should render form", () => {
        render(<Lista />)
        
        const element = screen.getByTestId('form-element')

        expect(element).toBeInTheDocument()
    })

    it("should render apresentation", () => {
        render(<Lista />)

        const apresentation = screen.getByTestId('modal')

        expect(apresentation).toBeInTheDocument()
    })
})