<template>
<div class="col-12">
	
	<form action="" class="btn border col-12 col-md-6 mx-auto border-round-3" @submit.prevent="submit">
		<div class="row text-left p-md-5 p-1">
			<div class="col-12 my-2 mb-md-4">
				<h4 class="text-red font-weight-bold">{{formTitle}}</h4>
			</div>
			
			<div class=" px-md-3 pb-md-3 col-12">
				<div class="text-muted small">
					{{typeTitle}} <span class="text-red font-weight-bold">*</span>
				</div>
				<input class="form-control col-12" v-model="form.type" name="tpye"/>
			</div>
			<div class="px-md-3 pb-md-3 col-12">
				<div class="text-muted small">
					{{commentsTitle}} <span class="text-red font-weight-bold">*</span>
				</div>
				<input class="form-control col-12" v-model="form.comments" name="comments"/>
			</div>
			<div class="px-md-3 pb-md-3 col-12">
				<div class="text-muted small">
					{{contractTitle}} <span class="text-red font-weight-bold">*</span>
				</div>
				<input class="form-control col-12" type="number" v-model="form.contract" name="contract"/>
			</div>
			<div class="px-md-3 pb-md-3 col-12">
				<div class="text-muted small">
					{{urgencyTitle}} <span class="text-red font-weight-bold">*</span>
				</div>
				<v-select
					:options="urgencies"
					label="description"
					placeholder="Seleccionar Urgencia"
					v-model="form.urgency" 
					name="urgency"/>
			</div>
			<div class="px-md-3 pb-md-3 col-12">
				<div class="text-muted small">
					{{stateTitle}} <span class="text-danger font-weight-bold">*</span>
				</div>
					<v-select
					:options="states"
					label="description"
					placeholder="Seleccionar Estado"
					v-model="form.state"
					name="state"/>
			</div>
			<div class="text-left px-md-3 pb-md-2 col-12">
				<div class="small text-red font-italic">* Datos obligatorios a completar</div>
			</div>
			<div class="col-12" v-if="errorValidate.length>0">
				<ul class="list-group list-group-flush">
				<li class="list-group-item list-group-item-warning" v-for="er in errorValidate" :key="er">
				{{ er }}
				</li>
				</ul>
			</div>
			<div class="alert alert-success col-12" role="alert" v-if="this.sent">
				Formulario enviado:<br/>
				{{this.typeTitle}}: {{this.form.type}}<br/>
				{{this.commentsTitle}}: {{this.form.comments}}<br/>
				{{this.contractTitle}}: {{this.form.contract}}<br/>
				{{this.urgencyTitle}}: {{this.form.urgency}}<br/>
				{{this.stateTitle}}: {{this.form.state}}<br/>

			</div>
			<div class="px-md-3 pt-md-2 col-12 text-right">
				<input class="btn bg-red text-white border-round-3 col-12 col-sm-4" type="submit" value="AVANZAR"/>
			</div>

		</div>
	</form>

</div>
</template>
<style>
.bg-red 
{
	background-color: rgb(231,65,25) !important;
}
.text-red 
{
	color: rgb(231,65,25) !important;
}
.text-white
{
	color: #FFF;
}
.border-round-3
{
	border-radius: 3ex !important;
}
::placeholder { 
  color: gray !important;
}
</style>


<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: 'TicketForm',
  props: {
    formTitle: String //title passed by argument in the tag
  },
  data() {
      return {
        form: {
			type: "",
			comments: "",
			contract: "",
			urgency: "",
			state: ""
		},
		typeTitle: "Tipo de incidente",
		commentsTitle: "Observaci\u00F3n",
		contractTitle: "Contrato",
		urgencyTitle: "Urgencia",
		stateTitle: "Estado",
		urgencies: ["Alta", "Media", "Baja"],
		states: ["On", "Off"],
		errorValidate: [],
		sent: false
      }
	},
	validations: {
		form: {
			type: { required, min: minLength(10) },
			comments: { required },
			urgency: { required },
			state: { required },
			contract: { required, min: minLength(10) }
		}
	},
	methods: {
		submit()
		{
			this.sent= false;
			this.errorValidate = [];
			//let url;
			if(this.$v.$invalid)
			{
				
				this.validateForm();
			}
			else{
			
				/*
				url= "/?" + this.typeTitle.replace(" ","").replace(" ","") + "=" + this.form.type;
				url += "&" + this.commentsTitle + "=" + this.form.comments;
				url += "&" + this.contractTitle + "=" + this.form.contract;
				url += "&" + this.urgencyTitle + "=" + this.form.urgency;
				url += "&" + this.stateTitle + "=" + this.form.state;

				window.location = url;
				*/
				
				this.sent= true; //sets the page as if the form had been sent.
			}
		},
		validateForm()
		{
			alert(parseInt("666dd"));
			//check for type
			if(!this.$v.form.type.required)
			{
				this.errorValidate.push(this.typeTitle + " debe ser completado (m\u00EDnimo 10 d\u00EDgitos)");
				
			}else if(!this.$v.form.type.min)
			{
				this.errorValidate.push(this.typeTitle + " debe contener diez o m\u00E1s caracteres");
			}
			
			
			//check for observations
			if(!this.$v.form.comments.required)
			{
				this.errorValidate.push(this.commentsTitle + " debe ser completado ");
			}
		
			//check for contract number
			if(!this.$v.form.contract.required)
			{
				this.errorValidate.push(this.contractTitle + " debe ser completado  (m\u00EDnimo 10 d\u00EDgitos num\u00E9ricos) ");
				
			}else if(!this.$v.form.contract.min)
			{
				this.errorValidate.push(this.contractTitle + " debe contener diez o m\u00E1s caracteres")
			}	
			
			//check urgency
			if(!this.urgencies.includes(this.form.urgency))
			{
				this.errorValidate.push("Elija un valor v\u00E1lido para " + this.urgencyTitle);
			}
			//check state
			if(!this.states.includes(this.form.state))
			{
				this.errorValidate.push("Elija un valor v\u00E1lido para " + this.stateTitle);
			}
			
		}
	},
}
</script>
