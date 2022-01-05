import React from "react";

function Markets() {
    class GetStockPrice extends React.Component {
        
        constructor(props) {
            super(props);
            let tmp = props.stock.toLowerCase();
            if(localStorage.getItem(tmp) === null) {
                this.state = {
                    stock: props.stock,
                    price: 'loading...',
                    lastRefresh: 'loading...',
                    status: 'loading...'
                }

            } else {
                let price = localStorage.getItem(tmp);
                let refresh = price.split('%')[1];
                this.state = {
                    stock: props.stock,
                    price: price.split('%')[0],
                    status: 'success',
                    lastRefresh: refresh
                }
            }
        }        

        componentDidMount() {
            if(this.state.status === 'loading...') {
                if(localStorage.getItem(this.state.stock) === null) {
                    this.getStockPrice();
                } else {
                    let price = localStorage.getItem(this.state.stock);
                    let lastRefresh = localStorage.getItem(this.state.stock+'_lastRefresh');
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
            let stockSymbol = this.state.stock;
            let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=MC8YBMDW70JP2X51`;

        fetch(url).then(response => response.json().then
        (data => {
            console.log(data);
            let stock = data['Global Quote'];
            let price = stock['05. price'];
            let lastRefresh = stock['07. latest trading day'];
            lastRefresh = lastRefresh.substring(0, 10);
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
        render() {
            return (
                <>
                    {this.state.price}
                    <p style={{
                        fontSize: '10px',
                    }}>Last Refreshed: {this.state.lastRefresh}</p>
                </>
            )
        }
    }

    return (
        <div className="markets">
            <div className="row">
                <div className="col">
                    <div className="stock_card">
                        <h5 style={{fontWeight:"300"}}>S&P500</h5>
                        <GetStockPrice stock='spy' />
                    </div>    
                </div>
                <div className="col">
                    <div class="stock_card">
                        <h5 style={{fontWeight:"300"}}>DOW JONES</h5>
                        <GetStockPrice stock='dia'/>
                    </div> 
                </div>
                <div className="col">
                    <div class="stock_card">
                        <h5 style={{fontWeight:"300"}}>NASDAQ</h5>
                        <GetStockPrice stock='ndaq'/>
                    </div> 
                </div>   
            </div>     
        </div> 
    );       
}


export default Markets;