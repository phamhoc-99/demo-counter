import './App.css';
import React,{ Component } from 'react';
import Counter from './components/counter';
class App extends Component{
    componentDidUpdate(){
      console.log('App updated');
    }

//state luôn đi với constructor    
//lưu state
constructor(props){
super(props);
this.state={showCounter:true  };
}

removeCounter(){
   this.setState({
     showCounter:false
   });
}


    render(){
      console.log('App render');
      return(
        <div className="App"> 
        <button onClick={()=>this.removeCounter()}> Remove counter</button>
        {this.state.showCounter && <Counter/>}  
        </div>
      );
    }
}

export default App;
