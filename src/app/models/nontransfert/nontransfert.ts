import { Input } from "@angular/core";
import { Description } from "../destcriptionossier/description";
import { Jugement } from "../jugement/jugement";

export class Nontransfert {
       //
       numDossier!:number;
       date!:Date;
       etatRetour!:Boolean;
       descriptionDossierModel!:Description;
       jugementModel!:Jugement;
       //
       public set Date(value:Date){
              this.date=value;
       }
}
