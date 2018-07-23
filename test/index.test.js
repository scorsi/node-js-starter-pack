import { expect } from 'chai'
import HelloWorld from '../src/index'

describe('HelloWorld class', () => {
  it('greetings node-js', () => {
    expect('hello node-js').eql(new HelloWorld().greetings('node-js'))
  })
  it('greetings null', () => {
    expect('hello null').eql(new HelloWorld().greetings(null))
  })
})
