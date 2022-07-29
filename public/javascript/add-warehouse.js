async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="warehouse-name"]').value.trim();
    const stock = document.querySelector('input[name="warehouse-stock"]').value.trim();

    const response = await fetch(`/api/posts`, {
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