document.addEventListener("DOMContentLoaded", () => {

 const Form = document.querySelector('form')
 console.log('test', form)

   form.addEventListener('submit',function(e){
 e.preventDefault()
  const Task = document.querySelector('new-task-description').value;

  createTask(task)
  form.reset()
 })

 function createTask(task){
  const div = document.createElement('div')
  const li = document.createElement('li')
  const button = document.createElement('button')

  button.addEventListener('click',function(){
      console.log('Clicking')
      li.remove()
  })

  button.innerText = "x"
  li.innerText = task
  li.append(button)
  div.append(li)

  let finish = document.querySelector('#tasks')
  finish.append(div)
 }
 
 });

