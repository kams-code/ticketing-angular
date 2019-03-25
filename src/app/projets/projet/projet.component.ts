import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { ProjetService } from '../shared/projet.service';
import { EntrepriseService } from '../../entreprises/shared/entreprise.service';
import { Service } from '../../services/shared/service.model';
import { CategorieService } from '../../categories/shared/categorie.service';
=======
>>>>>>> d5d9a42797dd76b5370b74f712d824e50380544e

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

<<<<<<< HEAD
nbrsla=0;
sla=false;
myRating:any;
  constructor(private service: ProjetService, private servicecategorie:  EntrepriseService, private categorie:  CategorieService) { }

  ngOnInit() {
    this.resetForm();
    this.servicecategorie.refreshList();
    this.categorie.refreshList();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      nom: '',
      periode: '',
      isSLA: '',
      entreprise_id:null,
      intitule: null,
      degre: null,
      deadline:null,
      categorie_id:null
      
    };
  }
  myCustomTrackBy(index, item) { return index; }
  issla(){
    if (this.sla==true) {
      this.sla=false;
      this.resetForm();
    } else {
      this.sla=true;
    }
  }
  checksla(){
    return this.sla;
  }
addsla(){
  this.nbrsla=  this.nbrsla+1;
  this.myRating = Array(this.nbrsla).fill('whatever');
}
  onSubmit(form: NgForm) {
    if (form.value.id == null)
      {this.insertRecord(form);
      console.log(form.value);}
    else{
      this.updateRecord(form);
      console.log(form.value);}
  }

  insertRecord(form: NgForm) {
    this.service.postProjet(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putProjet(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });

=======
  constructor() { }

  ngOnInit() {
>>>>>>> d5d9a42797dd76b5370b74f712d824e50380544e
  }

}
