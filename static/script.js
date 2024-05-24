function checkBalance() {
    var accountNumber = document.getElementById('accountNumber').value;
    fetch('/check_balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'account_number': accountNumber})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('balanceResult').innerText = 'Balance: $' + data.balance;
    })
    .catch(error => console.error('Error:', error));
}

function transfer() {
    var sender = document.getElementById('sender').value;
    var receiver = document.getElementById('receiver').value;
    var amount = document.getElementById('amount').value;
    fetch('/transfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'sender': sender,
            'receiver': receiver,
            'amount': amount
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('transferResult').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}
