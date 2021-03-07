// <reference types="cypress" />

describe('Tests for TodoList', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('[data-cy="todos"]').as('todos')
    })

    it('Check if todo is created', () => {
        const todo = 'My new task'

        cy.createTodo(todo)
        cy.get('@todos').contains(todo).should('be.visible')
    })

    it('Check if contains correct number of items', () => {
        const todo = 'repeated task'

        cy.createTodo(todo)
        cy.createTodo(todo)
        cy.createTodo(todo)
        cy.get('@todos').get('[data-cy="todo"]').should('have.length', 3)
    })

    it('Check if todo persist after reload', () => {
        const todo = 'This todo should persist'

        cy.createTodo(todo)
        cy.reload()
        cy.get('@todos').contains(todo).should('be.visible')
    })

    it('Check if todo is edited', () => {
        const todo = 'My normal task'
        const todoEdited = 'My super task'

        cy.createTodo(todo)
        cy.editTodo(0, todoEdited)
        cy.get('@todos').get('[data-cy="todo"]').contains(todoEdited)
    })

    it('Check if todo prevent blank content when edited', () => {
        const todo = 'My task'
        const todoEdited = ' '

        cy.createTodo(todo)
        cy.editTodo(0, todoEdited)
        cy.get('@todos').get('[data-cy="todo"]').contains(todo)
    })

    it('Check if todo is deleted', () => {
        const todo = 'My task'

        cy.createTodo(todo)
        cy.deleteTodo(0)
        cy.get('@todos').get('[data-cy="todo"]').should('not.exist')
    })
})