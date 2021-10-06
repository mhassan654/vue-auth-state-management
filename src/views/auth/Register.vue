<template>
  <div class="row">
    <div class="col-lg-8 m-auto">

      <div class="card" :title="$t('register')">
<article class="card-body">
	<a href="" class="float-right btn btn-outline-primary">Sign up</a>
	<h4 class="card-title mb-4 mt-1">Sign in</h4>
	<p>
		<a href="" class="btn btn-block btn-outline-info"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" class="btn btn-block btn-outline-primary"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<hr>
	<form @submit.prevent="register" @keydown="form.onKeydown($event)">
    <div class="form-group">
        <input v-model="form.name" id="name" :class="{ 'is-invalid': form.errors.has('name') }" name="name" class="form-control" placeholder="Enter name" type="text">
         <has-error :form="form" field="name" />
    </div> <!-- form-group// -->
    <div class="form-group">
       <input v-model="form.email" id="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" placeholder="Enter email">
              <has-error :form="form" field="email" />
    </div> <!-- form-group// -->
     <div class="form-group">
        <input v-model="form.password" id="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password">
              <has-error :form="form" field="password" />
    </div>

     <div class="form-group">
       <input v-model="form.password_confirmation" id="password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation">
              <has-error :form="form" field="password_confirmation" />
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block" :disabled="form.busy">   {{ $t('register') }}  </button>
            </div> <!-- form-group// -->
        </div>
        <div class="col-md-6 text-right">
            <a class="small" href="#">Forgot password?</a>
        </div>
    </div> <!-- .row// -->
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
    return { title: this.$t('register') }
  },

  data () {
    return {
      form: new Form({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      })
    }
  },

  methods: {
    async register () {
      // Submit the form.
      await this.$store.dispatch('auth/register', { form: this.form })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
