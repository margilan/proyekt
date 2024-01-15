function createRowTable(phone , index){
    return `
    <tr>
            <td>${index}.</td>
            <td>${phone.name}</td>
            <td>${phone.price}</td>
            <td>${phone.description}.</td>
            <td>${phone.category_id}</td>
            <td>${phone.status}</td>
            <td class="d-flex gap-3 text-center">
            <i class="bi bi-x-square text-danger"></i>
            <i class="bi bi-pencil-square text-success"></i>
            </td>
  </tr>
    `
}

export{createRowTable}