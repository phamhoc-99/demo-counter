import React,{ Component } from 'react';

class Counter extends Component{  //bài này ko hiểu gì
    constructor(props){
        console.log('Counter constructer')
        super(props);
        this.state={count:0};
    }
    increase(){
        this.setState({
            count:this.state.count+1
        });
    }
    decrease(){
        this.setState({
            count:this.state.count-1
        });
    }
    render(){
        console.log('Counter render')
        return(
            <div className="counter">
<button onClick={()=>this.decrease()}>-</button>
<span>{this.state.count}</span>
<button onClick={()=>this.increase()}>+</button>
            </div>
        );
    }
    componentDidMount(){//componentDidMount :gọi lần đầu tiên khi state thay đổi
        console.log('counter did mount')
    }
    componentDidUpdate(){//componenDidUpdate:gọi khi thay đổi trừ lần đầu tiên
        console.log('counter did update')
    }
    componentWillUnmount(){//componentWillUnmount:gọi trước khi unmount
        console.log('counter will unmount')
    }
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.count===nextState.count){
            return false;
        }
        return true; 
    }
}

export default Counter;