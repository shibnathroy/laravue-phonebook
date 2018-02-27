<template>
  <div class="modal" :class="openmodel">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" :class="{'is-danger': errors.name }" type="text" placeholder="Name" v-model="list.name">
        </div>
        <p class="help is-danger" v-if="errors.name">{{ errors.name[0] }}</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" :class="{'is-danger': errors.email }" type="text" placeholder="Email" v-model="list.email">
        </div>
        <p class="help is-danger" v-if="errors.email">{{ errors.email[0] }}</p>
      </div>

      <div class="field">
        <label class="label">Phone</label>
        <div class="control">
          <input class="input" :class="{'is-danger': errors.phone }" type="text" placeholder="Phone" v-model="list.phone">
        </div>
        <p class="help is-danger" v-if="errors.phone">{{ errors.phone[0] }}</p>
      </div>

      
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="save">Save changes</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>
<script>
   export default{
      props: ['openmodel'],
      data(){
         return {
            list:{
              name: "",
              email: "",
              phone:""
            },
            errors: {}
         }
      },
      methods:{
        close(){
          this.$emit('closeRequest')
        },
        save(){

          axios.post('/phonebook', this.$data.list)
            .then((response) => this.close())
            .catch( (error) => this.errors = error.response.data.errors);

        }
      }
   }
</script>

