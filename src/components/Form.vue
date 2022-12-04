<script setup>
import { useResumeStore } from "../stores/resume";
import { FormKitIcon } from "@formkit/vue";

const store = useResumeStore();
import { ref } from "vue";

const nameInput = ref("");
const emailInput = ref("");
const webSiteInput = ref("");
const jobPositionInput = ref("");
const missionInput = ref("");
const projectsListInput = ref([]);
const educationListInput = ref([]);
const hasNotProjects = ref(false);
const hasNotEducation = ref(false);

const handleChangeName = () => {
  store.changeName(nameInput.value);
};

const handleChangeEmail = () => {
  store.changeEmail(emailInput.value);
};
const handleChangeWebsite = () => {
  store.changeWebsite(webSiteInput.value);
};
const handleChangeJobPosition = () => {
  store.changeJobPosition(jobPositionInput.value);
};
const handleChangeMission = () => {
  store.changeMission(missionInput.value);
};

const handleChangeProjects = () => {
  store.changeProjects(projectsListInput);
};

const handleChangeEducation = () => {
  store.changeEducation(educationListInput);
};
</script>
<script>
export default {
  data() {
    return {
      projectsNb: 0,
      diplomasNb: 0,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="form">
    <div class="row">
      <FormKit
        label="Full Name"
        type="text"
        help="Write your full name"
        validation="required"
        v-model="nameInput"
        @change="handleChangeName"
      />

      <FormKit
        label="Job Position"
        type="text"
        help="Enter your job position"
        v-model="jobPositionInput"
        @change="handleChangeJobPosition"
      />
    </div>

    <div class="row">
      <FormKit
        label="Email"
        type="email"
        help="Write your email"
        validation="required"
        v-model="emailInput"
        @change="handleChangeEmail"
      />

      <FormKit
        label="Website"
        type="text"
        help="Enter your website"
        v-model="webSiteInput"
        @change="handleChangeWebsite"
      />
    </div>

    <div class="row">
      <FormKit
        class="textarea"
        label="Mission"
        type="textarea"
        help="Describe your mission"
        v-model="missionInput"
        @change="handleChangeMission"
      />
    </div>
    <div class="row">
      <div v-if="!hasNotProjects">
        <FormKit v-model="projectsListInput" type="list">
          <p>Enter a list of your projects</p>
          <FormKit
            :label="'Project'"
            type="text"
            @change="handleChangeProjects"
          />
          <div class="extra-input" v-for="idx in projectsNb" :key="idx">
            <FormKit
              :key="idx"
              :label="'Project' + Number(idx + 1)"
              type="text"
              @change="handleChangeProjects"
            />
            <FormKitIcon class="close" @click="projectsNb--" icon="trash" />
          </div>
          <FormKit type="button" @click="projectsNb++">Add Project</FormKit>
        </FormKit>
      </div>
      <FormKit
        v-model="hasNotProjects"
        type="checkbox"
        label="I don't have any projects"
      />
    </div>
    <div class="row">
      <div v-if="!hasNotEducation">
        <FormKit v-model="educationListInput" type="list">
          <p>Enter your diplomas</p>
          <FormKit
            :label="'Diploma'"
            type="text"
            @change="handleChangeEducation"
          />
          <div class="extra-input" v-for="idx in diplomasNb" :key="idx">
            <FormKit
              :key="idx"
              :label="'Diploma' + Number(idx + 1)"
              type="text"
              @change="handleChangeEducation"
            />
            <FormKitIcon class="close" @click="diplomasNb--" icon="trash" />
          </div>
          <FormKit type="button" @click="diplomasNb++">Add Diploma</FormKit>
        </FormKit>
      </div>
      <FormKit
        v-model="hasNotEducation"
        type="checkbox"
        label="I don't have any diplomas"
      />
    </div>
  </div>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  width: 30rem;
}

.extra-input {
  display: flex;
  align-items: center;
}

.close svg {
  max-width: 2em;
  margin-left: 5px;
}

.close:hover {
  cursor: pointer;
}

.row {
  display: flex;
  justify-content: space-between;
}

.close svg {
  width: 24px;
}
</style>
