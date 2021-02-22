import React from 'react'
import withHocComponent from "./withHocComponent";

class R075_ReactHoc extends React.Component {
    render () {
      console.log('2. HocComponent render')
      return (
        <h2>props.name : {this.props.name}</h2>
      )
    }
}
export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc')

/*R075_ReactHoc이 export 되지 않았기 때문에 당장 render되지 않음.*/ 