import React from 'react'
import todo from '.././assets/todo.png'
import frontBanner from '.././assets/frontBanner.png'

// for navigaton
import { useNavigate } from 'react-router-dom'

export default function FrontPage() {
  // navigate
  const navigate = useNavigate();
  function go () {
    navigate('./MyTodoApp')
  }
  return (

  <div className="front-wrapper">
    {/* logos area */}
    <section id='logo'>
      <img src={todo} alt="banner-img" />
      <h3>Todos</h3>
    </section>
    {/* headings */}
    <h1 className='title-heading'>
      Manage your todos & everything with <span>Todo Holder</span>
    </h1>
   {/* details */}
   <section id='details-todos'>
    <h3>Stay Organized, Stay Focused</h3>
<p>
" The Todo App is your personal productivity partner—designed to help you capture, manage, and prioritize your daily tasks with ease. Whether it's a quick reminder or a long-term goal, this app keeps everything in one place so you never miss a beat. With a simple and intuitive interface, you can add, edit, complete, or delete tasks effortlessly—helping you stay organized and in control of your day "
</p>
   </section>
   {/* extra styles */}
   <section id='extra-details'>
    <div className="exe">
      <div className="exe0"></div>
    </div>
    {/* some info */}
    <div className="todos-info">
      <span>Write</span>
      <span>Hold</span>
      <span>Delete</span>
    </div>
   </section>
   {/* go to direction */}
   <section id='btnSec'>
<button id='destinationBtn' onClick={() => {
  go();
}}>
    Let's Start 
   </button>
   </section>
  </div>
  )
}
