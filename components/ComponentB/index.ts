class ComponentB implements Component.B {
  private name: string

  constructor () {
    this.name = 'component-b'
  }

  getLastName () {
    return this.name
  }
}