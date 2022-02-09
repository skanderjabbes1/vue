const FormComponent = {
  template: `
  <div class="review-zone">
    <form action="#" class="review-form">
      <label for="pseudo">Your name</label>
      <input  type="text" v-model="forms.pseudo">
      <label for="avis">Avis</label>
      <textarea cols="5" v-model="forms.avis"></textarea>
      <label for="note">Note</label>
      <select v-model="forms.note">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button class="button" @click.prevent="save">valider</button>
    </form>
  </div>`,

  data() {
    return {
      // pseudo: "",
      // avis:"",
      // note:"",

      forms: {
        pseudo: "",
        avis:"",
        note:"",
      },
    };
  },
  methods: {
    save() {
      // console.log(this.pseudo,this.avis,this.note);
      // this.$emit("display", this.pseudo,this.avis,this.note);
      this.$emit("display", this.forms);
      console.log(this.forms.pseudo);
      console.log(this.forms.avis);
      console.log(this.forms.note);


    },
  },
};
export default FormComponent;
