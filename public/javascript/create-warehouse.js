async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="warehouse-name"]').ariaValueMax.trim();
    const stock = document.querySelector('input[name="warehouse-stock"]').ariaValueMax.trim();

    const response = await fetch (`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            stock
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } 
    else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);