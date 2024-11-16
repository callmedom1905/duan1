// payment page
let quantity = document.getElementById('quantity').value

function minus() {
    quantity = parseInt(quantity)
    if (quantity > 1) {
        quantity--
        render()
    }
}

function plus() {
    quantity = parseInt(quantity)
    quantity++
    render()
}

function render() {
    document.getElementById('quantity').value = quantity;
}

// payment step 1 page

