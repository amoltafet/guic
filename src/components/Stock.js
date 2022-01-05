import React from 'react';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: '',
            stat: '',
            symbol: props.symbol
        }
    }    

    componentDidMount() {
        this.fetchStock();
    }
    
    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        let StockSymbol = this.state.symbol;
        const API_KEY = 'RE4V1YVZ0IQx7VcmFvu1kpwLdJyYTj9O';
        let API_Call = `https://api.polygon.io/v2/aggs/ticker/${StockSymbol}/prev?adjusted=true&apiKey=${API_KEY}`;
        let status = '';
        let closePrice = '';

        fetch(API_Call)
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);

                for (var key in data['results']) {
                    closePrice = data['results'][key]['c'];
                }
                status = data['status'];
                console.log("Status:" + status);
                console.log("Close Price:" + closePrice);
            }
        ).then (
            function(status) {
                pointerToThis.setState({
                    price: closePrice,
                    stat: status
                });
            }
        )
    }
   render() {
       return (
        <div>
            <p>
                ${this.state.price}
            </p>
        </div>
    );
   }
        
}

export default Stock;

