function addTodo() {
    let Todo = $("#input-area").val();
    console.log(Todo);

    let item = `
    <li class="list-group-item d-flex justify-content-between align-items-center" id="list-group-item">
                  ${Todo}
                  <span class="badge badge-primary badge-pill" onclick="deleteTodo()">완료</span>
    </li>`;
    $("#list-group").append(item);     // ul 태그 안에 추가
    $("#input-area").val('');
}