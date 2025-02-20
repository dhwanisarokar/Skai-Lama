import React, { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";
import image from "../assets/img.png";
import logo from "../assets/QuesLogo.png";
import PRojectModal from "./ProjectModel";
import axios from "axios";
import { config } from "../App";

const token = localStorage.getItem("token");

const Dashboard = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleCreate = async () => {
    try {
      if (projectName.trim() === "") return;
      const res = await axios.post(`${config.endpoint}/projects`, projectName, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      setProjects((perv) => [...perv, res.data]);

      setIsModelOpen(false);
    } catch (e) {
      if (e.response || e.response.status === 400) {
        alert(e.response.data.message);
      } else {
        alert(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
        );
      }
      setIsModelOpen(false);
    }
  };

  useEffect(() => {
    if (!token) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const fetchAPIData = async () => {
      try {
        const res = await axios.get(`${config.endpoint}/projects`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        setProjects(res.data);
      } catch (e) {
        if (e.response || e.response.status === 400) {
          alert(e.response.data.message);
        } else {
          alert(
            "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
          );
        }
        navigate("/login");
      }
    };
    fetchAPIData();
  }, [navigate]);

  return (
    <div className="create-project-container">
      <header className="header">
        <img src={logo} alt="logo" />
        <div className="actions">
          <IoSettingsSharp />
          <FaRegBell />
        </div>
      </header>
      <div className="content">
        {!projects.length ? (
          <>
            <h1>Create a New Project</h1>
            <img
              src={image}
              alt="Project Illustration"
              className="illustration"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              nostrum doloremque asperiores totam itaque hic possimus pariatur
              iure quas, velit enim obcaecati a animi, saepe perferendis,
              voluptatem fugit! In, libero. Quo, voluptate impedit! Aliquid
              iusto, facilis, officiis perferendis veniam delectus eius non
              fugit eveniet suscipit eum hic quos soluta in, itaque deleniti
              voluptates autem porro alias. Aliquid quae libero adipisci.
            </p>
            <button
              className="create-button"
              onClick={() => setIsModelOpen(true)}
            >
              {" "}
              Create New Project
            </button>
          </>
        ) : (
          <>
            <p>Projects</p>
            <button
              className="create-button"
              onClick={() => setIsModelOpen(true)}
            >
              {" "}
              Create New Project
            </button>
          </>
        )}
        {isModelOpen && (
          <PRojectModal
            onClose={() => setIsModelOpen(false)}
            projectName={projectName}
            setProjectName={setProjectName}
            handleCreate={handleCreate}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
