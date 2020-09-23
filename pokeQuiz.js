function click1() {
    var content = document.querySelector('#content')
    var content1 = document.querySelector('#content1')
    var ans = prompt('Enter your answer to Question 1.');

    var li = document.createElement('li');
    li.innerHTML = `<div>
                          <p>${ans}</p>
                      </div>`
    if (ans === 'Hoenn') {
        content.appendChild(li);
    } if (ans != 'Hoenn') {
        content1.appendChild(li);
    }
}

function click2() {
    var content = document.querySelector('#content')
    var content1 = document.querySelector('#content1')
    var ans = prompt('Enter your answer to Question 2.');

    var li = document.createElement('li');
    li.innerHTML = `<div>
                          <p>${ans}</p>
                      </div>`
    if (ans === 'Thunder Badge') {
        content.appendChild(li);
    } if (ans != 'Thunder Badge') {
        content1.appendChild(li);
    }
}

function click3() {
    var content = document.querySelector('#content')
    var content1 = document.querySelector('#content1')
    var ans = prompt('Enter your answer to Question 3.');

    var li = document.createElement('li');
    li.innerHTML = `<div>
                          <p>${ans}</p>
                      </div>`
    if (ans === 'Pokemon Trainer Red') {
        content.appendChild(li);
    } if (ans != 'Pokemon Trainer Red') {
        content1.appendChild(li);
    }
}

function click4() {
    var content = document.querySelector('#content')
    var content1 = document.querySelector('#content1')
    var ans = prompt('Enter your answer to Question 4.');

    var li = document.createElement('li');
    li.innerHTML = `<div>
                          <p>${ans}</p>
                      </div>`
    if (ans === 'Cynthia') {
        content.appendChild(li);
    } if (ans != 'Cynthia') {
        content1.appendChild(li);
    }
}
function click5() {
    var content = document.querySelector('#content')
    var content1 = document.querySelector('#content1')
    var ans = prompt('Enter your answer to Question 5.');

    var li = document.createElement('li');
    li.innerHTML = `<div>
                          <p>${ans}</p>
                      </div>`
    if (ans === 'Lance') {
        content.appendChild(li);
    } if (ans != 'Lance') {
        content1.appendChild(li);
    }
}
