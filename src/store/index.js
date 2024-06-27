import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://thuthuzaposwayo.github.io/VueDay/data/'
export default createStore({
  state: {
jobTitle: null,
about: null,
education: null,
experience: null,
skills: null,
testimonials: null,
projects: null,
  },

  getters: {
  },
  
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
     setAbout(state, value) {
     state.about = value
     },

     setEducation(state,value){
      state.education = value
     },
     setExperience(state,value){
      state.experience = value
     },
     setSkills(state,value){
      state.skills = value
     },
     setTestimonials(state,value){
      state.experience = value
     },
     setprojects(state,value){
      state.projects = value
     },
     
  },
  actions: {
    async fetchJobTitle(context) {
      
      try{
        let {jobTitle} = await (await axios.get(portfolioURL)).data
          context.commit ("setJobTitle", jobTitle) 
      } catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchAbout(context) {
      try{
        let {about} =  ( await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch(e){
        Swal.fire({
          title:"Error",
          text:"failed to fetch the about",
          icon:"error",
          timer:2000
        })
      }
    },

    async fetchEducation(context) {
      try{
        let {education} =  ( await axios.get(portfolioURL)).data
        context.commit("setEducation", education)
      } catch(e){
        Swal.fire({
          title:"Error",
          text:"failed to fetch the education",
          icon:"error",
          timer:2000
        })
      }
    },
    async fetchexperience(context) {
      try{
        let {experience} =  ( await axios.get(portfolioURL)).data
        context.commit("setExperience", experience)
      } catch(e){
        Swal.fire({
          title:"Error",
          text:"failed to fetch the experince",
          icon:"error",
          timer:2000
        })
      }
    },

    async fetchSkills(context) {
      try{
        let {skills} =  ( await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch(e) {
        Swal.fire({
          title:"Error",
          text:"failed to fetch the testinomials",
          icon:"error",
          timer:2000
        })
      }
    },

    async fetchTestimonials(context) {
      try{
        let {testimonials} =  ( await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      }catch(e){
        Swal.fire({
          title:"Error",
          text:"failed to fetch the testinomials",
          icon:"error",
          timer:2000
        })
      }
    },
    async fetchProjects(context) {
      try{
        let {projects} =  ( await axios.get(portfolioURL)).data
        context.commit("setprojects", projects)
      }catch(e) {
        Swal.fire({
          title:"Error",
          text:"failed to fetch the projects",
          icon:"error",
          timer:2000
        })
      }
    },



  },

  modules: {
  }
})
