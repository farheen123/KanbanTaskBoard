import React from "react";
import KanbanBoard from './components/KanbanBoard';
import { TaskProvider } from './context/TaskContext.js';
import TaskForm from './components/TaskForm';
import "./App.css";

function App() {
  return (
    
    <TaskProvider>
     
      <header class="header_section">
        <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                        <li class="nav-item active">
                            <a class="nav-link" href=""> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">  </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=""> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-brand" href=""> <span><span>Kanban</span>Task</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=""> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href=""> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href=""> </a>
                        </li>
                    </ul>
                </div>
            </nav>
         </div>
      </header>
      <div class="contact_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <h1 class="contact_taital">Add New Task</h1>
               </div>
            </div>
            <div class="contact_section_2">
               <div class="">
               <TaskForm />
               </div>
            </div>
         </div>
      </div>

 
      <div className="min-h-screen bg-gray-100 p-6">
        <KanbanBoard />
      </div>
      <div class="client_section layout_padding">
         <div class="container">
            <div class="row">
            
            </div>
            <div class="customer_section_2">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">2025 All Rights Reserved. Design by <a href="#">Free Html Templates</a>. DIstributed by <a href="#" target="_blank">ThemeWagon</a></p>
         </div>
      </div>
    </TaskProvider>
  );
}

export default App;