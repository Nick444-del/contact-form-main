function rselected(m, n) {
    let qbox = document.querySelectorAll('.qbox');
    for (let i = 0; i < qbox.length; i++) {
        qbox[i].classList.remove('bg-green600');
    }
    // m.childNodes[1].checked = true;
    console.log(n);
    n.checked = true;
    m.classList.add('bg-green600');
}

function submit() {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let query = document.getElementById('query');
    let message = document.getElementById('message').value;
    let consent = document.getElementById('consent').value;
    // console.log(fname, lname, email, query, message, consent);
    show();
    setTimeout(() => {hide()}, 2000);
}

function show(){
    let messagebox = document.querySelector('.messagebox');
    messagebox.classList.remove('hidden');
    messagebox.classList.add('flex');
}

function hide(){
    let messagebox = document.querySelector('.messagebox');
    messagebox.classList.remove('flex');
    messagebox.classList.add('hidden')
}