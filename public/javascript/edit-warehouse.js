async function editFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="warehouse-name"]').value.trim();
    const stock = document.querySelector('input[name="warehouse-stock"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/warehouses/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            stock
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-warehouse-form').addEventListener('submit', editFormHandler);