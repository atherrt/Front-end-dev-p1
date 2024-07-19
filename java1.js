function vowels(){
    let count=0;
    let a=prompt('enter string: ');
    for(let i=0;i<=a.length;i++){
        if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u'){
            count++;
        }

    }
    console.log(count);
    return count;
}



document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Document is ready');

    // Add more JavaScript functionality as needed
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button was clicked!');
        });
    }
});