const stackContElm = document.getElementById('stack-cont')
const pushInputElm = document.getElementById('push-value-input')
const peekElm = document.getElementById('peek-value')
const stackSizeElm = document.getElementById('stack-size')
const stackStatElm = document.getElementById('stack-status')
let stack = []
let max_stack_size = 5

const clear_stack_dom = () => {
    while (stackContElm.firstChild) {
        stackContElm.removeChild(stackContElm.firstChild)
    }
}
const re_render_stack = () => {
    clear_stack_dom()
    stackStatus()
    stack.forEach(elm => {
        console.log(elm)
        let new_div = document.createElement('div')
        new_div.className = 'stack-element col'
        let new_h2 = document.createElement('h2')
        new_h2.innerHTML = elm
        new_div.appendChild(new_h2)
        stackContElm.appendChild(new_div)
    })
}

//Buttons fxn
const increment_push_value = () => {
    pushInputElm.value++
}
const decrement_push_value = () => {
    pushInputElm.value--
}
// Overflow

const overflow = () => {
    if (stack.length >= max_stack_size) {
        alert('Stack Overflow')
        return true
    } else return false
}

// Add to last -> enqueue
// Remove First -> dequeue

const push_to_stack = () => {
    if (overflow()) {
        return
    } else {
        console.log(pushInputElm.value)
        stack.push(pushInputElm.value)

        peek_to_stack()
        re_render_stack()
    }
}
const pop_from_stack = () => {
    stack.pop()
    peek_to_stack()
    re_render_stack()
}

const peek_to_stack = () => {
    let peekVal = stack[stack.length - 1]
    if (peekVal == undefined) {
        alert('Stack is empty')
        peekVal = null
    }
    peekElm.innerHTML = peekVal
    console.log('Peek -> ' + peekVal)
}

const stackStatus = () => {
    const current_size = stack.length
    stackStatElm.innerHTML = current_size + '/' + max_stack_size
}

const changeStackSize = () => {
    const new_size = stackSizeElm.value
    if (new_size < stack.length) {
        alert('Remove some elements and try again')
        stackSizeElm.value = max_stack_size
    } else {
        max_stack_size = new_size
    }
}
