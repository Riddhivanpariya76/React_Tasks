import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const navigate = useNavigate()
  const[tasks, setTasks] = useState([])

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData =async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = response.json();
      setTasks(data);
    } catch (error) {
      console.log(error)
    }
  };

  const handleLogout = () =>{
    // console.log('click from dashboard')
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    // localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <NavBar title="Task Management" onLogout={handleLogout}/>
      <h1>MY TASKS</h1>
      <TaskList/>
    </div>
  );
};

export default Dashboard;
