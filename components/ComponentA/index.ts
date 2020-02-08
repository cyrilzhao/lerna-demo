class ComponentA implements Component.A {
  private name: string

  constructor () {
    this.name = 'component-a'
  }

  getFirstName () {
    console.log('aaa')
    return this.name
  }
}

export default ComponentA