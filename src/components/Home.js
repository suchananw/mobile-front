import React,{Component} from 'react';
import Show from './Show/Show'
const data = [
    { name : 'blah',price: '1',img:'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'},
    { name : 'blahblah',price: '2',img:'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'},
    { name : 'blahblahblah',price: '3',img:'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'},
    { name : 'blahblahblahblah',price: '4',img:'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg'}
];

export default class Home extends Component {
    render(){
        return(
        <div class="container">
        <br></br>
            <div class="row">
                {data.map(prod => (
                 <Show name={prod.name} price={prod.price} img={prod.img}/>
                 ))}
            </div>
         </div>
        );
    }
    
}
