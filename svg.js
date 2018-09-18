import React from 'react'

function insertClassName(source, className) {
    return source.replace('<svg ', `<svg class='${className}' `)
}

class Svg extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {src, className} = this.props
        const finalSource = className ? insertClassName(src, className) : src
        return <span dangerouslySetInnerHTML={{__html: finalSource}}/>
    }
}

export default Svg
