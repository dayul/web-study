function addTodo() {
    let todo = $("#input-area").val();
    console.log(todo);

    let id = Math.floor(Math.random() * 10);
    let item = `
    <li class="list-group-item d-flex justify-content-between align-items-center list-${id}" id="list-group-item">
                  ${todo}
                  <span class="badge badge-primary badge-pill" onclick="deleteTodo(${id})">완료</span>
    </li>`;
    $("#list-group").append(item);     // ul 태그 안에 추가
    $("#input-area").val('');
}

function deleteTodo(id) {
    $(`.list-${id}`).remove();
}