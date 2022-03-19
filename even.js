

// const saveBtn = document.getElementById("save-btn").addEventListener("click", function(){
//   const message = document.getElementById("message");
//   message.textContent = "user save successful";
//   setTimeout(()=>{
//   message.textContent = "";
//   }, 2000)
// })

const saveBtn = document.getElementById("save-btn").addEventListener("click", function(){
    const message = document.getElementById("message");
    let count = 0;
    message.textContent = count;


    setInterval(()=>{
        count++;
    message.textContent = count;
    }, 1000)
  })
  




