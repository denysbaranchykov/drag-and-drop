const item = document.querySelector('.item');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragend(event) {
    // event.target.classList.remove('hold', 'hide'); --> the same as below;
    event.target.className = 'item';
}

const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragover(event) {
event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}