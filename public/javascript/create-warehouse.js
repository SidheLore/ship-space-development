async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="warehouse-name"]').ariaValueMax.trim();
    const stock = document.querySelector('input[name="warehouse-stock"]').ariaValueMax.trim();

    const response = await fetch(`/api/warehouses`, {
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

document.querySelector('.new-warehouse-form').addEventListener('submit', newFormHandler);