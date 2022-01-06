import React from 'react';

class Stocks extends React.Component {

    constructor(props) {
        super(props);
        let tmp = props.symbol;
        if(localStorage.getItem(tmp) === null) {
            this.state = {
                symbol: props.symbol,
                api_key: props.api,
                price: 'loading...',
                lastRefresh: 'loading...',
                status: 'loading...'
            }
        } else {
            let price = localStorage.getItem(tmp);
            let refresh = price.split('%')[1];
            this.state = {
                symbol: tmp,
                price: price.split('%')[0],
                status: 'success',
                lastRefresh: refresh
            }
        }
    }        

    componentDidMount() {
        if(this.state.status === 'loading...') {
            if(localStorage.getItem(this.state.symbol) === null) {
                this.getStockPrice();
            } else {
                let price = localStorage.getItem(this.state.symbol);
                let lastRefresh = localStorage.getItem(this.state.symbol+'_lastRefresh');
                this.setState({
                    price: '$'+ parseFloat(price),
                    lastRefresh: lastRefresh,
                    status: 'success'
                });
                setInterval(() => this.getStockPrice(), 61000);
            }
        }
        if(this.state.status === 'success') {
            setInterval(() => this.getStockPrice(), 61000);
        }    
        
    }    

    getStockPrice() {    
        let stockSymbol = this.state.symbol;
        stockSymbol = stockSymbol;
        let api = this.state.api_key;
        let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${api}`;

    fetch(url).then(response => response.json().then
    (data => {
        console.log(data);
        let stock = data['Global Quote'];
        let price = stock['05. price'];
        let lastRefresh = stock['07. latest trading day'];
        //lastRefresh = lastRefresh.substring(0, 10);
        price = parseFloat(price);
        price = "$" + price;
        this.setState({
            price: price,
            lastRefresh: lastRefresh,
            status: 'success'
        });
        price = price + "%" + lastRefresh;
        localStorage.setItem(stockSymbol, price);
    })).catch(err => {
        console.log(err);
        this.setState({
            status: 'failed'
        });
        setInterval(() => this.getStockPrice(), 61000);
        });
    }

    visitStock() {
        window.open(`https://finance.yahoo.com/quote/${this.state.symbol}`);
    }

   render() {
       return (
        <div>
            <div className="portfolio_card">
                <p2>{this.state.symbol}</p2>
            <p style={{
                fontSize: '1.2em',
                fontWeight: 200,
                marginTop: '0.8em',
            }}>
                {this.state.price}
            </p>
            <p style={{
                fontSize: '12px',
                fontWeight: 200,
                marginTop: '0.8em',
            }}>
                Last Updated: {this.state.lastRefresh}
            </p>

                <button type="button" class="learn-btn"
                    onClick={() => this.visitStock()}>
                More Info</button>
            </div>   
                <div className="spacer"/>  
        </div>
    );
   }
        
}

export default Stocks;