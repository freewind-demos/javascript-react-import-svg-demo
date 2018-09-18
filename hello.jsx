import React, {Component} from 'react'
import demoImage from './demo.svg'
import Svg from './svg'

class Hello extends Component {
    render() {
        return <div>
            <h1>Hello Svg Image</h1>
            <Svg src={demoImage} className='svg'/>
        </div>
    }
}

export default Hello
