import { ref } from "vue";
import { defineStore } from "pinia";

export const useResumeStore = defineStore("resume", () => {
  const resume = ref({
    name: "John Doe",
    email: "john.doe@mail.com",
    website: null,
    jobPosition: "Job Position",
    mission: null,
    projects: ["Sample Project"],
    education: ["Bachelor Example in Marketing"],
  });

  const changeName = (newName) => {
    resume.value.name = newName;
  };

  const changeEmail = (newEmail) => {
    resume.value.email = newEmail;
  };

  const changeWebsite = (newWebsite) => {
    resume.value.website = newWebsite;
  };

  const changeJobPosition = (newJobPosition) => {
    resume.value.jobPosition = newJobPosition;
  };

  const changeMission = (newMission) => {
    resume.value.mission = newMission;
  };

  const changeProjects = (newProjects) => {
    resume.value.projects = newProjects;
  };

  const changeEducation = (newEducation) => {
    resume.value.education = newEducation;
  };

  return {
    resume,
    changeName,
    changeEmail,
    changeWebsite,
    changeJobPosition,
    changeMission,
    changeProjects,
    changeEducation,
  };
});
