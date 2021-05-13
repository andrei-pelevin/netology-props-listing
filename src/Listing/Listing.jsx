
const Listing = ({ items }) => {

    return (
        <div className='item-list'>

            {items.map(item => {

                // className
                if (item.MainImage) {
                    let quantitylevel = '';
                    if (item.quantity <= 10) {
                        quantitylevel = 'level-low'
                    } else if (item.quantity > 10 && item.quantity <= 20) {
                        quantitylevel = 'level-medium'
                    } else {
                        quantitylevel = 'level-high'
                    }



                    // цена
                    let price = ''
                    if (item.currency_code === 'USD') {
                        price = `$${item.price}`
                    } else if (item.currency_code === 'EUR') {
                        price = `€${item.price}`
                    } else {
                        price = `${item.price} ${item.currency_code}`
                    }

                    // описание
                    let title = item.title;
                    if (item.title.length > 50) {
                        title = item.title
                        title = title.substr(50, item.title.length) + '...'
                    }




                    return (
                        <div className="item" key={item.listing_id}>
                            <div className="item-image">
                                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                                    <img src={item.MainImage.url_570xN} alt='' />
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{title}</p>
                                <p className="item-price">{price}</p>
                                <p className={'item-quantity ' + quantitylevel}>{item.quantity} left</p>
                            </div>
                        </div>)
                } else {
                    return null;
                }

            })}
        </div>
    );



}

export default Listing;