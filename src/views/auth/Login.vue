<template>
  <div class="row">
    <div class="col-lg-8 m-auto">


<div class="card" :title="$t('login')">
<article class="card-body">
<a href="" class="float-right btn btn-outline-primary">
   <router-link :to="{ name: 'register' }">
              {{ $t('register') }}
            </router-link>
</a>
<h4 class="card-title mb-4 mt-1">Sign in</h4>
	 <form @submit.prevent="login" @keydown="form.onKeydown($event)">
    <div class="form-group">
    	<label>Your email</label>
       <input v-model="form.email" id="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email">
              <has-error :form="form" field="email" />
    </div> <!-- form-group// -->
    <div class="form-group">
    	<a class="float-right" href="#">Forgot?</a>
    	<label>Your password</label>
        <input v-model="form.password" id="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password" />
    </div> <!-- form-group// -->
    <div class="form-group">
    <div class="checkbox">
      <label> <input type="checkbox" name="remember_me"> Save password </label>
    </div> <!-- checkbox .// -->
    </div> <!-- form-group// -->
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block" :disabled="form.busy"> {{ $t('login') }}  </button>
    </div> <!-- form-group// -->
</form>
</article>
</div>


    </div>
  </div>
</template>

<script>
import { Form, HasError } from 'vform'
import Card from '@/components/Card'

export default {
  middleware: 'guest',

  components: {
    Card,
    HasError
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data () {
    return {
      form: new Form({
        email: '',
        password: ''
      })
    }
  },

  methods: {
    async login () {
      // Submit the form.
      await this.$store.dispatch('auth/login', { form: this.form })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
