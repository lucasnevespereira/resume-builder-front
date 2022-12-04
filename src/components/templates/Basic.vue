<script setup>
import { useResumeStore } from "../../stores/resume";

const store = useResumeStore();
</script>
<template>
  <div class="resume__preview">
    <div class="about section">
      <h1 class="about__name">{{ store.resume.name }}</h1>
      <div class="about__job">{{ store.resume.jobPosition }}</div>
      <div class="about__contact">
        <a target="_blank" :href="'mailto:' + store.resume.email">{{
          store.resume.email
        }}</a>
        <span v-if="store.resume.website"
          >•
          <a target="_blank" :href="'https://' + store.resume.website">{{
            store.resume.website
          }}</a>
        </span>
      </div>
    </div>

    <p v-if="store.resume.mission" class="mission section">
      {{ store.resume.mission }}
    </p>

    <div class="experience section">
      <h2>Experience</h2>

      <div class="experience__employer">
        <div class="experience__role">
          <div><strong>Full Stack Web Developer</strong></div>
          <div class="experience__dates">September 2019 - Present</div>
        </div>
        <div class="experience__entity">
          Example Company
          <span class="experience__location">(Paris, France)</span>
        </div>
      </div>

      <ul class="experience__details">
        <li class="experience__detail">Angular development</li>

        <li class="experience__detail">Java Development</li>
      </ul>

      <div class="experience__employer">
        <div class="experience__role">
          <div><strong>PHP Developer</strong></div>
          <div class="experience__dates">July 2019 - September 2019</div>
        </div>
        <div class="experience__entity">
          Some Company <span class="experience__location">(Paris, France)</span>
        </div>
      </div>

      <ul class="experience__details">
        <li class="experience__detail">PHP development</li>

        <li class="experience__detail">Client consulting</li>
      </ul>
    </div>

    <div v-if="store.resume.projects.length > 0" class="projects section">
      <h2>Projects</h2>
      <ul v-for="(project, index) in store.resume.projects" :key="index">
        <li>{{ project }}</li>
      </ul>
    </div>

    <div v-if="store.resume.education.length > 0" class="education section">
      <h2>Education</h2>
      <ul v-for="(education, index) in store.resume.education" :key="index">
        <li>{{ education }}</li>
      </ul>
    </div>

    <div class="skills section">
      <h2>Skills</h2>
      <ul>
        <li>Golang</li>
        <li>React</li>
        <li>Angular</li>
        <li>NodeJS</li>
      </ul>
    </div>

    <div class="languages section">
      <h2>Languages</h2>
      <ul>
        <li>English</li>
        <li>Portuguese</li>
        <li>French</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

:root {
  --blue: #3e84c6;
  --secondary: #777;
  --lighter: rgba(0, 0, 0, 0.6);
  --black: #000;
}

a {
  text-decoration: none;
  color: var(--secondary);
  font-weight: bold;
}

.resume__preview {
  background-color: #fff;
  color: var(--black);
  font-family: "Lato", sans-serif;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
}

ul {
  margin-left: 0.6rem;
}

h2 {
  font-variant: small-caps;
  color: var(--blue);
}

.about {
  display: grid;
  grid-template-areas: "name" "role " "contact";
}

.about__name {
  font-weight: 900;
  margin-bottom: 0;
  grid-area: name;
  color: var(--blue);
}

.about__job {
  font-weight: 900;
  font-variant: small-caps;
  margin-top: 0;
  grid-area: role;
}

.about__contact {
  grid-area: contact;
  color: var(--blue);
}

.experience__employer {
  padding-left: 2rem;
  margin-bottom: 1rem;
}

.experience__role {
  display: flex;
  justify-content: space-between;
}

.experience__dates {
  font-size: 0.85rem;
}

.experience__details {
  color: var(--lighter);
}
</style>
