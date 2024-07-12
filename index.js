document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
    
    document.querySelector('form').reset();
});
