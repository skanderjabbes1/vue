const ReviewZoneComponent = {
  template: `<FormComponent @display='saveInfo'/>
            <AffichageComponent :firstName="forms1.pseudo" :avis="forms1.avis" :note="forms1.note"/>`,
  data() {
    return {
      // name:"",
      // avis:"",
      // note:"",
      forms1: {},
    };
  },
  methods: {
    saveInfo(data) {
      // this.name=name,
      // this.avis=avis,
      // this.note=note
      this.forms1 = data;
    },
  },
};

export default ReviewZoneComponent;
