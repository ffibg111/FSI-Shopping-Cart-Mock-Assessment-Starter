/*
                // checking ids
                <div class="product-quanity">
                    <button id="quantity-down">-</button>
                    <button id="quantity-up">+</button>
                    <div class="total-quantity">Quantity: 1</div>
                    <p class="total-price">Total Price available at checkout</p>
                </div>
*/

let qty = 1;
let totalQty = document.querySelector('.total-quantity')

function updateQty(qty) {
    console.log(qty)
    totalQty.innerHTML = "Quantity " + qty
}

let minusButton = document.getElementById('quantity-down')
minusButton.addEventListener('click', function() {
    if (qty > 0) {
        qty--
    } updateQty(qty)
})

let plusButton = document.getElementById('quantity-up')
plusButton.addEventListener('click', function() {
    qty++
    updateQty(qty)
    
})
