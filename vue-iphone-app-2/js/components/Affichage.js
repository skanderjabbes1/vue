const AffichageComponent = {
  template: `
    <div class ="review-container">
    <ul>
    <li>{{firstName}}</li>
    <li>{{avis}}</li>
    <li>{{note}}</li>

    
    </ul>
    </div>`,
  props: ["firstName", "avis", "note"],
};
export default AffichageComponent;